import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPosts } from "./store/actions";
import OurBody from "./components/OurBody/OurBody";
import Headersort from "./components/HeaderSort/HeaderSort";
import SearchBar from "./components/Input/Input";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";

const app = props => {
  useEffect(() => {
    props.dispatch(fetchPosts());
  }, []);

  if (props.error) {
    return <div>Error! {props.error.message}</div>;
  }

  if (props.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <SearchBar />
      <table>
        <Headersort />
        <OurBody />
      </table>
      <Pagination />
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(app);