import {useState} from 'react';
import useBooksContext from "@/app/hooks/use-books-context";

// @ts-ignore
export default function BookCreate() {
    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext();

    // @ts-ignore
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">Create!</button>
            </form>
        </div>
    );
}