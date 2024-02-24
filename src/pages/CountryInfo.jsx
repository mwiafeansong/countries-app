import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';

const CountryInfo = ({ countries }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      const dataItem = data.filter((item) => item.alpha3Code === id);

      setCountry(...dataItem);
    };

    fetchCountry();
  }, [id]);

  return (
    <div className="mb-8 text-lightModeText dark:text-darkModeTextLightModeElements container mx-auto py-6 px-3 sm:px-6">
      <button
        onClick={() => navigate(-1)}
        className="flex gap-2 items-center py-2 px-6 shadow-lg shadow-lightModeShadow dark:bg-darkModeElements dark:shadow-darkModeShadow dark:text-darkModeTextLightModeElements rounded-md mt-6 mb-12 w-fit"
      >
        <FaArrowLeft /> Back
      </button>
      {country && (
        <div className="flex flex-col gap-24 sm:flex-row sm:items-center">
          <img
            src={country.flags.svg}
            alt="flag"
            className="w-full sm:w-[40%]"
          />
          <div>
            <h2 className="text-3xl font-bold mb-5">{country.name}</h2>
            <div className="flex flex-col gap-7 sm:flex-row sm:gap-14 leading-8 ">
              <div>
                <p>
                  <span className="font-semibold">Native Name:</span>{' '}
                  {country.name}
                </p>
                <p>
                  <span className="font-semibold">Population:</span>{' '}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{' '}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span>{' '}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital:</span>{' '}
                  {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{' '}
                  {country.topLevelDomain[0]}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{' '}
                  {country.currencies[0].name}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>
                  {country.languages.map((lang, index) =>
                    index !== country.languages.length - 1 ? (
                      <span key={lang.iso639_1}> {lang.name}, </span>
                    ) : (
                      <span key={lang.iso639_1}>{lang.name}</span>
                    )
                  )}
                </p>
              </div>
            </div>
            <div className="mt-6 space-x-2">
              {country.borders && (
                <span className="font-semibold">Border Countries: </span>
              )}
              <div className="inline-flex flex-wrap gap-2 items-center">
                {country.borders?.map((border) =>
                  countries
                    ?.filter((item) => item.alpha3Code === border)
                    ?.map((count) => (
                      <button
                        key={count.alpha3Code}
                        onClick={() =>
                          navigate(`/countries-app/${count.alpha3Code}`)
                        }
                        className="shadow-md bg-darkModeTextLightModeElements shadow-lightModeShadow dark:bg-darkModeElements dark:shadow-darkModeShadow rounded-sm px-4 py-1"
                      >
                        {count.name}
                      </button>
                    ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CountryInfo.propTypes = {
  countries: PropTypes.array,
};

export default CountryInfo;
