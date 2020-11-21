import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 300, pv: 2400, amt: 2400},
{name: 'Page C', uv: 300, pv: 2400, amt: 2400},
{name: 'Page D', uv: 200, pv: 2400, amt: 2400},
{name: 'Page E', uv: 275, pv: 2400, amt: 2400},
{name: 'Page F', uv: 190, pv: 2400, amt: 2400}];
const Widget2 = () => {
    return(
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Widget 2</span>
                        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="uv" stroke="#0C00F6" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
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