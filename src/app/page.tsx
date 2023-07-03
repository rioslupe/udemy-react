'use client';

import {Provider} from "@/app/contexts/Books";
import BooksPage from "@/app/pages/Books";

export default function Home() {
    return (
        <Provider>
            <BooksPage />
        </Provider>
    );
}
