import { useQuery } from 'react-query';

// Local Dependencies
import { queryCovidData } from './queryCovidData';
import { CovidSummaryData } from './types';

const CovidDashPage = () => {
  const { isLoading, error, data } = useQuery<CovidSummaryData, Error>(
    'repoData',
    queryCovidData
  );
  console.log('isLoading :>> ', isLoading);
  console.log('error :>> ', error);
  console.log('data :>> ', data);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{`An error has occurred: ${error.message}`}</p>;

  return <div>CovidDashPage</div>;
};

export default CovidDashPage;
