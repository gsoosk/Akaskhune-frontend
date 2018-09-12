import React from 'react';
import {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import {requestInfo} from '../../actions/profile/profileRequest';
import {getSelfInfo} from '../../actions/userInfo/userInfoRequest';
import {connect} from 'react-redux';
import colors from '../../config/colors';
import {navigate} from '../../../NavigationService';

export default class ProfileInfo extends Component {

    render() {
        return (
            <View style={{flex : 1, flexDirection: 'row-reverse', justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                    <ImageBackground imageStyle={{width:100, height:100, borderRadius:50}} source={{uri:this.props.avatar}} style={{backgroundColor:'white',width:100, height:100, borderRadius:50}}/>
                </View>
                <View style={{flex:2, flexDirection:'column', marginRight:20, marginTop:5}}>
                    <Text style={{fontWeight:'bold', fontSize:20,textAlign:'right'}}>{this.props.fullname}</Text>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <Text style={{textAlign:'right', marginRight:10}} onPress={() => !this.props.is_private || this.props.status === 'followed'? navigate("FollowingsList") : null}>{this.props.following_count}{" دنبال شونده"}</Text>
                        <Text style={{textAlign:'right'}} onPress={() => !this.props.is_private || this.props.status === 'followed' ? navigate("FollowersList") : null}>{this.props.follower_count}{" دنبال کننده"}</Text>
                    </View>
                    <Text style={{fontSize:12 ,fontWeight:'bold', textAlign:'right', marginTop:5}}>{this.props.bio}</Text>
                </View>
            </View>
        )
    }
}
