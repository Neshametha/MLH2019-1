import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';


const API_KEY = "9cFkFXpsgH57B659"
const API_URL = 'http://api.eventful.com/json/events/search?'
//${API_URL}app_key=${API_KEY}&location=Raleigh
//http://api.eventful.com/json/events/search?app_key=9cFkFXpsgH57B659&location=Raleigh

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            myEvent: [],
            location: ''
        }
    }


    componentDidMount(){
        fetch(`${API_URL}app_key=${API_KEY}&location=Raleigh`, {
            mode: "cors"
        })
            .then(results => results.json())
            .then(json => {this.setState({
                myEvent: json.events.event,
            })
        });
    }

    render(){

        var { newEvent } = this.state;

        return (
            <div>
                <form onSubmit="">
                    <input type="text"></input>
                    <input type="text"></input>
                    <button type="submit"> Search</button>
                </form>


                <ul>
                    {this.state.myEvent.map(event => (
                        <li>
                            {event.title} | {event.start_time}
                        </li> 
                    ))};
                </ul>
                
                <script>
                    
                </script>
            </div>
        
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);