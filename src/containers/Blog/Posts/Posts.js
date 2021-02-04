import React, { Component } from 'react';
import axios  from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
//import {Link} from 'react-router-dom';
class Posts extends Component{
    state={
        posts:[],
        error:false
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
            .then(response=>{
                const posts=response.data.slice(0,4);
                const updatedPosts= posts.map(post=>{
                    return{
                        ...post,
                        author:'Harsh'
                    }
                })
                this.setState({posts:updatedPosts})
            })
            .catch(error=>{
                console.log(error);
                this.setState({error:true});
            });
    }

    postSelectedHandler(id){
        //this.props.history.push({ pathName: '/' + id });
        this.props.history.push(this.props.match.url + '/' +id); //This is a programmatic way to Navigating. Alernate for using <Link>
    }

    render(){
        let posts =<p style={{textAlign:'center'}}>Something went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return (
                    //Alternate method of Link is to use the push function to pass the URL parameter.
                    //<Link to={'/'+post.id} key={post.id}> 
                        <Post 
                            key={post.id}
                            title={post.title} 
                            author={post.author}
                            clicked={()=>this.postSelectedHandler(post.id)}/>
                    //</Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url+ '/:id'} exact component={FullPost} /> 
                {/* Here the id is passed dynamically when Post is clicked. */} 
            </div>
            
        );
    }
}

export default Posts;