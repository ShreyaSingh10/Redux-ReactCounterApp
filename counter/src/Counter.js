import React from "react";
//4. import connect
import { connect } from 'react-redux';

//2. make child functional component
function Counter(props){
	return(
		<div>
			<h1>Counter</h1>
			<p>Count: {props.count}</p>
			<button onClick={props.onIncrementClick}>increment</button>
			<button onClick={props.onDecrementClick}> decrement</button>
		</div>
	)
}

//4.hooking up component to store

//mapStateToProps - whenever state changes we take data from 
//state which comes from store and put it in this component
// we will return whetever this component exactly needs
//** is called every time state changes
function mapStateToProps(state){
	return{
		count:state.count
	}
}

//8. mapdispatchToProps
// create an action and dispatch it
//** is called only once at start
function mapDispatchToProps(dispatch){
	return{
		onIncrementClick: () => {
			const action = {type: 'INCREMENT'};
			dispatch(action);
		},
		onDecrementClick: () => {
			const action = {type: 'DECREMENT'};
			dispatch(action);
		}

	}
}


//5.???
export default connect(mapStateToProps, mapDispatchToProps)(Counter);