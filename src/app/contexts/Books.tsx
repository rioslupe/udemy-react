import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext({
    books: [],
    deleteBookById: (id) => {},
    editBookById: (id, newTitle) => {},
    createBook: (title) => {},
    fetchBooks: () => {}
});

// @ts-ignore
function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }, []);
    // const stableFetchBooks = useCallback(fetchBooks, []);

    // @ts-ignore
    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updatedBooks = books.map((book) => {
            // @ts-ignore
            if (book.id === id) {
                // @ts-ignore
                return {...book, ...response.data};
            }

            return book;
        });

        // @ts-ignore
        setBooks(updatedBooks);
    };

    // @ts-ignore
    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBooks = books.filter((book) => {
            // @ts-ignore
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    // @ts-ignore
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks = [...books, response.data];
        // @ts-ignore
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    };

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;