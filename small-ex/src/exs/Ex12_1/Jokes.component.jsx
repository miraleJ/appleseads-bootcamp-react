import axios from 'axios'
import React from 'react'
import Card from './Card.component'
import './style.css'

class Jokes extends React.Component {
    state = {
        joke : "",
        categories : [],
        selectedCat : "All"
    }

    async componentDidMount() {
        let j = await axios.get('https://api.chucknorris.io/jokes/random');
        this.setState({joke : j.data.value});
        j = await axios.get('https://api.chucknorris.io/jokes/categories');
        this.setState({categories : j});
    }

    newJoke = async (category = 'All') => {
        let j;
        if (category === 'All') {
            j = await axios.get('https://api.chucknorris.io/jokes/random');
        } else {
            j = await axios.get(`https://api.chucknorris.io/jokes/random?category={${category}}`);
        }
        this.setState({joke : j.data.value});    
    }

    handlerDropDown = (e) => {
        this.setState({selectedCat: e.target.value})
    }

    render () {
        return (
            <div>
                <Card 
                    title='Chuck Norris'
                    desc= {this.state.joke}
                    newJoke={this.newJoke}
                />
                <select
                    onChange={this.handlerDropDown}
                >
                    <option>All</option>
                    { this.state.categories.map((c, i) => <option key={i.toString()}>{c} </option>) }
                </select>
            </div>
        )
    }
}

export default Jokes;