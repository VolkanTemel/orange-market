import React, {Component} from 'react';
import axios from '../axios-order';

class Products extends Component {
state={
    oranges:[{
        washington : {
            id : 1,
            price : 10,
            title : "Washington Portakal"
        },
        yerli : {
            id : 2,
            price : 5,
            title : "Yerli Portakal"
        }
    }
    ]
}

    componentDidMount() {
       this.getData();
    }

      getData = async () => {
       await axios.get(`Portakallar.json`)
            .then((data) => this.setState({oranges:data.data}))
        console.log(this.state.oranges)
    };

    render() {

        return (
            <div>

            </div>
        );
    }
}

export default Products;