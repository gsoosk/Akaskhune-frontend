import React from 'react';
import FHBackIcon from './FHBackIcon';
import {Header, Right, Body, Left, Title} from 'native-base';
import colors from '../config/colors';

const FHHeader = (props) => {
    return (
        <Header style={{ backgroundColor: colors.primaryColor}}
        androidStatusBarColor={colors.primaryColor}>
            <Left style={{flex:1}}>

            </Left>
            <Body style={{flex:1, alignItems:'center'}}>
                <Title>{props.title}</Title>
            </Body>
            <Right style={{flex:1}}>
                <FHBackIcon/>
            </Right>
        </Header>
    );
}

export default FHHeader;