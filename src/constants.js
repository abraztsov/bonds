export const DATE_CONTROL_OPTIONS = [
  { label: 'Week', value: 'week', default: true },
  { label: 'Month', value: 'month' },
  { label: 'Quarter', value: 'quarter' },
  { label: 'Year', value: 'year' },
  { label: 'Max', value: 'max' }
];

export const BOND_CHART_PARAMS = ['price', 'spread', 'yield'];

export const CHART_DATA_PRICE = [
  [Date.UTC(2018, 0, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 3), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 4), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 3), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 4), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 5), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 6), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 3, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 3, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 4, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 5, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 6, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 7, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 9, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 11, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2019, 1, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2019, 2, 1), Math.floor(Math.random() * 10) + 20]
];

export const CHART_DATA_YIELD = [
  [Date.UTC(2018, 0, 1), 0.5],
  [Date.UTC(2018, 5, 1), 0.6],
  [Date.UTC(2018, 11, 1), 0.7],
  [Date.UTC(2019, 0, 1), 0.8],
  [Date.UTC(2019, 5, 1), 0.9],
  [Date.UTC(2019, 11, 1), 1],
  [Date.UTC(2020, 0, 1), 1.1],
  [Date.UTC(2020, 5, 1), 1.2],
  [Date.UTC(2020, 11, 1), 1.2],
  [Date.UTC(2021, 0, 1), 1.3],
  [Date.UTC(2022, 0, 1), 1.4],
  [Date.UTC(2023, 0, 1), 1.6],
  [Date.UTC(2024, 0, 1), 1.8],
  [Date.UTC(2025, 0, 1), 1.9],
  [Date.UTC(2026, 0, 1), 2.0],
  [Date.UTC(2027, 0, 1), 2.1],
  [Date.UTC(2028, 0, 1), 2.3],
  [Date.UTC(2029, 0, 1), 2.5],
  [Date.UTC(2030, 0, 1), 2.6]
];

export const CHART_DATA_SPREAD = [
  [Date.UTC(2018, 0, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 3), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 0, 4), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 1, 3), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 4), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 5), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 2, 6), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 3, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 3, 2), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 4, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 5, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 6, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 7, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 9, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2018, 11, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2019, 1, 1), Math.floor(Math.random() * 10) + 20],
  [Date.UTC(2019, 2, 1), Math.floor(Math.random() * 10) + 20]
];

export const CHART_GROUPING_MAPPING = {
  week: [['week', [1]]],
  month: [['month', [1]]],
  quarter: [['month', [3]]],
  year: [['year', [1]]],
  max: [['day', [1]]]
};

export const CHART_DATA_MAPPING = {
  price: 'pricingChart',
  spread: 'yieldChart',
  yield: 'spreadChart'
};
