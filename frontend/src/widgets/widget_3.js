import React from 'react';
import {RadialBarChart, RadialBar, Legend} from 'recharts'
import { BiCycling } from 'react-icons/bi'
import { BiSwim } from 'react-icons/bi'
import { FaRunning } from 'react-icons/fa'

const data = [
	{
		name: 'course', distance: 20, pv: 2400, fill: '#8884d8', icon: FaRunning,
	},
	{
		name: 'nage', distance: 50, pv: 4567, fill: '#83a6ed', icon: BiSwim,
	},
	{
		name: 'cyclisme', distance: 40, pv: 1398, fill: '#8dd1e1', icon: BiCycling,
	}
];

const style = {
	top: 0,
	left: 350,
	lineHeight: '24px',
};

const Widget3 = () => {
    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Distance parcourue</span>
                    <RadialBarChart width={450} height={300} cx={150} cy={150} innerRadius={25} outerRadius={140} barSize={25} data={data}>
                        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="distance" />
                        <Legend iconSize={15} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style}  />
                    </RadialBarChart>
                    </div>
                </div>
            </div>
    )
}

export default Widget3