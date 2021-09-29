import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBook from './pages/AddBook';
import Bookshelf from './pages/Bookshelf';
import Details from './pages/Details';
import EditBook from './pages/EditBook';
import Landing from './pages/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path={['/addbook', '/add-book', '/addBook']}>
            <AddBook />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path={['/editbook', '/edit-book', '/editBook']}>
            <EditBook />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
