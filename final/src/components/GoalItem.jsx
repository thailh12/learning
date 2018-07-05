import React, {Component} from 'react';
import {completeGoalRef, goalRef} from '../firebase';
import {connect} from 'react-redux';

class GoalItem extends Component{
  completeGoal(){
    const {email} = this.props.user;
    const {title, serverKey} = this.props.goal;
    goalRef.chid(serverKey).remove();
    completeGoalRef.push({email, title});
  }
  render(){
    const {email, title} = this.props.goal;
    return (
      <div tyle={{margin:'5px'}}>
        <strong>{title}</strong>
        <span style={{margin:'5px'}}>sibmittes by <em>{email}</em></span>
        <button
          className="btn btn_sm btn-primary"
          onClick={() => this.completeGoal()}
          >
          complete
        </button>
      </div>
    )
  }
}
function mapStateToProps(state){
  const {user} = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(GoalItem);
