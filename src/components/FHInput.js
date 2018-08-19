import React from 'react';
import {Input, Form , Item, Label, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
import styles from './styles';
const FHInput = (props) => {
    // const styles = StyleSheet.create({
    //     textInput: {
    //      color: 'green',
    //      textDecorationColor:'red',
    //     },
    //    });
    
  return (<Item regular style={styles.inputItem}>
            <Input placeholderTextColor={colors.blackGrey} 
            placeholder={props.text} onChangeText={props.onTextChange} />
         </Item>);
}

export default FHInput;