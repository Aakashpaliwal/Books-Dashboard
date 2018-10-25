import React, { Component } from 'react';
import './EmployeAllocation.css';
import {Link} from 'react-router-dom';
class EmployeAllocation extends Component {
    constructor () {
        super() 
        this.state = {
          token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          supervisor_id:"",
          location_id : "",
          userdata : [],
          supervisorsdata : []
        }
    }
    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    }
    componentWillMount ()
    {
      this.handleClick();
    //   this.supervisorclick();
    }
    handleClick () {
      fetch('list/zoneloc',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.zonelocationdata)
            this.setState({ userdata:resp.zonelocationdata})
            // this.parseJSON(this.state)
          })
        }
      )

      fetch('list/supervisorlist',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
      .then((res) => {
        res.json().then((resp) => { 
          console.log(resp.supervisordata)
          this.setState({ supervisorsdata:resp.supervisordata})
          // this.parseJSON(this.state)
        })
      }
    )
      }
    //   supervisorclick()
    //   {
    //     fetch('list/supervisorlist')
    //     .then((res) => {
    //       res.json().then((resp) => { 
    //         console.log(resp.supervisordata)
    //         this.setState({ supervisorsdata:resp.supervisordata})
    //         // this.parseJSON(this.state)
    //       })
    //     }
    //   )
    //   }

      
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () =>
      {
          fetch('/').then(console.log(this.state));
      }
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);

          this.setState ({
              supervisor_id:"",
              location_id :"",
            // location : ""
          })
          fetch('location_supervisor/add',{

            method : "POST",
            headers : {
              'Authorization': 'Bearer ' + this.state.token,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
          })
        //   .then(console.log(this.state));
        .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
            //   console.log(json);
            alert("your data has been submitted");
        }
        else{
          console.log(json);
      }
    })
}
   
  render() {
    return (
        <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Employe Allocation Form</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>

    {/*Form content begin */}
   
<div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Add Employe Allocation</h3>
           </div>
        </div>
        <form className="custom-content-form">
  <div class="form-row">
  <input type="hidden" className="form-control" name="cid" />
  <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Zone And Location</label>
    <select className="form-control" value={this.state.location_id} name="location_id" onChange = {e => this.change(e)}>
   <option>Choose....</option>
    {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.location_id}>{item.zone + "____" + item.location}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>
    {/* <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Location</label>
     <input type="text" className = "form-control" placeholder="Indore" name="location" value={this.state.location} onChange = {e => this.change(e)} />
    </div> */}
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Supervisor And Alias</label>
    <select className="form-control" value={this.state.supervisor_id} name="supervisor_id" onChange = {e => this.change(e)}>
    <option>Choose....</option>
    {
              this.state. supervisorsdata ?
              this.state. supervisorsdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.supervisor_id}>{item.supervisor + "____" + item.alias}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
    </div>
    </div>
</div>






        </div>
        </div>

    )
  }
}

export default EmployeAllocation;