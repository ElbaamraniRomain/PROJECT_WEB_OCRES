import React, { Component } from 'react'

class addDataApi extends Component {
    state = {
        data1: '',
        data2: '',
        data3: '',
        data4: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handlSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handlSubmit} className="addData">
                    <h5 className="grey-text text-darken-3">Add data API</h5>
                    {/* <div class="input-field col s12">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div> */}
                    <div className="input-field">
                        <label htmlFor="data1">Data 1</label>
                        <textarea id="data1" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="data2">Data 2</label>
                        <textarea id="data2" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="data3">Data 3</label>
                        <textarea id="data3" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="data4">Data 4</label>
                        <textarea id="data4" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default addDataApi