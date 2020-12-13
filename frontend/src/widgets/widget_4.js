import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import simpleData from '../getBackend';

const tempTime = 'm';
const tempAct = "calories";




class Widget4 extends React.PureComponent {

    constructor(props){
        super(props);
        this.state ={
            gdata: ''
        };
    }
    async componentDidMount() {
        const queryData = await simpleData(tempAct, tempTime);
        const gdata = [
            {
                name: 'cyclisme', uv: 4000, calories: queryData["cyclisme"], amt: 2400, fill: '#8dd1e1'
            },
            {
                name: 'natation', uv: 3000, calories: queryData["natation"], amt: 2210, fill: '#83a6ed'
            },
            {
                name: 'course', uv: 2000, calories: queryData["course"], amt: 2290, fill: '#8884d8'
            },
        ];
        this.setState({gdata});

    }
    render(){
    return (
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Calories </span>
                    <BarChart width={420} height={300} data={this.state.gdata} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} barSize={20} >
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
}

export default Widget4