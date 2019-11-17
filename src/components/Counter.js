import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <>
      <h2>{ counter }</h2>

      <button onClick={ dec }>dec</button>

      <button onClick={ inc }>inc</button>

      <button onClick={ rnd }>rnd</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);
