import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const addBookMutation = gql`
    mutation Mutation($title: String, $price: Float) {
        addBook(title: $title, price: $price, inStock: true) {
        id
        title
        price
        inStock
        }
    }
`;

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

export function AddBook() {
    const [addBook] = useMutation(addBookMutation);
    const [fetchBooksQuery, {data, loading, error}] = useLazyQuery(allBooksQuery);
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0.0)
    const [message, setMessage] = useState('');
    
    
    useEffect(() => {
        if(data) {
            setBooks(data.allBooks);
        }
    }, [data]);

    const addBookButtonClicked = () => {
        addBook({
            variables: {
                title,
                price
            }
        })
        .then(response => {
            fetchBooksQuery()
        });
    }

    return (<div>
        <input type="text" placeholder="book name" onChange={(e) => setTitle(e.currentTarget.value)}></input>
        <input type="text" placeholder="price" onChange={(e) => setPrice(parseFloat(e.currentTarget.value))}></input>
        <button onClick={() => addBookButtonClicked()}>Add book</button>
        <hr/>
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
    </div>);
}