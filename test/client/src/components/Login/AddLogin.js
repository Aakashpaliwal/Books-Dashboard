import React, { Component } from 'react';
import './Login.css';
import {Link, Redirect} from 'react-router-dom';
import {history} from 'history';
import createHistory from 'history/createBrowserHistory'

class AddLogin extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk",
			adminname : "",
		password: "",
			redirect: false
			  
		}	
		
	}
	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaWQiOjEsImlhdCI6MTU0MDI3MzI4N30.xG68rUe4dadGAprGwvhjb_0BLSs81STXfy2BO1t09Yk')
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	onSubmit = e =>
	{
		e.preventDefault();
		this.setState({
		adminname : "",
		password: ""
		})
		console.log(this.props);
		
		fetch('admin/login', {
			method : "POST",
            headers : {
				'Authorization': 'Bearer' + this.state.token,
              "Content-Type" : "application/json; charset=utf-8"
            },
			body : JSON.stringify(this.state)
		  })
		  .then(response => response.json())
		  .then(json => {
			   if(json.success === true){
				this.props.onRouteChange('home');
				}else{
					console.log(json);
				}
		})
		
	}
    render() {
		const onRouteChange = this.props.onRouteChange;
        return (
            <div>
               <div class="my-login-page">
	<section class="h-100">
		<div class="container h-100">
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="card fat custom-card-margin">
						<div class="card-body">
							<h4 class="card-title">Login</h4>
							<form method="POST">
							 
								<div class="form-group">
									<label for="email">User Name</label>

									<input id="email" type="email" class="form-control" name="adminname" value={this.state.adminname} onChange={e => this.change(e)} required autofocus />
								</div>

								<div class="form-group">
									<label for="password">Password
										{/*<a href="forgot.html" class="float-right">
											Forgot Password?
										</a>*/}
									</label>
									<input id="password" type="password" class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} required data-eye />
								</div>

								{/*<div class="form-group">
									<label>
										<input type="checkbox" name="user_remember" value={this.state.user_remember} onchange={e => this.change(e)}/> Remember Me
									</label>
									</div>*/}

								<div class="form-group no-margin">
									<button class="btn btn-primary btn-block" onClick = {e => this.onSubmit(e)} >
										Login
									</button>
								</div>
								{/*<div class="margin-top20 text-center">
									Don't have an account? <p onClick={() => onRouteChange('register')}>Register</p>
								</div>*/}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
    
                
            </div>
        );
    }
}

export default AddLogin;