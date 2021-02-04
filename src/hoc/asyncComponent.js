import React, {Component} from 'react';

const asyncComponent =(importComponent)=>{
    return class extends Component {
        state={
            component:null
        }
        componentDidMount(){
            console.log(importComponent);
            importComponent()
                .then(cmp => {
                    console.log(cmp);
                    this.setState({component:cmp.default});
                    console.log(cmp.default);
                });
        }
        render(){
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
}
export default asyncComponent;