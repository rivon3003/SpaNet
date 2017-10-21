import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class SpaInfo extends Component {

    componentWillMount() {
        this.props.appContext.setState({ title: "Thông tin spa" })
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="Hana spa"
                    subtitle="0909090909"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    overlay={<CardTitle title="Hình ảnh spa" subtitle="Cửa chính" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Hana Spa" subtitle="Chung cư Tân Bình" />
                <CardText>
                    Spa đỉnh nhất Hồ Chí Mình
    </CardText>
                <CardActions>
                    <RaisedButton label="Sửa" />
                    <RaisedButton label="Xóa" />
                </CardActions>
            </Card>
        );
    }
}