import React from 'react';
import { connect } from 'react-redux'

import { fetchPosts } from '../actions';
import OurBody from '../containers/OurBody';
import Headersort from '../containers/Headersort';
import SearchBar from '../containers/Search';
import '../css/index.css';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { loading, error } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
    <div>
      <SearchBar />
      <table>
        <Headersort />
        <OurBody />
      </table>
    </div>
    )
  }
}
  
const mapStateToProps = state => ({
  loading: state.loading,
  error: state.error
});

App = connect(mapStateToProps)(App);
  
export default App;
