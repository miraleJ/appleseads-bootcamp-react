import React from 'react'
import data from './Data'
import Name from './Name.component'
import Card from './Card.component'

class DataMassaging extends React.Component {
    state = {
        names : [],
        bornBefore : []
    }
    getAllDataNames() {
        return data.map(p => p.name);
    }

    getBornBefore(year = 1990) {
        return data.filter(p => parseInt(p.birthday.split('-')[2]) < year)
    }

    componentDidMount() {
        this.setState({
            names : this.getAllDataNames(),
            bornBefore : this.getBornBefore(1990)
            });
    }

    render () {
        return (
            <div>
                {this.state.names.map((n, i) => <Name key={i.toString()} name={n}/>)}

                {this.state.bornBefore.map((p, i) => {
                    return (
                        <Card 
                            key={i.toString()}
                            title={p.name} 
                            info1={`B-day: ${p.birthday}`} 
                            info2={`Favorite meats: ${p.favoriteFoods.meats.join(', ')}`}
                            info3={`Favorite fish: ${p.favoriteFoods.fish.join(', ')}`} ></Card>
                    )})
                }       
            </div>
                
        )
    }
}

export default DataMassaging;