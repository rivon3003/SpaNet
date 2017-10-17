import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginTop: 16,
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

const NearbySpaToggle = (props) => (
  <div style={styles.block}>
        <Toggle
        label="Spa gần tôi"
        defaultToggled={false}
        style={styles.toggle}
        trackOff = {styles.trackOff}
        onToggle = {props.onToggle}
      />
  </div>
);

export default NearbySpaToggle;