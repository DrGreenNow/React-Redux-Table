import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchPosts } from "./store/actions";
import { paginatedJson } from "./store/actions";
import OurBody from "./components/OurBody/OurBody";
import Headersort from "./components/HeaderSort/HeaderSort";
import Pagination from "./components/Pagination/Pagination";
import NavBar from "./components/Navbar/NavBar";
import "./App.css";
import Footer from "./components/Footer/Footer";

const app = props => {
  useEffect(() => {
    props.fetch();
  }, []);

  useEffect(() => {
    props.returnpaginatedJson(resultedJson);
  });

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  let filteredJson = [];
  if (props.action !== "") {
    var word = new RegExp("^" + props.action, "i");
    filteredJson = props.ourJson.filter(item => {
      return word.test(item.company);
    });
  } else filteredJson = props.ourJson;

  const sortedJson = _.orderBy(
    filteredJson,
    [props.sortColumn.path],
    [props.sortColumn.order]
  );

  const resultedJson = paginate(sortedJson, props.currentPage, props.pageSize);

  if (props.error) {
    return <div>Error! {props.error.message}</div>;
  }

  if (props.loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="wrapper">
        <table>
          <Headersort />
          <OurBody />
        </table>
        <Pagination />
      </div>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  ourJson: state.ourData.json,
  loading: state.loading,
  error: state.error,
  sortColumn: state.ourSort.sortColumn,
  action: state.ourPagination.searchValue,
  pageSize: state.ourPagination.pageSize,
  currentPage: state.ourPagination.currentPage
});

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetchPosts()),
    returnpaginatedJson: resultedJson => dispatch(paginatedJson(resultedJson))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(app);
