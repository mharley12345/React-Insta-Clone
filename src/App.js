import React, { Component } from 'react';
import './App.css';
import PostsPage from '../PostsContainer/PostsPage';
import LoginPage from '../Login';
import withAuthenticate from '../Authentication/Authenticate.js';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(PostPage) {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate('../Posts')(LoginPage);

export default App;