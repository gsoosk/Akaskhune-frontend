import React from 'react';
import {Component} from 'react';
import {View, KeyboardAvoidingView, Animated, SafeAreaView} from 'react-native';
import SignupFooter from './SignupFooter';
import Details from '../login/Details';
import colors from '../../config/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Container, Content, Footer} from 'native-base';
import SignupInputs from './SignupInputs';
import FHBackIcon from '../../components/FHBackIcon';
export default class Signup extends Component
{
    constructor(props){
        super(props);

    }
    componentWillMount(){
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount(){
        Animated.loop( Animated.timing(this.animatedValue, {
            toValue:1.2,
            duration:22000
        })).start();
       
        
    }
    render()
    {
        var color = this.animatedValue.interpolate({
            inputRange: [ 0, 0.1, 0.4, 0.6, 0.8, 1 , 1.2],
            outputRange: [ colors.primaryColor, "#618e8a", "#4d2968", "#3c358c","#39787a", "#618e8a",colors.primaryColor  ]
        });  
        return(
            <KeyboardAwareScrollView contentContainerStyle={{flexGrow:1}}>
                <Animated.View style={{flex:1, backgroundColor:color, justifyContent: 'center' }}>
               
                    <View style={{flex:3, width:"100%"}}>
                        <Details/>
                    </View>
                    <View style={{flex:6, width:"100%"}}>
                        <SignupInputs/>
                    </View>
                    <View style={{flex:2, width:"100%"}}>
                        <SignupFooter/>
                    </View>
                    <View style={{position:"absolute", top:20, right:20}}>
                        <FHBackIcon/>
                    </View>
                </Animated.View>
                </KeyboardAwareScrollView>
       
        )
    }
}