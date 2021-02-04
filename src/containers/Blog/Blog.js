import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink,Switch,/*Redirect */} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';
console.log(import('./NewPost/NewPost'));
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost')
});
class Blog extends Component {
    state={
        auth:true
    }
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
                    {/* { this.state.auth ? <Route path='/new-post' component={NewPost}/> : null } This called a guard. Prevents users from going to page they are not authorized for. */}
                    { this.state.auth ? <Route prop ='propertyName'path='/new-post' component={AsyncNewPost}/> : null } 
                    {/* Use render method if you want to pass props to the component using Router. */}
                    <Route path='/posts' render={(props)=> (<Posts {...props} auth={this.state.auth}/>)}/>
                    <Route render={()=><h1>404 Page Not Found</h1>} /> {/* If user tries to go to unknown route they will get 404 page not found message */}
                    {/* <Redirect from='/' to='/posts'/> This redirect wont work with above route as they both catch all routes. */}
                    {/* <Route path='/' component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;