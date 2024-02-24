import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';

const Home = ({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [country, setCountry] = useState('');

  const fetchRegionCountries = (region) => {
    const countriesInRegion = countries.filter(
      (country) => country.region === region
    );
    setFilteredCountries(countriesInRegion);
  };

  return (
    <div className="container m-auto py-6 px-3 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row justify-between">
        <form className="relative">
          <FaSearch className="absolute top-3 left-3 text-slate-500" />
          <input
            className="bg-darkModeTextLightModeElements dark:bg-darkModeElements dark:text-darkModeTextLightModeElements py-2 px-9 w-full shadow-md shadow-lightModeShadow dark:shadow-darkModeShadow rounded-md"
            type="text"
            value={country}
            placeholder="Search for a country..."
            onChange={(e) => setCountry(e.target.value)}
          />
        </form>
        <Dropdown fetchRegionCountries={fetchRegionCountries} />
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-20 mt-20">
        {filteredCountries
          ? filteredCountries
              ?.filter((item) =>
                item.name.toLowerCase().includes(country.trim().toLowerCase())
              )
              .map((item) => (
                <Card
                  key={item.alpha3Code}
                  code={item.alpha3Code}
                  flag={item.flags.svg}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              ))
          : countries
              ?.filter((item) =>
                item.name.toLowerCase().includes(country.trim().toLowerCase())
              )
              .map((item) => (
                <Card
                  key={item.alpha3Code}
                  code={item.alpha3Code}
                  flag={item.flags.svg}
                  name={item.name}
                  population={item.population}
                  region={item.region}
                  capital={item.capital}
                />
              ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  countries: PropTypes.array,
};

export default Home;
