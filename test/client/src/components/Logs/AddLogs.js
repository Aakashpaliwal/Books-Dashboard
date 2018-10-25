import React, { Component } from 'react';
import './Logs.css';
import {Link} from 'react-router-dom';
class AddLogs extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            user_email : "",
            user_password : ""
         
           };

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
            user_email : "",
            user_password : ""
          })
          fetch('/contact',{

            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
          })
        //   .then(console.log(this.state));
        .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
              console.log(json);
            // alert("your data has been submitted");
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
                                <li className="breadcrumb-item active" aria-current="page">Add Logs</li>
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
                   <h3>Add Logs</h3>
           </div>
        </div>
        <form className="custom-content-form-user">
  <div class="form-row">
    <div class="form-group col-md-12">
    <label for="inputCategory">Enter User Email</label>
     <input type="text" className="form-control" placeholder="John Doe" name="user_email" value = {this.state.user_email} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Enter User Password</label>
     <input type="password" className = "form-control" placeholder="12345" name="user_password" value={this.state.user_password} onChange = {e => this.change(e)} />
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

export default AddLogs;