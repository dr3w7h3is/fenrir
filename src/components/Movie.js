import React from 'react';
import { Inventory } from './Inventory'

export class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        this.props.onDBUpdate()
    }
    render() {
        return (
            <div className="main-body w3-container">
                <h1>Movies</h1>
                <table className="w3-table w3-bordered w3-border w3-hoverable w3-white">
                    <Inventory onDBUpdate={this.handleChange} />
                </table>
            </div>
        );
    }
}