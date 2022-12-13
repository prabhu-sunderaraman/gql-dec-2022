import logo from './logo.svg';
import './App.css';
import { BooksDisplay } from './BooksDisplay';
import { OneBookDisplay } from './OneBookDisplay';
import { BooksDisplayUsingHooks } from './BooksDisplayUsingHooks';
import { BooksDisplayUsingLazyQuery } from './BooksDisplayUsingLazyQuery';
import { AddBook } from './AddBook';

function App() {
  return (
    <div className="App">
      <AddBook/>
    </div>
  );
}

export default App;
