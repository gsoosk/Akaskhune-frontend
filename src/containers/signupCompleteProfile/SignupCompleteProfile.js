import React from 'react';
import {Component} from 'react';
import {View} from 'react-native';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FHBackIcon from '../../components/FHBackIcon';
import AnimatedLinearGradiant from 'react-native-animated-linear-gradient';
export default class SignupCompleteProfile extends Component
{
    constructor(props){
        super(props);

    }
    render()
    {
        return(
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1}}>
                    <AnimatedLinearGradiant customColors={colors.animatedBackgroundColor} style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }} speed={3000} />
                        <View style={{flex:3, width:"100%"}}>
                            {/* <Details/> */}
                        </View>
                        <View style={{flex:8, width:"100%"}}>
                            {/* <SignupInputs/> */}
                        </View>
                        <View style={{position:"absolute", top:20, right:20}}>
                            <FHBackIcon/>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
       
        )
    }
}