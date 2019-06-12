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
<<<<<<< HEAD

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
=======
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
//   render() {
//     return (
//       <div className="App">
//         <SearchBar
//           searchTerm={this.state.searchTerm}
//           searchPosts={this.searchPostsHandler}
       
//         <PostsContainer
//           posts
//             this.state.filteredPosts.length
//                this.state.filteredPosts
//                this.state.posts/>
          
       
//       </div>
//     );
//   }
// }

// export default App;
>>>>>>> 35cb99072835847f46a29bfa46efa1c8c93f04d0
