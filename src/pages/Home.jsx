import { useEffect, useState } from 'react';
import { getCountries } from '../service/countryApi';

import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading title="Oopsss? Something was wrong!!!" bottom />}
        {countries.length > 0 && <CountryList items={countries} />}
      </Container>
    </Section>
  );
};
export default Home;
