import React, { Component } from 'react';
import { connect } from 'react-redux';              //CONNECTS A REACT COMPONENT WITH A REDUX STORE THAT WAS PROVIDED BY THE PROVIDER COMPONENT
import { fetchTasks } from '../actions/taskAction';
import PropTypes from 'prop-types';

class Tasks extends Component {
   
    render() {
        const { data } = this.props.taskReducer;
         
        const displayTask = data.length ? (data.map(task => (
            <div key={task.tasks_id}>
                <p>{task.customer_first_name}</p>
                <p>{task}</p>
                
            </div>
        ))) : (
            <div>No tasks rendered</div>
        );
        
        
        return (
            <div>
                <h1>Display tasks</h1> 
                <p>{displayTask}</p>

            </div>
        )
    }
}    


Tasks.propTypes = {
    fetchTasks: PropTypes.func.isRequired,
    taskReducer: PropTypes.func.isRequired,
};

//THIS IS WHERE WE WANT TO MAP OUR STATE TO PROPERTIES OF THE COMPONENT SO AS TO BE ABLE TO USE IT INSIDE OUR COMPONENT

const mapStateToProps = state => ({
    taskReducer: state.taskReducer

});

export default connect(mapStateToProps, {fetchTasks} )(Tasks);


