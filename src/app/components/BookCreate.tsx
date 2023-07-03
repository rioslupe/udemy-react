import { useState } from 'react';

// @ts-ignore
export default function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    // @ts-ignore
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}