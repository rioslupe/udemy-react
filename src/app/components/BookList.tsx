import BookShow from "@/app/components/BookShow";

// @ts-ignore
export default function BookList({books, onDelete, onEdit}) {
    // @ts-ignore
    const renderedBooks = books.map((book) => {
        return (
            <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
        );
    });

    return <div className="book-list">{renderedBooks}</div>;
}