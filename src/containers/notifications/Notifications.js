import React, { Component } from 'react'
import {View, FlatList,Text, Dimensions, RefreshControl} from 'react-native';
import NotificationsHeader from './NotificationsHeader';
import PostLikeOrCommentNotif from './PostLikeOrCommentNotif';
import FollowNotif from './FollowNotif';
import colors from '../../config/colors';
import EmptyNotificationsList from './EmptyNoficationsList';
import {connect} from 'react-redux';
import {getNotifications, notificationsInit} from '../../actions/notifications/requestActions';
import { rest } from '../../config/urls';

const data =[
    {
      type :'day',
      name : 'امروز'
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },{
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      type :'day',
      name : 'امروز'
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'comment',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      type : 'like',
      fullname : 'فرزاد حبیبی',
      post_id : 12,
      time : "۳ ساعت پیش ",
      photo_url : "",
      comment_text : "به به به به ..."
    },
    {
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
    {
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },{
      fullname : 'فرزاد حبیبی',
      type : 'follow',
      user_id : 1,
      username : '‌',
      is_followed : true,
      time : "۴ساعت پیش ",
      avatar_url : ""
    },
  ]
const heightOfDayTitle = Dimensions.get('window').height *43/640;

class Notifications extends Component {
  constructor(props)
  {
    super(props);
    this.refreshNotifications();
    this.onEndReachedCalledDuringMomentum = true;
  }
  refreshNotifications = () => {
    this.props.notificationsInit()
    this.props.getNotifications(rest.notifications);
  }

  render() {
    // console.warn(this.props.notifications);
    return (
      <View style={{flex:1, backgroundColor:'white'}}>
        <NotificationsHeader/>
        <View style={{flex:1}}>
        <FlatList
        data = {this.props.notifications}
        ListEmptyComponent = {<EmptyNotificationsList/>}

        refreshControl ={<RefreshControl
          colors={[colors.accentColor]} 
          tintColor={colors.accentColor} 
          refreshing = {this.props.loading}
          onRefresh = {this.refreshNotifications}
          />}
        onEndReached = { () => {if(!this.onEndReachedCalledDuringMomentum){
          this.props.getNotifications(this.props.url);
          this.onEndReachedCalledDuringMomentum = true;} }}
        onEndReachedThreshold = {0.5}
        onScrollBeginDrag={() => { this.onEndReachedCalledDuringMomentum = false; }}
        renderItem={({item}) =>{
          switch(item.type)
          {
            case('like'):
              return <PostLikeOrCommentNotif
                    userName = {item.fullname}
                    time = {item.time}
                    status = {item.type}
                    postId = {item.post_id}
                    photoUrl = {item.photo_url}/>
            case('comment'):
              return <PostLikeOrCommentNotif
                    userName = {item.fullname}
                    time = {item.time}
                    status = {item.type}
                    postId = {item.post_id}
                    photoUrl = {item.photo_url}
                    commentText = {item.comment_text}/>
            case('follow'):
              return <FollowNotif
                    name = {item.fullname}
                    time = {item.time}
                    userId = {item.user_id}
                    username = {item.username}
                    following = {item.is_followed}
                    avatarUrl = {item.avatar_url}/>
            case('day'):
              return <View style={{height:heightOfDayTitle, borderBottomColor : colors.grey, borderBottomWidth:1, 
                                    justifyContent : 'center', }}>
                        <Text style = {{textAlign : 'right', paddingRight : heightOfDayTitle/3, color:'black'}}>{item.name}</Text>
                      </View>
            default : 
              return <View/>
          }
          
        }}
      />
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => {
    return({
      loading : state.notificationsApp.notificationsRequestReducer.loading,
      url : state.notificationsApp.notificationsRequestReducer.url, 
      notifications : state.notificationsApp.notificationsRequestReducer.notifications, 
    })
}

const mapDispatchToProps = dispatch => {
    return({
        notificationsInit : () => dispatch(notificationsInit()),
        getNotifications : (url) => dispatch(getNotifications(url))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);