import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const data = [
 {name: 'jour 1', cyclisme: 30, course: 50, natation: 30},
 {name: 'jour 2', cyclisme: 50, course: 30, natation: 45},
 {name: 'jour 3', cyclisme: 45, course: 50, natation: 82},
 {name: 'jour 4', cyclisme: 60, course: 30, natation: 75},
 {name: 'jour 5', cyclisme: 75, course: 45, natation: 60},
 {name: 'jour 6', cyclisme: 82, course: 82, natation: 30}
 ];

const Widget2 = () => {
    
    return(
                <div className="Widget section">

                    <div className="card z-depth-0 Widget_1-summary">
                    
                        <div className="card-content gray-text text-darken-3">
                            
                            <span className="card-title">Performances</span>
                            
                                 <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>        
                                     <Line type="monotone" dataKey="cyclisme" stroke="#0C00F6" /> 
                                     <Line type="monotone" dataKey="course" stroke="#8884d8" />
                                     <Line type="monotone" dataKey="natation" stroke="#83a6ed" />
                                     <XAxis dataKey="name" />
                                     <YAxis />
                                      <Tooltip />  
                                  </LineChart>
                                  
                        </div>
                       
                    </div>
 
                    
                </div>
    )
}


export default Widget2