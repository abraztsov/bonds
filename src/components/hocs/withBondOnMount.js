import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBond } from '../../actions/bond';

const mapStateToProps = state => ({
  bond: state.bond
});

const mapDispatchToProps = { getBond };

const withBondOnMount = WrappedComponent => {
  class WithBondOnMount extends Component {
    async componentDidMount() {
      const { getBond } = this.props;
      await getBond();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithBondOnMount);
};

export default withBondOnMount;
