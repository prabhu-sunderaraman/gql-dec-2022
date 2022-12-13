import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
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
    //const {data, loading, error} = useQuery(allBooksQuery, {fetchPolicy: "cache-only"});
    const [fetchBooksQuery, {data, loading, error}] = useLazyQuery(allBooksQuery);
    // const [addBook] = useMutation(addBookMutation, {
    //     refetchQueries: fetchBooksQuery
    // });


    const [addBook] = useMutation(addBookMutation, {
        update(cache, {data: { addBook }}) {
            cache.modify({
                fields: {
                    allBooks(existingBooks = []) {
                        console.log(addBook);
                        let newBook = cache.writeFragment({
                          data: addBook,
                          fragment: gql`
                            fragment NewBook on Book {
                              id
                              title
                              price
                              inStock
                            }
                          `
                        });
                        return [...existingBooks, newBook];
                      } 
                }
            })
        }
    });
    
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0.0)
    
    
    
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
        })//.then(response => fetchBooksQuery());
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
        <hr/>
        <button onClick={() => fetchBooksQuery()}>Fetch books</button>
    </div>);
}