import BookCard from '../components/BookCard';
import MobileSearch from '../components/MobileSearch';

const Bookshelf = () => {
  return (
    <div className="bookshelf grid">
      <MobileSearch />
      <h1 className="bookshelf__header">Release the Kraken of Knowledge!</h1>
      {/* will replace with dynamic rendering once db is up and running */}
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
};

export default Bookshelf;
