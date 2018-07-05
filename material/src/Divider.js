import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const styles = {
  marginLeft: 20,
};

const DividerEx = () =>(
  <Paper zDepth={3}>
    <TextField hintText="First name" style={styles} underlineShow={false} />
   <Divider />
   <TextField hintText="Middle name" style={styles} underlineShow={false} />
   <Divider />
   <TextField hintText="Last name" style={styles} underlineShow={false} />
   <Divider />
   <TextField hintText="Email address" style={styles} underlineShow={false} />
   <Divider />
  </Paper>
);

export default DividerEx;
