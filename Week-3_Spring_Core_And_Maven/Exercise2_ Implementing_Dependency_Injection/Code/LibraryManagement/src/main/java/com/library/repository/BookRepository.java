package com.library.repository;

public class BookRepository {
	public void saveBook(String bookName) {
        System.out.println("Book \"" + bookName + "\" saved to the repository.");
    }
	public void performRepositoryAction() {
        System.out.println("BookRepository is working.");
    }
}
