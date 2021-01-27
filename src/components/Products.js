import React, {Component} from 'react';
import axios from 'axios';

class Products extends Component {
state={
    oranges:[]
}

    componentDidMount() {
        axios.get(`https://orange-market-97968-default-rtdb.europe-west1.firebasedatabase.app/`)
            .then(res => {
                const oranges = res.data;
                this.setState({ oranges });
            })
    }


    render() {
        return (
            <div>
                {this.state.oranges.map((orange)=>(
                    <h1>{orange}</h1>
                ))}
            </div>
        );
    }
}

export default Products;