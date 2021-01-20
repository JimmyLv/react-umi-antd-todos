import * as PropTypes from 'prop-types';

export function Link({ href = 'https://blog.jimmylv.info', children }) {
  return (
    <a className="App-link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.defaultProps = {
  href: 'http://localhost:3001',
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
};
