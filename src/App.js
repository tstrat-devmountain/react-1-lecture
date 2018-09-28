import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
      friends: [{name: 'Kitty404', url:'http://http.cat/404'}],
    }
  }

  updateUrl = (event) => this.setState({
    url: event.target.value
  })

  addFriend = (e) => {
    const {name, url} = this.state;
    const friendsCopy = this.state.friends.slice();
    friendsCopy.push({name, url})
    this.setState({
      name:'',
      url:'',
      friends:  friendsCopy,
    })
  }

  render() {
    const {name, url, friends} = this.state
    //console.log(this.state);
    return (
      <div>
        <div>
          Name: 
          <input 
            value={name} 
            onChange={e => this.setState({
              name: e.target.value
            })}
            />
          {name}
        </div>
        <div>
          Picture URL: <input value={url} onChange={this.updateUrl}/>
          {url}
        </div>
        <button onClick={this.addFriend}>Add Friend</button>
        <div>
          Friends: {friends.map(e => {
            return <div>
            Name: {e.name}{' '}&nbsp;
            Picture: <img alt="Kittycat!" src={e.url} />
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
