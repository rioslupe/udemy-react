import {useState} from "react";
import useBooksContext from "@/app/hooks/use-books-context";

// @ts-ignore
export default function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const {editBookById} = useBooksContext();

    // @ts-ignore
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}