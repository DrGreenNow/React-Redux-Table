import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import getSortedCompanies from "../../selectors/balance";
import { handlePageChange } from "../../store/actions/index";
import "./Pagination.css";

const Pagination = props => {
  const pagesCount = Math.ceil(props.filteredArr.length / props.pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  let hrefLink = '#';

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={
              page === props.currentPage ? "page-item active" : "page-item"
            }
          >
            <a
              className="page-link"
              href={hrefLink}
              onClick={() => props.onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    filteredArr: getSortedCompanies(
      state.ourData.json,
      state.ourSort.sortCompany,
      state.ourSort.sortBalance,
      state.ourData.action
    ),
    pageSize: state.ourPagination.pageSize,
    currentPage: state.ourPagination.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPageChange: page => dispatch(handlePageChange(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
