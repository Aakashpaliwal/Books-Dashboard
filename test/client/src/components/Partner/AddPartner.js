import React, { Component } from 'react';
import './Partner.css';
import {Link} from 'react-router-dom';

class AddPartner extends Component {
    state = {
       partner_name : "",
       partner_img : ""
     
       };
       change  = e => {
         this.setState ({
           [e.target.name]: e.target.value
         });
       };
       onSubmit = e =>
       {
           e.preventDefault();
           console.log(this.state);
           this.setState ({
            partner_name : "",
            partner_img : ""
 
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
                                 <li className="breadcrumb-item active" aria-current="page">Add Partner</li>
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
                    <h3>Add New Partner</h3>
            </div>
         </div>
         <form className="custom-content-form-user">
   <div class="form-row">
     <div class="form-group col-md-12">
     <label for="inputCategory">Enter Partner Name</label>
      <input type="text" className="form-control" placeholder="John Doe" name="partner_name" value = {this.state.user_partner_name} onChange = {e => this.change(e)} />
     </div>
     <div class="form-group col-md-12">
     <label for="inputSubcategory">Enter Partner Image</label>
      <input type="file" className = "form-control"name="partner_img" value={this.state.partner_img} onChange = {e => this.change(e)} />
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
export default AddPartner;