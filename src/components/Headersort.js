import React from "react";
import { connect } from "react-redux";

import { sortCompany, sortBalance } from "../actions";

const headerSort = ({ dispatch }) => (
  <thead>
    <tr>
      <td
        className="thePointer"
        onClick={() => {
          dispatch(sortCompany());
        }}
      >
        Company
      </td>
      <td
        className="thePointer"
        onClick={() => {
          dispatch(sortBalance());
        }}
      >
        Balance
      </td>
      <td>Registered</td>
      <td>Country</td>
      <td>Number of employers</td>
      <td>Show employers</td>
    </tr>
  </thead>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(headerSort);
