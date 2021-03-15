import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/actions'
import { useAlert } from 'react-alert'
import { Button, TextField } from '@material-ui/core';
// import './index.css'

class AddTodo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {input:""};
    }

    updateInput =input =>{

        this.setState({input});

    }

    handleAddTodo =()=>{
        // const alert = useAlert()
        console.log(this.state.input)
        this.state.input?this.props.addTodo(this.state.input):alert("Enter the task Todo");
        this.setState({input:""});


    }
    render(){

        return (
            <div className="add-todo-list"> 

            <TextField
              label="Name"
              margin="dense"
              fullWidth
              required
              value={this.state.input}
              onChange={e=>this.updateInput(e.target.value)}
              variant="outlined"
            />

            <Button variant="contained" color="primary" onClick={this.handleAddTodo} >
                Add Todo
            </Button>

            </div>
        )
    }
}

export default connect(null,{addTodo})(AddTodo);