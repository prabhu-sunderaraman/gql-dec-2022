import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import {apolloClient} from './client';

const oneBookQuery = gql`
    query getBook($bookId: ID) {
        book(id: $bookId) {
            id
            title
            price
            inStock
          }
    }
`;

export function OneBookDisplay() {
    const [book, setBook] = useState({});

    useEffect(() => {
        apolloClient
        .query({
            query: oneBookQuery,
            variables: {
                bookId: "b101"
            }
        })
        .then(response => setBook(response.data.book));
    }, []);

    return <div>
        <p>One Book (b101)</p>
        {
            book.id !== undefined ? 
            <h4>{book.title}, {book.price}</h4>
            : 
            <span/>
        }
        
    </div>;
}