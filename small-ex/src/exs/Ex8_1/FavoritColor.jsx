import React from 'react'

class FavoritColor extends React.Component {
    state = {
        favoriteColor : 'pink',
        after : ''
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({favoriteColor: 'purple'})
          }, 1000)
    }

    componentDidUpdate() {
        setTimeout(() => {this.setState({after : `The updated favorite color is ${this.state.favoriteColor}`})}, 0)
    }

    render() {
        return(
            <div>
                <h1>
                    My favorite color is {this.state.favoriteColor}
                </h1>
                <div id='after'>{this.state.after}</div>
            </div>
        )
    }
}

export default FavoritColor;