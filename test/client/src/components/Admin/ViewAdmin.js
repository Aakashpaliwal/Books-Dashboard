import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ViewAdmin extends Component {
    constructor (props) {
        super(props) 
        this.state = {
          name : "",
          adminname : "",
          password : "",
          // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
          // id : "",
          data : [],
          detailsdata : [],
          editdata : []
        }
        this.handleCheck = this.handleCheck.bind(this);
        this.detailCheck = this.detailCheck.bind(this);
        this.editCheck = this.editCheck.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
    }
    // componentWillUpdate(nextProps, nextState) {
    //   localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    // }
    handleCheck(item) {
      console.log(item.admin_id);
      let sitemeet = item.admin_id;
      fetch(`admin/delete?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  //  'Authorization': 'Bearer ' + this.state.token,
                   "Content-Type" : "application/json"
               }
               })
               .then(function(response){ 
                       return response.json();})
                   .then(function(json){
                        if(json.success===true){
                       //   console.log(json);
                       window.location.reload()
                       alert("admin has been deleted PLEASE REFRESH THE PAGE");
                   }
                   else{
                     console.log(json);
                 }
                 })
     }

     detailCheck(item) {
      console.log(item.admin_id);
      let sitemeet = item.admin_id;
      fetch(`admin/edit?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  //  'Authorization': 'Bearer ' + this.state.token,
                   "Content-Type" : "application/json"
               }
               })
               .then((res) => {
                res.json().then((resp) => { 
                  console.log(resp.admindata)
                  this.setState({ detailsdata:resp.admindata})
                  // this.parseJSON(this.state)
                })
              }
            
            )
     }
    
     editCheck(item) {
      console.log(item.admin_id);
      let sitemeet = item.admin_id;
      fetch(`admin/edit?id=${sitemeet}`,{
                 method : 'GET',
                 headers : {
                  //  'Authorization': 'Bearer ' + this.state.token,
                   "Content-Type" : "application/json"
               }
               })
               .then((res) => {
                res.json().then((resp) => { 
                  console.log(resp.admindata)
                  this.setState({ editdata:resp.admindata})
                  // this.parseJSON(this.state)
                })
              }
            
            )
     }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('admin/view',{
        method : 'GET',
        headers : {
          // 'Authorization': 'Bearer ' + this.state.token,
          "Content-Type" : "application/json"
      }
      })
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.admindata)
            this.setState({ data:resp.admindata})
            // this.parseJSON(this.state)
          })
        }
      
      )
      }
      // handleInputChange(e){
      //   console.log('handleinpuchage funcion');
      //   const target = e.target;
      //   const value = target.value;
      //   const name = target.name;
    
      //   this.setState({
      //     [name]: value
      //   });
      // }
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
        console.log('change function here');
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
          name : "",
          adminname : "",
          password : ""
          })
          fetch('admin/update',{
            method : "POST",
            headers : {
            //  'Authorization': 'Bearer ' + this.state.token,
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
                                    <li className="breadcrumb-item active" aria-current="page">View Admin</li>
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
          <th scope="col">Full Name</th>
          <th scope="col">Admin Name</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.data ?
              this.state.data.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row">{item.admin_id} '------'  {item.full_name}</th>
          <td>{item.adminname}</td> 
          <td>
        <button className="btn btn-warning custom-edit-btn btn-sm" onClick={this.editCheck.bind(this, item)} data-toggle="modal" data-target=".bd-edit-modal-lg"><i class="fa fa-pencil" aria-hidden="true"></i>&nbsp; &nbsp; Edit</button>
          <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck.bind(this, item)}>Delete</button>
          <button className="btn btn-warning custom-edit-btn btn-sm" onClick={this.detailCheck.bind(this, item)} data-toggle="modal" data-target=".bd-example-modal-lg"><i class="fa fa-pencil" aria-hidden="true"></i>&nbsp; &nbsp; Details</button>
          </td>
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table>
    {/* <button  className="btn btn-danger custom-edit-btn btn-sm" onClick={this.handleCheck}>Delete</button> */}
               
        {/* details modal here */} 
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Admin Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.detailsdata ?
              this.state.detailsdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row">{item.admin_id} '------'  {item.full_name}</th>
          <td>{item.adminname}</td> 
          <td>{item.email}</td> 
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
   
  </div>
</div>




        {/*end details modal here */}      
               
                 {/* edit modal here */} 
        <div class="modal fade bd-edit-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    {/* <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Full Name</th>
          <th scope="col">Admin Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.editdata ?
              this.state.editdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row">{item.admin_id} '------'  {item.full_name}</th>
          <td>{item.adminname}</td> 
          <td>{item.email}</td> 
        </tr>
      )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table> */}
    {
              this.state.editdata ?
              this.state.editdata.map(function(item, id) {
                return(
         <div key= {id}>         
     <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Name</label>
     <input type="text" className="form-control" placeholder="blank"  name="name" value = {item.full_name}  onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter User Name</label><br />              
     <input type="text" className = "form-control" placeholder="neo404" name="adminname" value = {item.adminname} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Password</label>
        <input type="password" className="form-control" placeholder="****"  name="password" value = {item.password} onChange={e => this.change(e)}/>
    </div>
  </div>
{/*  
  <button class="btn btn-primary">Submit</button> */}
</form>
</div>
 )
              }, this
      )
              :
              <span>Data is loading....</span>
            }
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" onClick = {e => this.onSubmit(e)}> edit Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">edit Close</button>
      </div>
    </div>
   
  </div>
</div>




        {/*end edit modal here */}      
               
               
               
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

export default ViewAdmin;