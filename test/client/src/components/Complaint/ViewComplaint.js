import React, { Component } from 'react';
import './Complaint.css';
import {Link} from 'react-router-dom';
class ViewComplaint extends Component {
    constructor () {
        super() 
        this.state = {
          token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          userdata : []
        }
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(item) {
      console.log(item.admin_id);
      let sitemeet = item.admin_id;
      fetch(`admin/delete?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  //  'Authorization': 'Bearer ' + this.state.token,
                   "Content-Type" : "application/json"
               }
               })
               .then(function(response){ 
                       return response.json();})
                   .then(function(json){
                        if(json.success===true){
                       //   console.log(json);
                      //  window.location.reload('/ViewAdmin')
                       alert("admin has been deleted PLEASE REFRESH THE PAGE");
                   }
                   else{
                     console.log(json);
                 }
                 })
     }
    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('complaint/view',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.complaintdata)
            this.setState({ userdata:resp.complaintdata})
            // this.parseJSON(this.state)
          })
        }
      
      )
      }
        render() {
            return (
                <React.Fragment>
                <div>
                <div className="skin-blue fixed-layout">
            <div className="page-wrapper">
    
                 <div className="container-fluid">
                   
                   <div className="row page-titles">
                       <div className="col-md-5 align-self-center">
                           <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Complaint</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Company Name</th>
          <th scope="col">Zone Name</th>
          <th scope="col">Location Name</th>
          <th scope="col">Description</th>
          <th scope="col">Date Of Complaint</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row"> {item.company}</th>
          <th scope="row"> {item.zone}</th>
          <th scope="row"> {item.location}</th>
          <th scope="row"> {item.description}</th>
          <th scope="row"> {item.doc}</th>
          <td>
          <button className="btn btn-warning custom-edit-btn btn-sm"><i class="fa fa-pencil" aria-hidden="true"></i>&nbsp; &nbsp; Edit</button>
          <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}>Delete</button>
          </td>
        </tr>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table>
                    </div>
                    </div>
                  </div>  
                
               </div>
               </div>
               </div>
                </div>
                </React.Fragment>
            );
        }
    }

export default ViewComplaint;