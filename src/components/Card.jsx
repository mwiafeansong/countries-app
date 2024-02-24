import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ code, name, population, region, capital, flag }) => {
  return (
    <div className="bg-darkModeTextLightModeElements dark:bg-darkModeElements shadow-md shadow-lightModeShadow dark:shadow-darkModeShadow dark:text-darkModeTextLightModeElements min-h-max rounded-md x">
      <Link to={`/countries-app/${code}`}>
        <img
          src={flag}
          alt="flag"
          className="w-full h-1/2 object-cover rounded-tl-md rounded-tr-md"
        />
        <div className="p-5">
          <h2 className="font-bold mb-3 mt-1">{name}</h2>
          <p>
            <span className="font-semibold">Population:</span>{' '}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  flag: PropTypes.string,
};

export default Card;
