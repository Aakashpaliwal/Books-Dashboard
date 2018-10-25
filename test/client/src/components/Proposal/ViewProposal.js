import React, { Component } from 'react';
import './Proposal.css';
import {Link} from 'react-router-dom';
class ViewProposal extends Component {
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
      fetch('proposal/view')
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.proposaldata)
            this.setState({ userdata:resp.proposaldata})
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
                                    <li className="breadcrumb-item active" aria-current="page">View Proposal</li>
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
              <span>Data is Not Present In The DB.....</span>
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
export default ViewProposal;