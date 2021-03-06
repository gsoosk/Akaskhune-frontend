import React from 'react';
import {Component} from 'react';
import {View, Image, ListView, Text, FlatList} from 'react-native';
import styles from './styles';
import FHRow from '../../components/FHRow';
import {requestImages, imageRequestInit} from '../../actions/profile/profileRequest'
import {connect} from 'react-redux';
import {Spinner, Icon} from 'native-base';
import colors from '../../config/colors';
import {rest} from '../../config/urls';
import {PulseIndicator} from 'react-native-indicators';
import rowSplit from '../../components/Functions/rowSplit';


export default class Images extends Component {

    constructor(props) {
        super(props);
        this.state = {
            end : false,
        }
        if(this.props.username)
        {
            this.props.init(this.props.username);
            this.props.requestImages(rest.imagesOthers(this.props.username), this.props.username); 
        } else{
            this.props.init();
            this.props.requestImages(rest.imagesSelf); 
        }
           
    }

    setOnEndReach = (value) => {
        this.setState({onEndReachedCalledDuringMomentum : value});
    }

    render() {
        let toReturn;
        if(this.props.success) {
            if(this.props.images.length === 0) {
                toReturn = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Icon type="Feather" name="camera-off"/>
                    <Text>هیچ پستی وجود ندارد</Text>
                </View>            
            }
            else {
                this.dataSource = rowSplit(this.props.images);
                toReturn = <FlatList
                    refreshing={this.props.loading}
                    ListFooterComponent = {this.props.endLoading ? <View style={{backgroundColor:'white'}}><Spinner/></View> : null}   
                    data = {this.dataSource}
                    renderItem = {({item}) => <FHRow leftImage={item[0]} rightImage={item[1]}/>}
                    onScrollBeginDrag = {() => {if(!this.state.end){this.setState({end : true})}}}
                    onEndReached = {() => {
                        if (this.state.end && !this.props.loading) {
                            this.props.requestImages(this.props.url, this.props.username)
                            this.setState({end : false});
                          }
                        }}
                    
                />
            }
        } 
        else if(this.props.loading) {
            toReturn = <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{ height:80, width:80}}>
                    <PulseIndicator count={8} size={70} color={colors.accentColor}/>
                    </View>
                    <Text>در حال بارگزاری اطلاعات</Text>
                </View>  
        }
        else {
            toReturn = <View><Text>error</Text></View>
        }
        return toReturn;
    }
}
