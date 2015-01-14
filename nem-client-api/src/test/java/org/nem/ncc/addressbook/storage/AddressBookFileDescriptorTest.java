package org.nem.ncc.addressbook.storage;

import org.nem.ncc.addressbook.AddressBookStorageException;
import org.nem.ncc.storable.entity.StorableEntityStorageException;
import org.nem.ncc.storable.entity.storage.*;

import java.io.File;

public class AddressBookFileDescriptorTest extends StorableEntityFileDescriptorTest {

	@Override
	protected StorableEntityFileDescriptor createDesciptor(final File file) {
		return new AddressBookFileDescriptor(file);
	}

	@Override
	protected Class<? extends StorableEntityStorageException> getExceptionClass() {
		return AddressBookStorageException.class;
	}

	@Override
	protected Integer getExceptionValue(final Integer originalValue) {
		return originalValue + AddressBookStorageException.OFFSET;
	}
}
