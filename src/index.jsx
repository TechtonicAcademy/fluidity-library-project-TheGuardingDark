import { render } from 'react-dom';
import App from './App';
// eslint-disable-next-line import/no-named-as-default
import ErrorBoundary from './ErrorBoundary';
import './styles/index.scss';

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
