import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import CountryInfo from './pages/CountryInfo';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = useState(null);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const initialTheme = localStorage.getItem('theme');
    initialTheme ? setTheme(initialTheme) : setTheme('light');
  }, [theme]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('../../countries-app/data.json');
      const data = await res.json();

      setCountries(data);
    };

    fetchCountries();
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <div className="bg-lightModeBg min-h-[100vh] dark:bg-darkModeBg">
          <Header theme={theme} toggleTheme={toggleTheme} />

          <Routes>
            <Route
              path="/countries-app"
              element={<Home countries={countries} />}
            />
            <Route
              path="/countries-app/:id"
              element={<CountryInfo countries={countries} />}
            />
          </Routes>

          <footer>
            Created by{' '}
            <Link to="https://github.com/mwiafeansong">mwiafenasong</Link>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
