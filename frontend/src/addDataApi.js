import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import axios from 'axios'
var date = new Date();
class addDataApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type_activite: '',
            calories: parseInt(''),
            distance: parseInt(''),
            temps: parseInt(''),
            date: date
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        // const payload = (this.state);

        axios({
            url: 'http://localhost:8080/activite/addActivite',
            method: 'POST',
            data: this.state,
        })
            .then(() => {
                console.log("data sent");
            })
            .catch(() => {
                console.log("error frontend")
            })
    };


    render() {
        return (
            <div className="container">
                <Container>
                    <form onSubmit={this.handlSubmit} className="addData">
                        <h5 className="grey-text text-darken-3">Add data API</h5>
                        {/* <Row>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span id="data1" onChange={this.handleChange}>Course</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span id="data1" onChange={this.handleChange}>Cyclisme</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input name="group1" type="radio" />
                                    <span id="data1" onChange={this.handleChange}>Natation</span>
                                </label>
                            </p>
                        </Row> */}
                        <div className="input-field">
                            <label htmlFor="type_activite">type d'activité</label>
                            <textarea id="type_activite" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <label htmlFor="calories">calories</label>
                            <textarea id="calories" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <label htmlFor="distance">distance</label>
                            <textarea id="distance" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <label htmlFor="temps">temps</label>
                            <textarea id="temps" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <input type="submit" className="btn orange lighten-1 z-depth-0"/>
                        </div>
                    </form>
                </Container>
            </div>
        )
    }
}

export default addDataApi