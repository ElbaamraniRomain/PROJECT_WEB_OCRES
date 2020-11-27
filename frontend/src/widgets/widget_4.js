import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'

const data = [
    {
        subject: 'calories', natation: 7, cyclisme: 9, C: 10
    },
    {
        subject: 'Temps', natation: 4, cyclisme: 1, C: 5
    },
    {
        subject: 'Distance', natation: 6, cyclisme: 3, C: 7
    },
    {
        subject: 'bpm max', natation: 6, cyclisme: 3, C: 7
    }
];

const Widget4 = () => {
    return (
        <div className="Widget section">
            <div className="card z-depth-0 Widget_1-summary">
                <div className="card-content gray-text text-darken-3">
                    <span className="card-title">Widget 4</span>
                    <RadarChart cx={230} cy={200} outerRadius={100} width={450} height={450} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" />
                        <PolarRadiusAxis />
                        <Radar name="Natation" dataKey="natation" stroke="#83a6ed" fill="#83a6ed" fillOpacity={0.6} />
                        <Radar name="Cyclisme" dataKey="cyclisme" stroke="#8dd1e1" fill="#8dd1e1" fillOpacity={0.6} />
                        <Radar name="Course" dataKey="C" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Legend/>
                    </RadarChart>
                </div>
            </div>
        </div>
    )
}

export default Widget4