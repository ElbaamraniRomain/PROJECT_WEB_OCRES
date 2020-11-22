import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
{name: 'jour 1', perf: 30, pv: 2400, amt: 2400},
{name: 'jour 2', perf: 50, pv: 2400, amt: 2400},
{name: 'jour 3', perf: 45, pv: 2400, amt: 2400},
{name: 'jour 4', perf: 60, pv: 2400, amt: 2400},
{name: 'jour 5', perf: 75, pv: 2400, amt: 2400},
{name: 'jour 6', perf: 82, pv: 2400, amt: 2400}
];
const Widget2 = () => {
    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Progréssion</span>
                        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="perf" stroke="#0C00F6" />
                            {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                        </LineChart>
                    {/* <p>Widget content</p> */}
                </div>
            </div>
        </div>
    )
}

export default Widget2