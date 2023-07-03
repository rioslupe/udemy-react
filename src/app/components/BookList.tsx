import BookShow from "@/app/components/BookShow";
import useBooksContext from "@/app/hooks/use-books-context";

// @ts-ignore
export default function BookList() {
    const {books} = useBooksContext();

    // @ts-ignore
    const renderedBooks = books.map((book) => {
        return (
            <BookShow key={book.id} book={book} />
        );
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
}