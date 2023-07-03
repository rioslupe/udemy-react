'use client';

import {useEffect} from 'react';
import BookList from "@/app/components/BookList";
import BookCreate from "@/app/components/BookCreate";
import useBooksContext from "@/app/hooks/use-books-context";

export default function BooksPage() {
    const {fetchBooks} = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    );
}
