import React, { Component } from 'react';
import './AMC';
import {Link} from 'react-router-dom';
class ViewAMC extends Component {
    constructor () {
        super() 
        this.state = {
          // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          userdata : []
        }
      }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('amc/view',{
        method : 'GET',
        headers : {
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.amcdata)
            this.setState({ userdata:resp.amcdata})
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
                                    <li className="breadcrumb-item active" aria-current="page">View AMC</li>
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
          <th scope="col">Company</th>
          <th scope="col">Equipment Name</th>
          <th scope="col">Equipment Type</th>
          <th scope="col">Location</th>
          <th scope="col">Frequency</th>
          <th scope="col">Price</th> 
          <th scope="col">Start Date</th>  
          <th scope="col">Schedule Date</th> 
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
          <th scope="row"> {item.equipment}</th>
          <th scope="row"> {item.category}</th>
          <th scope="row"> {item.zone} , {item.location} , {item.address}</th>
          <th scope="row"> {item.frequency}</th>
          <th scope="row"> {item.price}</th>
          <th scope="row"> {item.startDate}</th>
          <th scope="row"> {item.nextDate}</th>
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

export default ViewAMC;