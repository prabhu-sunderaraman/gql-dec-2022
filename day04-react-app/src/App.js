import logo from './logo.svg';
import './App.css';
import { BooksDisplay } from './BooksDisplay';
import { OneBookDisplay } from './OneBookDisplay';
import { BooksDisplayUsingHooks } from './BooksDisplayUsingHooks';
import { BooksDisplayUsingLazyQuery } from './BooksDisplayUsingLazyQuery';

function App() {
  return (
    <div className="App">
      <BooksDisplayUsingLazyQuery/>
    </div>
  );
}

export default App;
