import React, { Component } from 'react';
import { connect } from 'react-redux';              //CONNECTS A REACT COMPONENT WITH A REDUX STORE THAT WAS PROVIDED BY THE PROVIDER COMPONENT
import { fetchTasks } from '../actions/taskAction';

class Tasks extends Component {
    componentWillMount() {
        //PLACE THE FETCHTASKS INTO A PROP
        this.props.fetchTasks();
    }
    render() {
        const displayTask = this.state.TaskReducer.map(tasks => (
            <div key={tasks.id}>
                <p>{tasks.customer_first_name}</p>
                <p>{tasks.personnel_first_names}</p>
            </div>
        ));
        return (
            <div>
                <h1>Display tasks</h1>

            </div>
        )
    }
}    
 

//THIS IS WHERE WE WANT TO MAP OUR STATE TO PROPERTIES OF THE COMPONENT SO AS TO BE ABLE TO USE IT INSIDE OUR COMPONENT

const mapStateToProps = state => ({
    TaskReducer: state.TaskReducer.task
});

export default connect(mapStateToProps, {fetchTasks} )(Tasks);


