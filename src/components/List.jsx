import React from "react";
import { Component } from "react";

const API_URL = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
const API_HEADERS = {
    'Content-Type': 'application/json',Authorization: 'any-string-you-like'
    // The Authorization is not needed for local server};

}

/*

componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
}

https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
*/

export default class List extends Component {
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

    