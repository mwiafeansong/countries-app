import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  const [country, setCountry] = useState('');
  return (
    <form className="relative">
      <FaSearch className="absolute top-3 left-3 text-slate-500" />
      <input
        className="bg-darkModeTextLightModeElements dark:bg-darkModeElements py-2 px-9 w-full shadow-md shadow-lightModeShadow rounded-md"
        type="text"
        value={country}
        placeholder="Search for a country..."
        onChange={(e) => setCountry(e.target.value)}
      />
    </form>
  );
};

export default Searchbar;
