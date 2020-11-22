import React from 'react';
import {RadialBarChart, RadialBar, Legend} from 'recharts'

const data = [
	{
		name: 'course', uv: 30, pv: 2400, fill: '#8884d8',
	},
	{
		name: 'nage', uv: 50, pv: 4567, fill: '#83a6ed',
	},
	{
		name: 'cyclisme', uv: 40, pv: 1398, fill: '#8dd1e1',
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
                        <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                        <Legend iconSize={15} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style}  />
                    </RadialBarChart>
                    </div>
                </div>
            </div>
    )
}

export default Widget3