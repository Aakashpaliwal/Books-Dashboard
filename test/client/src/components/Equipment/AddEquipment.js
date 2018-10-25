import React, { Component } from 'react';
import './AddEquipment.css';
import {Link} from 'react-router-dom';
class AddEquipment extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
            category : "",
            capacity : "",
            model : "",
            year : "",
            brand: ""
         
           };

    }
    componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
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
            category : "",
            capacity : "",
            model : "",
            year : "",
            brand: ""
          })
          fetch('myequipment/add',{

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
      };
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
                                <li className="breadcrumb-item active" aria-current="page">Add Equipment</li>
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
                   <h3>Add Equipment</h3>
           </div>
        </div>
        <form className="custom-content-form" method = "POST">
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Category</label>
    <select className="form-control" name="category" value={this.state.category} onChange={e => this.change(e)}>
        <option selected>Choose...</option>
        <option>Electrical</option>
        <option>Electronicals</option>
        <option>Interior</option>
        <option>Fire Fighting</option>
      </select>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Capacity</label><br />              
     <input type="text" className = "form-control"placeholder="3" name="capacity" value={this.state.capacity} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-4">
    <label for="inputSubcategory">Enter Brand</label>
        <input type="text" className="form-control" placeholder="Xerox" name="brand" value={this.state.brand} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-4">
    <label for="inputSubcategory">Enter Model</label>
       <input type="text" className="form-control" placeholder="304tx" name="model" value={this.state.model} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-4">
    <label for="inputSubcategory">Enter Year</label>
        <input type="text" className="form-control" name="year" value = {this.state.year} onChange = {e => this.change(e)} /> 
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

export default AddEquipment;