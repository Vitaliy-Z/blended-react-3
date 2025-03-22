import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import { Link, useLocation } from 'react-router-dom';

const CountryList = ({ items }) => {
  const location = useLocation();

  return (
    <Grid>
      {items.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={location}>
            <img src={flag} alt={`Flag of ${country}`} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
export default CountryList;
