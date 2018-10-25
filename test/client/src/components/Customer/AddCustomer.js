import React, { Component } from 'react';
import './AddCustomer.css';
import {Link} from 'react-router-dom';



class AddCustomer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
           name: "",
           email : "",
           address : "",
           mobile : "",
           spoc : ""
         
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
            name: "",
            email : "",
            address : "",
            mobile : "",
            spoc : ""
          })
          fetch('customer/add',{
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
      
    //   fileSelectedHandler = e => {     
    //       e.preventDefault();
    //     let files = e.target.files;
    //     console.log('data',files[0]);
    //   }
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
                                <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
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
                   <h3>Add Customer</h3>
           </div>
        </div>
        <form className="custom-content-form" method="POST">
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Name*</label>
     <input type="text" className="form-control" placeholder="John Doe" name="name" value = {this.state.name} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter SPOC*</label><br />              
     <input type="text" className = "form-control" placeholder="atleast 1 one value" name="spoc" value={this.state.spoc} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Contact Number*</label>
        <input type="number" className="form-control" placeholder="ten digits" name="mobile" value={this.state.mobile} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Email*</label>
        <input type="email" className="form-control" placeholder="johndoe@gmail.com" name="email" value={this.state.email} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter Address*</label>
        <textarea className="form-control" name="address" placeholder="212, ny street" value={this.state.address} onChange={e => this.change(e)}></textarea>
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

export default AddCustomer;