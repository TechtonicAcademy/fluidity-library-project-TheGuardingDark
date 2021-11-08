import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className="landing">
      <section className="heroImg">
        <figcaption className="heroImg__caption heroImg__caption">
          Books.
        </figcaption>
        <figcaption className="heroImg__caption heroImg__caption--sm">
          Read em and Weep
        </figcaption>
      </section>
      <header className="landing landing__header">
        Welcome to the Library
      </header>
      <p className="landing landing__text">
        Lorem ipsum dolor sit amet. At nobis galisum rem inventore tempore ut
        omnis asperiores et dicta facilis ut autem eos facilis voluptatem et
        eligendi neque. Eum nihil reprehenderit aut ullam magnam cum rerum
        magnam!
      </p>
      <Link to="/bookshelf">
        <Button text="See Books" />
      </Link>
      <p className="landing landing__text">
        Lorem ipsum dolor sit amet. At nobis galisum rem inventore tempore ut
        omnis asperiores et dicta facilis ut autem eos facilis voluptatem et
        eligendi neque. Eum nihil reprehenderit aut ullam magnam cum rerum
        magnam!
      </p>
      <Link to="/addbook">
        <Button text="Add a Book" />
      </Link>
    </div>
  );
};

export default Landing;
