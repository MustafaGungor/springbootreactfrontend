import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {BootstrapTable,TableHeaderColumn} from "react-bootstrap-table";
class App extends Component {

  constructor(props){
      super(props);
      this.options = {
          defaultSortName: 'name',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
      };

      this.state = {
          list: [],
          row: null,
          selectedId: null,
          showAddModal: false,
          showUpdateModal: false
      }
  }
  render() {

      return (
              <div className="App">
                  <div className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h2>Welcome to React</h2>
                  </div>
                  <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                      <div>
                      <BootstrapTable data={ this.state.list } options={ this.options }>
                          <TableHeaderColumn dataField="id" isKey dataSort>ID</TableHeaderColumn>
                          <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
                          <TableHeaderColumn dataField="surname">Surname</TableHeaderColumn>
                          <TableHeaderColumn dataField="salary">Salary</TableHeaderColumn>
                      </BootstrapTable>
                      </div>
                  </p>
              </div>
          );

  }
  componentWillMount(){
      let list = [];
      let me = this;
      axios.get('http://localhost:8090/rest/employee/read')
          .then(function (response) {
              console.log(response);
              list = response.data;
              me.setState({list:list});
          })
          .catch(function (error) {
              console.log(error);
          });
  }
  componentDidMount(){
      let list = [];
      let me = this;
      axios.get('http://localhost:8090/rest/employee/read')
          .then(function (response) {
              console.log(response);
              list = response.data;
              me.setState({list:list});
          })
          .catch(function (error) {
              console.log(error);
          });
  }
}

export default App;
