import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import {apolloClient} from './client';

const allBooksQuery = gql`
    query AllBooks {
        allBooks {
        id
        title
        price
        inStock
        unitsSold
        }
    }
`;

export function BooksDisplay() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        apolloClient
        .query({
            query: allBooksQuery
        })
        .then(response => setBooks(response.data.allBooks));
    }, []);

    return <div>
        <p>List of books</p>
        <table>
            <tbody>
            {
                books.map(book => <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.price}</td>
                    <td>{book.inStock ? `yes` : `no` }</td>
                </tr>)    
            }   
            </tbody>
        </table>
        
    </div>;
}