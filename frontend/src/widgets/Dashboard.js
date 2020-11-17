import React, { Component } from 'react';
import Widget_1 from './widget_1'
import Widget_2 from './widget_2'
import Widget_3 from './widget_3'
import Widget_4 from './widget_4'
import Widget_5 from './widget_5'
import Widget_6 from './widget_6'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div class="row">
                    <div class="col-lg-3 col-xl-12">
                        <Widget_1/>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-lg-4">
                        <Widget_2/>       
                    </div>
                    <div class="col-lg-6 col-xl-8">
                        <Widget_3/>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                    <Widget_4/>      
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-lg-12 col-xl-8">
                        <Widget_5/>     
                    </div>
                    <div class="col-xl-4">
                        <Widget_6/>       
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
