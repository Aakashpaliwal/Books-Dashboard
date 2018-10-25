import React, { Component } from 'react'
import './Locations.css';
import {Link} from 'react-router-dom';
export class AddLocation extends Component {
    constructor () {
        super() 
        this.state = {
          token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
            location : "",
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
      fetch('zone/view',{
        method : 'GET',
        headers : {
          'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.zonedata)
            this.setState({ userdata:resp.zonedata})
            // this.parseJSON(this.state)
          })
        }
      
      )
      }
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
              zone_id :"",
            location : ""
          })
          fetch('location/add',{

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
                                <li className="breadcrumb-item active" aria-current="page">Location Form</li>
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
                   <h3>Add Location</h3>
           </div>
        </div>
        <form className="custom-content-form">
  <div class="form-row">
  <input type="hidden" className="form-control" name="cid" />
  <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Zone</label>
    <select className="form-control" value={this.state.zone_id} name="zone_id" onChange = {e => this.change(e)}>
    <option>Select One</option>
    {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.zone_id}>{item.zone_name}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Location</label>
     <input type="text" className = "form-control" placeholder="Indore" name="location" value={this.state.location} onChange = {e => this.change(e)} />
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

export default AddLocation
