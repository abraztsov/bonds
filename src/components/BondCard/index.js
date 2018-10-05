import React from 'react';
import BondCard from './BondCard.js';
import { compose, branch, renderComponent } from 'recompose';

import withBondOnMount from '../hocs/withBondOnMount';

const Loader = () => <div>Loading...</div>;
const isLoading = ({ bond }) => !bond.id;
const withLoadingTextWhileLoading = branch(isLoading, renderComponent(Loader));

export { BondCard };

export default compose(
  withBondOnMount,
  withLoadingTextWhileLoading
)(BondCard);
