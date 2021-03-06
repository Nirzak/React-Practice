import React, { Component } from 'react';
class Counter extends Component {
    /*state = {
        count: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3']
    };*/
    
    styles = {
        width: 50
    }

    /*handleIncrement = () =>{
        this.setState({count: this.state.count + 1})

    }*/

    render() {
        return (<div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-primary btn-sm m-2'>+</button>
                <button disabled={this.getStatus()} onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
                </div>);
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value == 0) ? "warning" : "primary";
        return classes;
    }

    getStatus(){
        const {value} = this.props.counter;
        return value>0? false:true;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value ===0? 'Zero' : value;
    }
}
 
export default Counter;