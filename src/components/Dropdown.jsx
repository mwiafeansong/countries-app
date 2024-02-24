import PropTypes from 'prop-types';
import { FaCaretDown } from 'react-icons/fa';

const Dropdown = ({ fetchRegionCountries }) => {
  return (
    <div className="relative text-lightModeText dark:text-darkModeTextLightModeElements w-[60%] group sm:w-auto">
      <div className="flex items-center justify-between gap-2 bg-darkModeTextLightModeElements dark:bg-darkModeElements shadow-md shadow-lightModeShadow dark:shadow-darkModeShadow py-2 px-4 rounded-md cursor-pointer">
        Filter by Region
        <FaCaretDown />
      </div>
      <ul className="absolute hidden w-full py-2 px-4 mt-[1px] rounded-md shadow-md group-hover:block bg-darkModeTextLightModeElements dark:bg-darkModeElements">
        <li>
          <button onClick={() => fetchRegionCountries('Africa')}>Africa</button>
        </li>
        <li>
          <button onClick={() => fetchRegionCountries('Americas')}>
            America
          </button>
        </li>
        <li>
          <button onClick={() => fetchRegionCountries('Asia')}>Asia</button>
        </li>
        <li>
          <button onClick={() => fetchRegionCountries('Europe')}>Europe</button>
        </li>
        <li>
          <button onClick={() => fetchRegionCountries('Oceania')}>
            Oceania
          </button>
        </li>
      </ul>
    </div>
  );
};

Dropdown.propTypes = {
  fetchRegionCountries: PropTypes.func,
};
export default Dropdown;
