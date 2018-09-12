import React, {Component} from 'react';
import {Text, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import FHFollowButton from './FHFollowButton';
import {navigate} from '../../NavigationService';

class FHPeopleItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View style={styles.contactItem}>
            <View>
                <FHFollowButton following={this.props.following} username={this.props.username}/>
            </View>
            <TouchableOpacity onPress = {()=> {navigate('UserProfile', {username : this.props.username})}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column', marginRight:10, alignItems:"flex-end"}}>
                    
                    <Text style={{fontWeight:'bold'}}>{this.props.username}</Text>
                    <Text>{this.props.name}</Text>
                </View>
                <View>
                    {/* <Image style={styles.peopleImage} source={{uri : this.props.avatar}}/> */}
                    <ImageBackground source={{uri : this.props.avatar}} imageStyle={styles.peopleImage}
                    style={[styles.peopleImage, {backgroundColor:'#EFEFEF'}]}/>
                </View>
            </View>
            </TouchableOpacity>
        </View>
        )
    }
}

export default FHPeopleItem;