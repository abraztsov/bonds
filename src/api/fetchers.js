import wrappers from './wrappers';
import {
  CHART_DATA_PRICE,
  CHART_DATA_YIELD,
  CHART_DATA_SPREAD
} from '../constants';

const fetchBond = async () => {
  try {
    // await wrappers.getBond();
    return {
      data: {
        name: 'NII CAPITAL',
        price: '7.625 21',
        currency: 'usd',
        id: 'US6173418413',
        text: 'NII CAPITAL CORP, Telecommunications, NR, til 2016.02.02',
        pricingChart: CHART_DATA_PRICE,
        yieldChart: CHART_DATA_YIELD,
        spreadChart: CHART_DATA_SPREAD
      }
    };
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
export default { fetchBond };
