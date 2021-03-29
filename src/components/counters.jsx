import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
    render() { 
        return (<React.Fragment>
            <button onClick={this.props.OnReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            {this.props.counters.map(counter =>
            <Counter key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter} />)}
        </React.Fragment> );
    }
}
 
export default Counters;