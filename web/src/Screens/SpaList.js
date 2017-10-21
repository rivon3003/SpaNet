import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import SpaInfo from './SpaInfo';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: '10',
    },
    hidden: {
        display: 'none'
    },
    display: {
        display: 'block'
    }
};

const tilesData = [
    {
        img: 'images/grid-list/00-52-29-429_640.jpg',
        title: 'Hana Spa',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Toàn Spa',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Thân Spa',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Thủy Spa',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Blue Spa',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/honey-823614_640.jpg',
        title: 'Honey Spa',
        author: 'fancycravel',
    },
    {
        img: 'images/grid-list/vegetables-790022_640.jpg',
        title: 'Elsa Spa',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/water-plant-821293_640.jpg',
        title: 'Water Spa',
        author: 'BkrmadtyaKarki',
    }, {
        img: 'images/grid-list/00-52-29-429_640.jpg',
        title: 'Hana Spa',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Toàn Spa',
        author: 'pashminu',
    },
    {
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Thân Spa',
        author: 'Danson67',
    },
    {
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Thủy Spa',
        author: 'fancycrave1',
    },
    {
        img: 'images/grid-list/hats-829509_640.jpg',
        title: 'Blue Spa',
        author: 'Hans',
    },
    {
        img: 'images/grid-list/honey-823614_640.jpg',
        title: 'Honey Spa',
        author: 'fancycravel',
    },
    {
        img: 'images/grid-list/vegetables-790022_640.jpg',
        title: 'Elsa Spa',
        author: 'jill111',
    },
    {
        img: 'images/grid-list/water-plant-821293_640.jpg',
        title: 'Water Spa',
        author: 'BkrmadtyaKarki',
    },
];

export default class SpaList extends Component {
    constructor(props) {
        super(props);
    }

    show() {
        return this.props.isNearbyMode ? styles.hidden : styles.display;
    }

    handleClick(event) {
        var self = this;
        var mainScreen = [];
        mainScreen.push(<SpaInfo appContext={self.props.appContext}/>)
        self.props.appContext.setState({ main: mainScreen});
    }

    render() {
        return (
            <div style={styles.root, this.show()}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={4}
        >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                    titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                    <img src={tile.img} onClick={(event) => this.handleClick(event)}/>
                </GridTile>
            ))}
        </GridList>
            </div >
        )
    }
}