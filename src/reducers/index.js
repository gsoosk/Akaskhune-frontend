import {combineReducers} from 'redux'
import loginApp from './login/login'
import signupApp from './signup/signup'
import completeProfileApp from './completeProfile/completeProfile';
import userInfoApp from './userInfo/userInfo';
import changePasswordApp from './changePassword/changePassword';
import profileApp from './profile/profile';
import fileApp from './file/file';
import newPostApp from './newPost/newPost';
import inviteFriendsApp from './inviteFriends/inviteFriends';
import followApp from './follow/request';

const AkaskhuneApp = combineReducers({
    loginApp,
    signupApp,
    completeProfileApp,
    userInfoApp,
    changePasswordApp,
    profileApp,
    fileApp,
    newPostApp,
    inviteFriendsApp,
    followApp
});

export default AkaskhuneApp;