import { FaRegMoon, FaMoon } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-darkModeTextLightModeElements dark:bg-darkModeElements shadow-md shadow-lightModeShadow dark:shadow-darkModeShadow">
      <div className="text-lightModeText dark:text-darkModeTextLightModeElements container m-auto py-6 px-3 flex justify-between items-center sm:px-6">
        <h1 className="font-bold text-lg sm:text-2xl">Where in the world?</h1>
        <button className="flex items-center gap-1" onClick={toggleTheme}>
          {theme === 'light' ? <FaRegMoon /> : <FaMoon />}
          Dark Mode
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default Header;
