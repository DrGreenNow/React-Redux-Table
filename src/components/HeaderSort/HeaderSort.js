import React from "react";
import { connect } from "react-redux";

import { onSort } from "../../store/actions";
import "./HeaderSort.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const headerSort = props => {
  const renderSortIcon = name => {
    if (name !== props.sortColumn.path) return null;
    if (props.sortColumn.order === "asc")
      return <FontAwesomeIcon icon={faAngleDown} />;
    if (props.sortColumn.order === "desc")
      return <FontAwesomeIcon icon={faAngleUp} />;
  };

  return (
    <thead>
      <tr>
        <td 
          className="thePointer" 
          onClick={() => props.onOurSort("company")}
        >
          Company {renderSortIcon("company")}
        </td>
        <td 
          className="thePointer" 
          onClick={() => props.onOurSort("balance")}
        >
          Balance {renderSortIcon("balance")}
        </td>
        <td
          className="thePointer"
          onClick={() => props.onOurSort("registered")}
        >
          Registered {renderSortIcon("registered")}
        </td>
        <td>Country</td>
        <td>Number of employers</td>
        <td>Show employers</td>
      </tr>
    </thead>
  );
};

const mapStateToProps = state => {
  return {
    sortColumn: state.ourSort.sortColumn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOurSort: path => dispatch(onSort(path))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(headerSort);
