import React from 'react';
import { Pie, PieChart, Sector, ResponsiveContainer } from 'recharts';
import simpleData from '../getBackend';

const tempTime = 'm';
const Act = "temps";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 20) * cos;
    const sy = cy + (outerRadius + 20) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`temps: ${value} minutes`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

class Widget5 extends React.PureComponent {

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
                name: 'Cyclisme', value: parseInt(queryData["cyclisme"]), fill: '#8dd1e1'
            },
            {
                name: 'Natation', value: parseInt(queryData["natation"]), fill: '#83a6ed'
            },
            {
                name: 'Course', value: parseInt(queryData["course"]), fill: '#8884d8'
            },
        ];
        this.setState({ gdata });

    }
    state = {
        activeIndex: 0,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };
    render() {
        return (
            <div className="Widget section">
                <div className="card z-depth-0 Widget_1-summary">
                    <div className="card-content gray-text text-darken-3">
                        <span className="card-title">Temps d'activité</span>
                        <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={this.state.activeIndex}
                                    activeShape={renderActiveShape}
                                    data={this.state.gdata}
                                    innerRadius={60}
                                    outerRadius={90}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={this.onPieEnter}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        )
    }
}

export default Widget5