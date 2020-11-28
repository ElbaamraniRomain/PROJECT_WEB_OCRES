import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const data = [
    {
        name: 'cyclisme', uv: 4000, calories: 700, amt: 2400, fill: '#8dd1e1'
    },
    {
        name: 'natation', uv: 3000, calories: 950, amt: 2210, fill: '#83a6ed'
    },
    {
        name: 'course', uv: 2000, calories: 600, amt: 2290, fill: '#8884d8'
    },
]


const Widget4 = () => {

    return (
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Calories </span>
                    <BarChart width={420} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} barSize={20} >
                        <XAxis dataKey="name" scale="point" padding={{ left: 70, right: 70 }} />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="calories" fill="#8884d8" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>
            </div>
        </div>
    )
}

export default Widget4