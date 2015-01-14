package org.nem.ncc.storable.entity;

import org.hamcrest.core.*;
import org.junit.*;
import org.nem.ncc.test.ExceptionAssert;

public class StorableEntityFileExtensionTest {

	@Test
	public void parameterlessConstructorUsesDefaultFileExtension() {
		// Act:
		final StorableEntityFileExtension fileExtension = this.createEntityFileExtension();

		// Assert:
		Assert.assertThat(fileExtension, IsEqual.equalTo(this.getDefaultFileExtension()));
	}

	@Test
	public void fileExtensionCanBeCreatedAroundNonWhitespaceStringStartingWithADotAndHavingCorrectLength() {
		// Act:
		final StorableEntityFileExtension fileExtension = this.createEntityFileExtension(".bar");

		// Assert:
		Assert.assertThat(fileExtension.toString(), IsEqual.equalTo(".bar"));
	}

	@Test
	public void fileExtensionCannotBeCreatedAroundWhitespaceString() {
		// Assert:
		this.assertThrowsStorageExceptionDuringConstruction((String)null);
		this.assertThrowsStorageExceptionDuringConstruction("");
		this.assertThrowsStorageExceptionDuringConstruction("  \t\t ");
	}

	@Test
	public void fileExtensionCannotBeCreatedAroundStringNotStartingWithADot() {
		// Assert:
		this.assertThrowsStorageExceptionDuringConstruction("bar");
		this.assertThrowsStorageExceptionDuringConstruction("*bar");
		this.assertThrowsStorageExceptionDuringConstruction(",bar");
	}

	@Test
	public void fileExtensionCannotBeCreatedAroundStringWithWrongLength() {
		// Assert:
		this.assertThrowsStorageExceptionDuringConstruction(".fooBar");
		this.assertThrowsStorageExceptionDuringConstruction(".baar");
		this.assertThrowsStorageExceptionDuringConstruction(".anotherBar");
	}

	@Test
	public void equalsOnlyReturnsTrueForEquivalentObjects() {
		// Arrange:
		final StorableEntityFileExtension fileExtension = this.createEntityFileExtension(".bar");

		// Assert:
		Assert.assertThat(this.createEntityFileExtension(".bar"), IsEqual.equalTo(fileExtension));
		Assert.assertThat(this.createEntityFileExtension(".bab"), IsNot.not(IsEqual.equalTo(fileExtension)));
		Assert.assertThat(null, IsNot.not(IsEqual.equalTo(fileExtension)));
		Assert.assertThat(".bar", IsNot.not(IsEqual.equalTo((Object)fileExtension)));
	}

	@Test
	public void hashCodesAreEqualForEquivalentObjects() {
		// Arrange:
		final StorableEntityFileExtension fileExtension = this.createEntityFileExtension(".bar");
		final int hashCode = fileExtension.hashCode();

		// Assert:
		Assert.assertThat(this.createEntityFileExtension(".bar").hashCode(), IsEqual.equalTo(hashCode));
		Assert.assertThat(this.createEntityFileExtension(".bab").hashCode(), IsNot.not(IsEqual.equalTo(hashCode)));
	}

	@Test
	public void toStringReturnsRawFileExtension() {
		// Arrange:
		final StorableEntityFileExtension name = this.createEntityFileExtension(".bar");

		// Assert:
		Assert.assertThat(name.toString(), IsEqual.equalTo(".bar"));
	}

	protected void assertThrowsStorageExceptionDuringConstruction(final String fileExtension) {
		ExceptionAssert.assertThrowsStorageException(
				v -> this.createEntityFileExtension(fileExtension),
				this.getExceptionClass(),
				this.getExceptionValue(StorableEntityStorageException.Code.STORABLE_ENTITY_HAS_INVALID_EXTENSION.value()));
	}

	protected StorableEntityFileExtension getDefaultFileExtension() {
		return StorableEntityFileExtension.getDefaultFileExtension();
	}

	protected StorableEntityFileExtension createEntityFileExtension() {
		return new StorableEntityFileExtension();
	}

	protected StorableEntityFileExtension createEntityFileExtension(final String fileExtension) {
		return new StorableEntityFileExtension(fileExtension);
	}

	protected Class<? extends StorableEntityStorageException> getExceptionClass() {
		return StorableEntityStorageException.class;
	}

	protected Integer getExceptionValue(final Integer originalValue) {
		return originalValue;
	}
}