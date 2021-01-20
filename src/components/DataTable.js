import React, { Component } from 'react';
import ReactTable from "react-table";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class DataTable extends Component{
  constructor(props) {
    super(props)
    this.columns = [
      {
        Header: 'UserId',
        accessor: 'userId',
      },{
        Header: 'Id',
        accessor: 'id' ,
      },{
        Header: 'Title',
        accessor: 'title' ,
      },{
        Header: 'Body',
        accessor: 'body',
      }
    ]
  }
  render(){
    return(
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {this.props.appData.map((item, index) => (
          <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default DataTable;
