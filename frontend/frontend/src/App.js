import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const list = [
  {
    id: 1,
    title: 'django',
    body : 'my django react app'
  },
  {
    id: 1,
    title: 'django',
    body : 'my django react app'
  }
]

const items = this.state.list.map(items =>
  <div key={items.id}>
    <h1>{items.title}</h1>
    <p>{items.body}</p>
  </div>
  )

class extends React.Component{
  state = {
    todo : []
  }
  componentDidMount() {
    this.getTodos();
  }
  getTodos() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res=>
      this.setState({ todos: res.data });
  })
  .catch(err =>
    { console.log(err); });
  render() {
    return (
      <div>
         {items}
      </div>
    )
  }
}

export default App;
