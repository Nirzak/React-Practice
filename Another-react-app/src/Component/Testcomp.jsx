import React, { Component, createElement } from 'react';
class Testcomp extends Component {
    constructor(props) {
        super(props)
        }
    render() { 
        const element = React.createElement("h1", {className: "hero-title"}, "Welcome to our supermarket");
        return (<div className="comptext">
        <h3>First Component</h3>
            {this.props.displaytext}
            {element}
        </div>)
    }
}
 
export default Testcomp;