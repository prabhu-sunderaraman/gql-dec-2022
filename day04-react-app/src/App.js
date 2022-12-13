import logo from './logo.svg';
import './App.css';
import { BooksDisplay } from './BooksDisplay';
import { OneBookDisplay } from './OneBookDisplay';

function App() {
  return (
    <div className="App">
      <BooksDisplay/>
      <hr/>
      <OneBookDisplay/>
    </div>
  );
}

export default App;
