import logo from './logo.svg';
import './App.css';
import { BooksDisplay } from './BooksDisplay';
import { OneBookDisplay } from './OneBookDisplay';
import { BooksDisplayUsingHooks } from './BooksDisplayUsingHooks';

function App() {
  return (
    <div className="App">
      <BooksDisplayUsingHooks/>
    </div>
  );
}

export default App;
