import React, { Component } from 'react';
import './Invoice.css';
import {Link} from 'react-router-dom';
class ViewInvoice extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : []
        }
    }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('invoice/view')
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.invoicedata)
            this.setState({ userdata:resp.invoicedata})
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
                                    <li className="breadcrumb-item active" aria-current="page">View Invoice</li>
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
          <th scope="col">dummy</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row"> {item.dummy}</th>
        </tr>
      )
              }
      )
              :
              <span>Data is not present in the db</span>
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

export default ViewInvoice;