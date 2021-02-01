import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink,Switch,Redirect } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        
    
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="my-active" //this is dummy classname which doesnt exists. This is just an exaple of how to pass different class. 
                                activeStyle={{
                                    color:'#FA923F',
                                    textDecoration:'underline'
                                }}
                                exact to='/posts'>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>

               
                {/*Switch only allows one route. Whichever comes first */}
                <Switch>
                    <Route path='/new-post' component={NewPost}/>
                    <Route path='/posts' component={Posts}/>
                    <Redirect from='/' to='/posts'/>
                    {/* <Route path='/' component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;