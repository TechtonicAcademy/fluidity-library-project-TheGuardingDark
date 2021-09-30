import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// eslint-disable-next-line import/no-named-as-default
import ErrorBoundary from './ErrorBoundary';
import './styles/index.scss';

render(
  <Router>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>,
  document.getElementById('root')
);
