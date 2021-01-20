import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DataTable from './components/DataTable';

import { fetchData } from './service/fetchData';

import { fetchDataSuccess } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render(){
    const {data, error, pending} = this.props;
    return (
      <div className="App">
        <DataTable appData={data} />
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, pending = false }) => ({
  data,
  pending
});
export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(App);
