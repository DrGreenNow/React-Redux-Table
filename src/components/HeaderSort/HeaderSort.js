import React from "react";
import { connect } from "react-redux";

import { sortCompany, sortBalance } from "../../store/actions";
import './HeaderSort.css';

const headerSort = props => (
  <thead>
    <tr>
      <td className="thePointer" onClick={props.sortOurCompany}>
        Company
      </td>
      <td className="thePointer" onClick={props.sortOurBalance}>
        Balance
      </td>
      <td>Registered</td>
      <td>Country</td>
      <td>Number of employers</td>
      <td>Show employers</td>
    </tr>
  </thead>
);

const mapDispatchToProps = dispatch => {
  return {
    sortOurCompany: () => dispatch(sortCompany()),
    sortOurBalance: () => dispatch(sortBalance())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(headerSort);
