//import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import CreateBook from './components/CreateBook';
import ShowBookDetails from './components/ShowBookDetails';
import ShowBookList from './components/ShowBookList';
import UpdateBookInfo from './components/UpdateBookInfo';

function App() {
  return (
<Router>
  <div>
    <Routes>
      <Route exact path="/" element={<ShowBookList/>} />
      <Route path="/create-book" element={<CreateBook/>} />
      <Route path="/edit-book/:id" element={<UpdateBookInfo/>} />
      <Route path="/show-book/:id" element={<ShowBookDetails/>} />
      </Routes>
  </div>
</Router>
  );
}

export default App;

