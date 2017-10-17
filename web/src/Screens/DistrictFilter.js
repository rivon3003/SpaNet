import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150,
  },
  hidden: {
      display: 'none'
  },
  display: {
      display: 'block'
  }
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class DistrictFilter extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({ value });

  show(){
    return this.props.isNearbyMode ? styles.hidden : styles.display;
  }

  render() {
    return (
      <div style = {this.show()}>
        <SelectField
          floatingLabelText="Chọn quận"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Tân Bình" />
          <MenuItem value={2} primaryText="Tân Phú" />
          <MenuItem value={3} primaryText="Quận 10" />
          <MenuItem value={4} primaryText="Quận 1" />
          <MenuItem value={5} primaryText="Quận 3" />
        </SelectField>
      </div>
    );
  }
}