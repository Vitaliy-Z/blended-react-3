import Container from '../components/Container/Container';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import Heading from '../components/Heading/Heading';
import CountryList from '../components/CountryList/CountryList';
import { fetchByRegion } from '../service/countryApi';
import { useSearchParams } from 'react-router-dom';

const SearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const region = searchParams.get('region');

  useEffect(() => {
    if (!region) return;

    const fetchCountry = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchByRegion(region);
        console.log(' data:', data);
        setCountries(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    region && fetchCountry();
  }, [region]);

  const heandleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={heandleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading title="Oopsss? Something was wrong!!!" bottom />}
        {countries.length > 0 && <CountryList items={countries} />}
      </Container>
    </Section>
  );
};

export default SearchCountry;
