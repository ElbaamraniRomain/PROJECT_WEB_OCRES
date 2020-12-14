import React, { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts'
import { BiCycling } from 'react-icons/bi'
import { BiSwim } from 'react-icons/bi'
import { FaRunning } from 'react-icons/fa'
import axios from 'axios';
import simpleData from '../getBackend';


const tempTime = "m"
const Act = "distance";

const style = {
    top: 0,
    left: 300,
    lineHeight: '24px',
};

class Widget3 extends React.PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            gdata: []
        };
    }
    async componentDidMount() {
        const queryData = await simpleData(Act, tempTime);
        const gdata = [
            {
                name: 'Course', distance: parseInt(queryData["course"]), pv: 2400, fill: '#8884d8', icon: FaRunning,
            },
            {
                name: 'Natation', distance: parseInt(queryData["natation"]), pv: 4567, fill: '#83a6ed', icon: BiSwim,
            },
            {
                name: 'Cyclisme', distance: parseInt(queryData["cyclisme"]), pv: 1398, fill: '#8dd1e1', icon: BiCycling,
            }
        ];
        this.setState({ gdata });

    }


    render() {
        return (
            <div className="Widget section">
                <div className="card z-depth-0 Widget_1-summary">
                    <div className="card-content gray-text text-darken-3">
                        <span className="card-title">Distance parcourue en Km</span>
                        <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
                            <RadialBarChart innerRadius={25} outerRadius={140} barSize={25} data={this.state.gdata}>
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="distance" />
                                <Legend iconSize={15} />
                            </RadialBarChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        )
    }
}

export default Widget3