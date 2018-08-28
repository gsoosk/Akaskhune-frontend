import ImagePicker from 'react-native-image-crop-picker';
import {uploadFile} from '../../actions/file/fileUploadReq';
export const CP_PHOTO_PICKER_SELECTED = "CP_PHOTO_PICKER_SELECTED";
let options = {
    title: 'عکس پروفایل را انتخاب کنید',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
export function pickPhoto(){
    return (dispatch) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            // console.warn(image);
            let url = dispatch(uploadFile(image.path));
            dispatch(setAvatar(url, path));
          }).catch(err => {
            console.warn(err);
            dispatch(setError(err.error));
          });
    }
}
export function takePhoto(){
    return (dispatch) => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true
          }).then(image => {
            // console.warn(image);
            let url = dispatch(uploadFile(image.path));
            dispatch(setAvatar(url, path));
          }).catch(err => {
            console.warn(err);
            dispatch(setError(err.error));
          });
     }
}
export const CP_ERROR = 'CP_ERROR';
export const CP_AVATAR_SOURCE_SELECTED = "CP_AVATAR_SOURCE_SELECTED";
export function setError(error)
{
    return {
        type : CP_ERROR,
        error
    }
}
export function setAvatar(url, avatarSource){
    return {
        type : CP_AVATAR_SOURCE_SELECTED,
        url,
        avatarSource
    }
}