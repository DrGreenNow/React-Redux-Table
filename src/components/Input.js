import React from "react";
import { connect } from "react-redux";

import { search } from "../actions";

const searchBar = props => (
  <form>
    <input
      type="text"
      placeholder="Search for company"
      className="form-control"
      onChange={props.handleChange}
    />
  </form>
);

const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch(search(e.target.value))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(searchBar);
