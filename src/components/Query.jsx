import React from "react";
import { Component } from "react";

const API_URL = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
const API_HEADERS = {
    'Content-Type': 'application/json',Authorization: 'any-string-you-like'
    // The Authorization is not needed for local server};

}

export default class Query extends Component {
    constructor(){super(...arguments);
        this.state = {cards: []};  }  
        componentDidMount(){
            fetch(API_URL,
             {headers: API_HEADERS}).then((response) => 
             response.json()).then((responseData) => 
             {this.setState({cards: responseData});
            }).catch((error) => 
            {console.log('Error fetching and parsing data', error);
        });  } 
    render(){

return (
this.state.cards.map((card)=>{return card.name})




)

    }
    

    }

    