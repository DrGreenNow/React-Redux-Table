import React from "react";
import { connect } from "react-redux";

import { onSort } from "../../store/actions";
import "./HeaderSort.css";

const headerSort = props => {
  return (
    <thead>
      <tr>
        <td className="thePointer" onClick={() => props.onOurSort("company")}>
          Company
        </td>
        <td className="thePointer" onClick={() => props.onOurSort("balance")}>
          Balance
        </td>
        <td
          className="thePointer"
          onClick={() => props.onOurSort("registered")}
        >
          Registered
        </td>
        <td>Country</td>
        <td>Number of employers</td>
        <td>Show employers</td>
      </tr>
    </thead>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onOurSort: path => dispatch(onSort(path))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(headerSort);
