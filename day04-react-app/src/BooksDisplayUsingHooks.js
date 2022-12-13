import { gql, useQuery } from "@apollo/client";
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

export function BooksDisplayUsingHooks() {
    const {loading, error, data} = useQuery(allBooksQuery);
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

    return <div>
        <p>List of books</p>
        <h3>{message}</h3>
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