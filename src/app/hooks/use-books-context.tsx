import {useContext} from "react";
import BooksContext from "@/app/contexts/Books";

function useBooksContext() {
    return useContext(BooksContext)
}

export default useBooksContext;