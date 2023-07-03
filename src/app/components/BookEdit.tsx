import {useState} from "react";

// @ts-ignore
export default function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    // @ts-ignore
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(book.id, title);
    };

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">Save</button>
        </form>
    );
}