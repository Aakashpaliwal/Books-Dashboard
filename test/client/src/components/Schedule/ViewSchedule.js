import React, { Component } from 'react';
import './Schedule.css';
import {Link} from 'react-router-dom';
class ViewSchedule extends Component {
    constructor () {
        super() 
        this.state = {
          sd: "",
          fd : "",
          userdata : []
        }
    }
    // dateformatshange = e => {
    //   var x = document.getElementById("myDate").value;
    //   document.getElementById("demo").innerHTML = x;
    // }
    change  = e => {
      this.setState ({
        [e.target.name]: e.target.value
      });
    };
    getWebsite = () =>
    {
        fetch('/');
    }
    // componentDidMount ()
    // {
    //   this.handleClick();
    // }
    onSubmit = e => {
      e.preventDefault();
        console.log(this.state);
        this.setState ({
          // sd: "",
          // fd : "",
          userdata : []
        })
      fetch('amc/amc_scheduling', 
      {

        method : "POST",
        headers : {
          "Content-Type" : "application/json"
      },
      body: JSON.stringify(this.state)
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
      // handleClick () {
      //   fetch('amc/amc_Scheduling')
      //     .then((res) => {
      //       res.json().then((resp) => { 
      //         console.log(resp.zonelocationdata)
      //         this.setState({ userdata:resp.zonelocationdata})
      //         // this.parseJSON(this.state)
      //       })
      //     }
      //   )
      // }
 
  //   onSubmit = e =>
  //   {
  //       e.preventDefault();
  //       console.log(this.state);
  //       this.setState ({
  //         sd: "",
  //         fd : ""
  //       })
  //       fetch('amc/amc_scheduling',{

  //         method : "POST",
  //         headers : {
  //             "Content-Type" : "application/json"
  //         },
  //         body: JSON.stringify(this.state)
  //       })
  //       //   .then(console.log(this.state));
  //     .then(function(response){ 
  //         return response.json();})
  //     .then(function(json){
  //          if(json.success===true){
  //         //   console.log(json);
  //         alert("all corrected values");
  //     }
  //     else{
  //       console.log(json);
  //   }
  // })
  //   };
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
                                    <li className="breadcrumb-item active" aria-current="page">View Schedule</li>
                                </ol>
                                </nav>
                       </div>
                      
                   </div>
    
    
                </div>
               <div className="custom-table-here">
                  <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Start Date</label>
     <input type="text" className="form-control" name="sd" value={this.state.sd} onChange = {e => this.change(e)} placeholder="YYYY-MM-DD" required pattern="([0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
     {/* <input type="date" className="form-control" id="myDate" name = "sd" value={this.state.sd} onChange= {e => this.dateformatshange(e)} /> */}
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Final Date</label><br />              
    <input type="text" className="form-control" name="fd" value={this.state.fd} onChange = {e => this.change(e)} placeholder="YYYY-MM-DD" required pattern="([0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
 <hr />
                    </div>
                    </div>

                       <div className="row">
                      
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Zone Name</th>
          <th>Equipment Name</th>
          <th>Category</th>
          <th>Location</th>
          <th>Frequency</th>
          <th>Price</th>
          <th>Start Date</th>
          <th>Next Date</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
                  <tr key = {id}>
          <th scope="row"> {item.zone}</th>
          <th scope="row"> {item.equipment}</th>
          <th scope="row"> {item.category}</th>
          <th scope="row"> {item.zone} , {item.location} , {item.address}</th>
          <th scope="row"> {item.frequency}</th>
          <th scope="row"> {item.price}</th>
          <th scope="row"> {item.startDate}</th>
          <th scope="row"> {item.nextDate}</th>
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

export default ViewSchedule;