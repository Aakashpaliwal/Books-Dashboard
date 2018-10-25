import React, { Component } from 'react';
import './EmployeAllocation.css';
import {Link} from 'react-router-dom';

class ViewEmployeAllocation extends Component {
    constructor () {
        super() 
        this.state = {
          token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          userdata : []
        }
    }
    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('location_supervisor/view',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.locsupdata)
            this.setState({ userdata:resp.locsupdata})
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
                           {/* <h4 className="text-themecolor">Forms</h4> */}
                           <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Zone</li>
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
              <th scope="col">Supervisor</th>
              <th scope="col">Location</th>
              <th scope="col">Zone</th>
            </tr>
          </thead>
          <tbody>
          {
                  this.state.userdata ?
                  this.state.userdata.map(function(item, id) {
                    return(
                        
            <tr key ={id}>
              <th scope="row"> {item.employe}</th>
              <td>{item.location}</td>
              <td>{item.zone}</td>
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
export default ViewEmployeAllocation;