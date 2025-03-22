import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from '../service/countryApi';

import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import Loader from '../components/Loader/Loader';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();

  const goBack = useRef(location?.state ?? '/');

  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={goBack.current} />
        {isLoading && <Loader />}
        {error && <Heading title="Oopsss? Something was wrong!!!" bottom />}
        {country && <CountryInfo item={country} />}
      </Container>
    </Section>
  );
};

export default Country;
