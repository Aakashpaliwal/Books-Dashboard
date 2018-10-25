import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
// import {axios} from 'axios';
class EditAdmin extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
       
            // token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
                data :[],
            name : "",
            adminname : "",
            password : ""
         
           };

    }
    componentWillMount ()
    {
      this.handleClick();
    }
    handleClick () {
        let meetupId = this.props.match.params.id;
            console.log(meetupId);
      fetch(`http://localhost:5000/admin/edit?id=${meetupId}`,{
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

    // componentWillUpdate(nextProps, nextState) {
    //     localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
    //   }

    // componentWillMount(){
    //     this.getMeetupDetails();
    //   }
    
    //   getMeetupDetails(){
    //     let meetupId = this.props.match.params.id;
    //     console.log(meetupId);
    //     // fetch(`admin/view/${meetupId}`,{
    //     //     method : 'GET',
    //     //     'Access-Control-Allow-Origin':'*',
    //     //     headers : {
    //     //       // 'Authorization': 'Bearer ' + this.state.token,
    //     //       "Content-Type" : "application/json"
    //     //   }
    //     //   })
    //     // .then(response => {
    //     //   this.setState({
    //     //     admin_id: response.data.admin_id,
    //     //     name: response.data.name,
    //     //     adminname: response.data.adminname,
    //     //     password: response.data.password
    //     //   }, () => {
    //     //     console.log(this.state);
    //     //   });
    //     // })
    //     // .catch(err => console.log(err));
    //     }




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
            name : "",
            adminname : "",
            password : ""
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
                                <li className="breadcrumb-item active" aria-current="page">Add Admin</li>
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
                   <h3>Add Admin</h3>
           </div>
        </div>
        <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter Name</label>
     <input type="text" className="form-control" placeholder="blank" name="name" value = {this.state.name} onChange = {e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter User Name</label><br />              
     <input type="text" className = "form-control" placeholder="neo404" name="adminname" value={this.state.adminname} onChange={e => this.change(e)} />
    </div>
    <div class="form-group col-md-6">
    <label for="inputSubcategory">Enter Password</label>
        <input type="password" className="form-control" placeholder="****" name="password" value={this.state.password} onChange={e => this.change(e)} />
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

export default EditAdmin;