import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import NearbyToggle from './NearbyToggle';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
const iconStyles = {
  marginRight: 24,
};

const recentsIcon = <FontIcon className="material-icons" style={iconStyles}>history</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite_border</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavBar extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index, isNearbyMode) => {
    this.setState({selectedIndex: index});
    if(isNearbyMode)
    {
      this.props.home.setState({ isNearbyMode: true });
    }
    else
    {
      this.props.home.setState({ isNearbyMode: false });
    } 
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Recents"
            icon={recentsIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Favorites"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Nearby"
            icon={nearbyIcon}
            onClick={() => this.select(2, true)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavBar;