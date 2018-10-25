import React, { Component } from 'react';
import './Books.css';
import {Link} from 'react-router-dom';
class AddBooks extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
           dummy : ""
         
           };

    }
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () =>
      {
          fetch('/');
      }
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          this.setState ({
           dummy : ""
          })
          fetch('admin/add',{
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
                                <li className="breadcrumb-item active" aria-current="page">Add Books</li>
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
                   <h3>Add Books</h3>
           </div>
        </div>
        <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Dummy</label>
     <input type="text" className="form-control" placeholder="John Doe" name="name" value = {this.state.name} onChange = {e => this.change(e)} />
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

export default AddBooks;