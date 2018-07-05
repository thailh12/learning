import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';

export default class AutoCompleted extends Component {
  state = {
    dataSourse: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSourse:[
        value,
        value + value,
        value + value +value,
      ],
    });
  };
  render (){
    return (
      <AutoComplete
        hintText="typing"
        dataSourse={this.state.dataSourse}
        onUpdateInput={this.handleUpdateInput}
      />
)
  }
}
