import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AddProduct from './components/Product/AddProduct';
import ProductTable from './components/Product/ProductTable';
import AddBlog from './components/Blog/AddBlog';
import AddUser from './components/User/AddUser';
import AddPartner from './components/Partner/AddPartner';
import AddForms from './components/Forms/AddForms';
import Signin from './components/Login/AddLogin';
import Register from './components/Login/Register';
import Navigation from './components/Navigation';
import AddEquipment from './components/Equipment/AddEquipment';
import ViewEquipment from './components/Equipment/ViewEquipment';
import AddCustomer from './components/Customer/AddCustomer';
import CustomerTable from './components/Customer/CustomerTable';  
import Admin from './components/Admin/Admin';
import ViewAdmin from './components/Admin/ViewAdmin';
import EditAdmin from './components/Admin/EditAdmin';
import AMC from './components/AMC/AMC';
import ViewAMC from './components/AMC/ViewAMC';
import Complaint from './components/Complaint/Complaint';
import ViewComplaint from './components/Complaint/ViewComplaint';
import Employee from './components/Employee/Employee';
import ViewEmployee from './components/Employee/ViewEmployee';
import EmployeAllocation from './components/EmployeAllocation/EmployeAllocation';
import ViewEmployeAllocation from './components/EmployeAllocation/ViewEmployeAllocation';
import Profile from './components/Profile/Profile';
import ViewProfile from './components/Profile/ViewProfile';
import Schedule from './components/Schedule/Schedule';
import ViewSchedule from './components/Schedule/ViewSchedule';
import Site from './components/Site/Site';
import ViewSite from './components/Site/ViewSite';
import Zone from './components/Zone/Zone';
import ViewZone from './components/Zone/ViewZone';
import Proposal from './components/Proposal/Proposal';
import ViewProposal from './components/Proposal/ViewProposal';
import Invoice from './components/Invoice/Invoice';
import ViewInvoice from './components/Invoice/ViewInvoice';
import AddLocation from './components/Location/AddLocation';
import ViewLocations from './components/Location/ViewLocations';
import { Route, Redirect } from 'react-router-dom';
import AddCategory from './components/Category/AddCategory';
import ViewCategory from './components/Category/ViewCategory';
import ViewUser from './components/User/ViewUser';
import AddPublication from './components/Publication/AddPublication';
import ViewPublication from './components/Publication/ViewPublication';
import AddBooks from './components/Books/AddBooks';
import ViewBooks from './components/Books/ViewBooks';
import AddLogs from './components/Logs/AddLogs';
import ViewLogs from './components/Logs/ViewLogs';


class App extends Component {
  //   constructor() {
  //   super();
  //   this.state = {
  //     route: 'signin',
  //     isSignedIn: false,
  //   }
  
  // }


  // onRouteChange = (route) => {
  //   if (route === 'signout') {
  //     this.setState({isSignedIn: false})
  //   } else if (route === 'home') {
  //     this.setState({isSignedIn: true})
  //   }
  //   this.setState({route: route});
  // }
  


  
  
  render() {
    // const { isSignedIn, route } = this.state;
    
    return (
        <div>
          
        {/* <Header isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
        ?
        <div> */}
        <Header />
        <Sidebar />
        <Route path = "/" exact component = {Home} />
        <Route path = "/AddProduct" exact = {true} component = {AddProduct} />
        <Route path = "/ProductTable" exact = {true} component = {ProductTable} />
        <Route path="/AddBlog" exact = {true} component = {AddBlog} />
        <Route path = "/AddUser" exact = {true} component = {AddUser} />
        <Route path = "/ViewUser" exact = {true} component = {ViewUser} />
        <Route path = "/AddPublication" exact = {true} component = {AddPublication} />
        <Route path = "/ViewPublication" exact = {true} component = {ViewPublication} />
        <Route path = "/AddBooks" exact = {true} component = {AddBooks} />
        <Route path = "/ViewBooks" exact = {true} component = {ViewBooks} />
        <Route path = "/AddLogs" exact = {true} component = {AddLogs} />
        <Route path = "/ViewLogs" exact = {true} component = {ViewLogs} />
        <Route path = "/AddPartner" exact = {true} component = {AddPartner} />  
        <Route path = "/AddForms" exact = {true} component = {AddForms} />
        <Route path = "/Register" exact = {true} component = {Register} />
        <Route path = "/AddEquipment" exact component = {AddEquipment} />
        <Route path = "/ViewEquipment" exact component = {ViewEquipment} />
        <Route path = "/AddCustomer" exact component = {AddCustomer} />
        <Route path = "/CustomerTable" exact component = {CustomerTable} /> 
        <Route path = "/Admin" exact = {true} component = {Admin} />
        <Route path = "/ViewAdmin" exact = {true} component = {ViewAdmin} />
        <Route path = "/EditAdmin/edit/:id" exact = {true} component = {EditAdmin} />
        <Route path = "/AMC" exact = {true} component = {AMC} />
        <Route path = "/ViewAMC" exact = {true} component = {ViewAMC} />
        <Route path = "/Complaint" exact = {true} component = {Complaint} />
        <Route path = "/ViewComplaint" exact = {true} component = {ViewComplaint} />
        <Route path = "/Employee" exact = {true} component = {Employee} />
        <Route path = "/Profile" exact = {true} component = {Profile} />
        <Route path = "/ViewProfile" exact = {true} component = {ViewProfile}/>
        <Route path = "/Schedule" exact = {true} component = {Schedule} />
        <Route path = "/ViewSchedule" exact = {true} component = {ViewSchedule} />
        <Route path = "/Site" exact = {true} component = {Site} />
        <Route path = "/ViewSite" exact = {true} component = {ViewSite} />
        <Route path = "/Zone" exact = {true} component = {Zone} />
        <Route path = "/ViewZone" exact = {true} component = {ViewZone} />
        <Route path = "/Proposal" exact = {true} component = {Proposal} />
        <Route path = "/ViewProposal" exact = {true} component = {ViewProposal} />
        <Route path = "/Invoice" exact = {true} component = {Invoice} />
        <Route path = "/ViewInvoice" exact = {true} component = {ViewInvoice} />
        <Route path = "/ViewEmployee" exact = {true} component = {ViewEmployee}/>
        <Route path = "/AddLocation" exact = {true} component = {AddLocation}/>
        <Route path = "/ViewLocations" exact = {true} component = {ViewLocations}/>
        <Route path = "/EmployeAllocation" exact = {true} component = {EmployeAllocation}/>
        <Route path = "/ViewEmployeAllocation" exact = {true} component = {ViewEmployeAllocation}/>
        <Route path = "/AddCategory" exact = {true} component = {AddCategory}/>
        <Route path = "/ViewCategory" exact = {true} component = {ViewCategory}/>
        {/* </div>
        : (
             route === 'signin'
             ? <Signin  onRouteChange={this.onRouteChange}/>
             : <Register onRouteChange={this.onRouteChange}/>
            )
        } */}
        
        <Footer />
          
          </div>
     
    );
  }
}

export default App;
