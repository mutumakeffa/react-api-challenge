import React, { Component } from 'react';
import { connect } from 'react-redux';              //CONNECTS A REACT COMPONENT WITH A REDUX STORE THAT WAS PROVIDED BY THE PROVIDER COMPONENT
import { fetchTasks } from '../actions/taskAction';

class Tasks extends Component {
    componentWillMount() {
        //PLACE THE FETCHTASKS INTO A PROP
        this.props.fetchTasks();
    }
    render() {
        const displayTask = this.props.TaskReducer.map(task => (
            <div key={task.id}>
                <p>{task.customer_first_name}</p>
                <p>{task.personnel_first_names}</p>
            </div>
        ));
        return (
            <div>
                <h1>Display tasks</h1>
                <p>{displayTask}</p>

            </div>
        )
    }
}    
 

//THIS IS WHERE WE WANT TO MAP OUR STATE TO PROPERTIES OF THE COMPONENT SO AS TO BE ABLE TO USE IT INSIDE OUR COMPONENT

const mapStateToProps = state => ({
    TaskReducer: state.TaskReducer.tasks
});

export default connect(mapStateToProps, {fetchTasks} )(Tasks);


