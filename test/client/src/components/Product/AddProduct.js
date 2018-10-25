import React, { Component } from 'react'
import './Product.css';
import {Link} from 'react-router-dom';
export class AddProduct extends Component {
    state = {
        category : "",
        subcategory : "",
        company : "",
        model : "",
        manufacturing_year : ""
    
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
                    category : "",
                    subcategory : "",
                    company : "",
                    model : "",
                    manufacturing_year : ""

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
                                <li className="breadcrumb-item active" aria-current="page">Add Product</li>
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
                   <h3>Add Product</h3>
           </div>
        </div>
        <form className="custom-content-form">
  <div class="form-row">
    <div class="form-group col-md-12">
    <label for="inputCategory">Add Category</label>
      <select className="form-control" name="category" value={this.state.category} onChange={e => this.change(e)}>
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-12">
    <label for="inputSubcategory">Add Subcategory</label>
      <select className="form-control" name="subcategory" value={this.state.subcategory} onChange={e => this.change(e)}>
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Add Company Name</label>
    <input type="text" className="form-control" placeholder="Xerox" name="company" value={this.state.company} onChange={e => this.change(e)}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Add Model</label>
    <input type="text" className="form-control" placeholder="2304TX" name="model" value={this.state.model} onChange = {e => this.change(e)}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputCity">Manufacturing Year</label>
      <input type="text" className="form-control" placeholder="2018" name="manufacturing_year" value={this.state.manufacturing_year} onChange={e => this.change(e)}/>
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

export default AddProduct
