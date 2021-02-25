import axios, { AxiosResponse } from 'axios';

// Local Dependencies
import { CovidSummaryData } from './types';

export const queryCovidData = async () => {
  try {
    const { data } = await axios.get<CovidSummaryData>(
      `https://covidtrackerapi.bsg.ox.ac.uk/api/v2/stringency/date-range/2020-03-15/2021-02-25`
      // {
      //   headers: {
      //     'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
      //   },
      // }
    );
    return data;
  } catch (error) {
    return error;
  }
};
