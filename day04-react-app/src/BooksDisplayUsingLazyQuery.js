import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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

export function BooksDisplayUsingLazyQuery() {
    const [fetchBooksQuery, {loading, error, data}] = useLazyQuery(allBooksQuery, { pollInterval: 5000, fetchPolicy: "cache-only" });
    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        if(loading) {
            setMessage("Loading")
        }
        if(error) {
            setMessage(error.message)
        }
        if(data) {
            setMessage("Loaded books")
            setBooks(data.allBooks);
        }
    }, [data]);

    const fetchBooksButtonClicked = () => {
        fetchBooksQuery();
    }

    return <div>
        <p>List of books</p>
        <h3>{message}</h3>
        <button onClick={() => fetchBooksButtonClicked()}>Fetch books</button>
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