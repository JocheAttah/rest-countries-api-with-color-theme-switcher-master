import React, {Component} from "react";
import axios from 'axios';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {flagUrl: "", name: "", population: "", region: "", capital: ""};
    }

    async componentDidMount(){
        const url ="https://restcountries.eu/rest/v2/all"
        let response = await axios.get(url);
        let  data = response.data[0];
        
        // console.log(data);
        this.setState({flagUrl: data.flag, 
                       name:data.name,
                       population: data.population,
                       region: data.region,
                       capital:data.capital
                    });
    }
    render() {
        return (
             <div className="Home">
                <h1>Home page</h1>
                <div>
                    <img src= {this.state.flagUrl} alt={this.state.name}/>
                    <h2>{this.state.name}</h2>
                    <p>Population: {this.state.population}</p>
                    <p>Region: {this.state.region}</p>
                    <p>capital: {this.state.capital}</p>
                </div>
             </div>
        );
    }
}


export default Home;