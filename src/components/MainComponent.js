import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';

class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage}/>

                    <Route exact path ='/directory' render={()=> <Directory campsites = {this.props.campsites}/>}/>
                    <Route path = '/directory/:campsiteId' component = {CampsiteWithId}/>
                    <Route exact path ='/contactus' component={Contact}/>
                    <Route exact path = '/aboutus' render={()=> <About partners = {this.props.partners}/>}/>
                    <Redirect to='/home'/>
                </Switch>
                
                <Footer/>
            </div>
        );
    };
}

export default Main