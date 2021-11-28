import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import AddBook from './pages/AddBook';
import Bookshelf from './pages/Bookshelf';
import Details from './pages/Details';
import EditBook from './pages/EditBook';
import Landing from './pages/Landing';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/bookshelf" forceRefresh>
          <Bookshelf searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </Route>
        <Route
          path={['/addbook', '/add-book', '/addBook']}
          component={AddBook}
        />
        <Route path="/details/:id" component={Details} />
        <Route path="/editBook/:id" component={EditBook} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
