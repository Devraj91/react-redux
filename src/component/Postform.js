import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());
export default class Postform extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   title: '',
        //   body: ''
        // };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
      title: '',
      body: ''
    };
    

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit(e) {
      e.preventDefault();

      const post = {
        title: this.state.title,
        body: this.state.body
      }


      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => err);
    }

  render() {
    return (
      <Provider store={store}>
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input type="text" name="title" onChange={this.onChange}
             value={this.state.title} />
          </div>
          <br />
          <div>
          <label>Body:</label>
            <br />
            <textarea type="text" name="body" onChange={this.onChange}
             value={this.state.body}/>
          </div>
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
      </Provider>
    )
  }
}
