import React from 'react';
import { connect } from 'react-redux';

import { search } from '../actions';

const searchBar = ({ dispatch }) => (
  <form>
    <input 
      type="text" 
      placeholder="Search for company" 
      className='form-control' 
      onChange={(e) => {
        dispatch(search(e.target.value));
      }}
    />
  </form>
)

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(searchBar);

