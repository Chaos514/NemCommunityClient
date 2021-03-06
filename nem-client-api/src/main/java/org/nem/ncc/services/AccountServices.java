package org.nem.ncc.services;

import org.nem.core.crypto.Hash;
import org.nem.core.model.*;
import org.nem.core.model.ncc.*;
import org.nem.core.serialization.Deserializer;
import org.nem.core.time.TimeInstant;
import org.nem.ncc.connector.SimpleNisConnector;
import org.nem.ncc.model.NisApiId;

import java.util.List;

/**
 * This class provides higher-level functions around accessing accounts.
 */
public class AccountServices {
	private final SimpleNisConnector nisConnector;

	/**
	 * Creates new account services.
	 *
	 * @param nisConnector The NIS connector.
	 */
	public AccountServices(final SimpleNisConnector nisConnector) {
		this.nisConnector = nisConnector;
	}

	/**
	 * Gets account information for the specified account.
	 *
	 * @param address The account address.
	 * @return The account information.
	 */
	public AccountMetaDataPair getAccountMetaDataPair(final Address address) {
		final Deserializer deserializer = this.nisConnector.get(NisApiId.NIS_REST_ACCOUNT_LOOK_UP, formatQueryString(address, null));
		return new AccountMetaDataPair(deserializer);
	}

	private NisApiId typeOfTransactionToQueryId(final TransactionDirection direction) {
		switch (direction) {
			case INCOMING:
				return NisApiId.NIS_REST_ACCOUNT_TRANSFERS_INCOMING;
			case OUTGOING:
				return NisApiId.NIS_REST_ACCOUNT_TRANSFERS_OUTGOING;
			default:
				return NisApiId.NIS_REST_ACCOUNT_TRANSFERS_ALL;
		}
	}

	/**
	 * Gets confirmed transactions for the specified account.
	 *
	 * @param direction Type of transactions.
	 * @param address The account address.
	 * @param endHash The hash of top-most transaction.
	 * @return The account information.
	 */
	public List<TransactionMetaDataPair> getTransactions(final TransactionDirection direction, final Address address, final Hash endHash) {
		final String queryString = formatQueryHashString(address, endHash);
		final Deserializer deserializer = this.nisConnector.get(this.typeOfTransactionToQueryId(direction), queryString);
		return deserializer.readObjectArray("data", TransactionMetaDataPair::new);
	}

	/**
	 * Gets confirmed transactions for the specified account.
	 *
	 * @param address The account address.
	 * @param startTime The start time.
	 * @return The account information.
	 */
	public List<TransactionMetaDataPair> getConfirmedTransactions(final Address address, final TimeInstant startTime) {
		final String queryString = formatQueryString(address, startTime);
		final Deserializer deserializer = this.nisConnector.get(NisApiId.NIS_REST_ACCOUNT_TRANSFERS, queryString);
		return deserializer.readObjectArray("data", TransactionMetaDataPair::new);
	}

	/**
	 * Gets unconfirmed transactions for the specified account.
	 *
	 * @param address The account address.
	 * @return The account information.
	 */
	public List<Transaction> getUnconfirmedTransactions(final Address address) {
		final String queryString = formatQueryString(address, null);
		final Deserializer deserializer = this.nisConnector.get(NisApiId.NIS_REST_ACCOUNT_UNCONFIRMED, queryString);
		return deserializer.readObjectArray("data", TransactionFactory.VERIFIABLE);
	}

	/**
	 * Formats a string containing address and time stamp information.
	 *
	 * @param address The address.
	 * @param timeStamp The time stamp.
	 * @return The formatted string.
	 */
	private static String formatQueryString(final Address address, final TimeInstant timeStamp) {
		final StringBuilder builder = new StringBuilder();
		builder.append("address=");
		builder.append(address.getEncoded());

		if (null != timeStamp) {
			builder.append("&timeStamp=");
			builder.append(timeStamp);
		}

		return builder.toString();
	}

	/**
	 * Formats a string containing address and hash information.
	 *
	 * @param address The address.
	 * @param hash The hash.
	 * @return The formatted string.
	 */
	private static String formatQueryHashString(final Address address, final Hash hash) {
		final StringBuilder builder = new StringBuilder();
		builder.append("address=");
		builder.append(address.getEncoded());

		if (null != hash) {
			builder.append("&hash=");
			builder.append(hash);
		}

		return builder.toString();
	}
}
