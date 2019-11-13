import React, {PureComponent} from 'react';

class Life extends PureComponent {
    state ={
        title:"This is Life state title"
    }

    render(){
        console.log('Render')
        return(
            <div>
                <h2>{this.state.title}</h2>
                <div onClick ={ ()=> this.setState({ title: "Title Changed"}) }>Click me</div>
            </div>
        )
    }
}

export default Life; 