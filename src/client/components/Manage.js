import React from 'react';
import { getCategories, postNewRecord } from '../controller/api'
import amazon_icon from './img/amazon_icon.png';
import disney_icon from './img/disney_icon.png';
import hbo_icon from './img/hbo_icon.png';
import hulu_icon from './img/hulu_icon.png';
import netflix_icon from './img/netflix_icon.png';
import plex_icon from './img/plex_icon.png';
import youtube_icon from './img/youtube_icon.png';
export class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.submit = this.submit.bind(this)
        this.clearForm = this.clearForm.bind(this)
        this.state = { categories: [] }
    }

    componentDidMount() {
        getCategories().then(categories => {
            this.setState({ categories: categories })
        })
    }


    handleFormChange(e) {
        let value = e.target.value
        if (e.target.type === 'checkbox') {
            value = e.target.checked
        }
        this.setState({ [e.target.id]: value })
    }

    clearForm() {
        let copy = {}
        Object.assign(copy, this.state)
        let categories = this.state.categories
        Object.keys(copy).map(key => copy[key] = '')
        copy.categories = categories
        this.setState(copy)
    }

    submit(e) {
        e.preventDefault()
        let stateCopy = {}
        Object.assign(stateCopy, this.state)
        delete stateCopy.categories
        //newItem = addHash(newItem);
        let jstr = JSON.stringify(stateCopy);
        postNewRecord(jstr).then(t => this.clearForm())
        return false
    }
    render() {
        return (
            <div className="main-body w3-container">
                <h1>Manage Accounts</h1>
                <div className="add-items">
                    <form id="items">
                        <ul className="no-bullet w3-center">
                            <li>
                                <label form="type">Plex</label>
                                <img src={plex_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">Netflix</label>
                                <img src={netflix_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">Hulu</label>
                                <img src={hulu_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">Disney+</label>
                                <img src={disney_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">Amazon Video</label>
                                <img src={amazon_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">HBO Go</label>
                                <img src={hbo_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                            <li>
                                <label form="type">YouTube TV</label>
                                <img src={youtube_icon} alt="" />
                                <button type="submit" onClick={this.submit}>Connect</button>
                                <button type="submit" onClick={this.submit}>Logout</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}