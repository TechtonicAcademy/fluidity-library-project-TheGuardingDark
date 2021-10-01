import { Switch, Route } from 'react-router-dom';
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
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/bookshelf" component={Bookshelf} />
        <Route
          path={['/addbook', '/add-book', '/addBook']}
          component={AddBook}
        />
        <Route path="/details" component={Details} />
        <Route
          path={['/editbook', '/edit-book', '/editBook']}
          component={EditBook}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
