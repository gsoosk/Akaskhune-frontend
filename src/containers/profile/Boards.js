import React , {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import FHSingleBoard from '../../components/FHSingleBoard';
import {connect} from 'react-redux';
import {Icon, Spinner} from 'native-base';
import colors from '../../config/colors';
import {PulseIndicator} from 'react-native-indicators'
import { rest } from '../../config/urls';

const NoBoardComponent = () => {
    return (
        <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Icon type="MaterialIcons" name="grid-off"/>
            <Text>هیچ بردی وجود ندارد</Text>
        </View>
    )
}
export default class Boards extends Component {
    constructor(props) {
        super(props);
         
        if(this.props.username)
        {
            this.props.initAllBoards(this.props.username);
            this.props.allBoardsRequest(rest.othersAllBoards(this.props.username), this.props.username);
        }
        else{
            this.props.initAllBoards();
            this.props.allBoardsRequest(rest.allBoards);
        }
       
    }

    render() {
        let toReturn;
        if(this.props.loading) {
            toReturn = <View style={{flex:1, justifyContent:'center'}}><PulseIndicator count={8} size={70} color={colors.accentColor}/></View>
        } else if(this.props.success) {
            toReturn =  <View>
                            <FlatList 
                            data = {this.props.boards}
                            renderItem = {({item}) => <FHSingleBoard username={this.props.username} name={item.name} id={item.id}/>}
                            ListEmptyComponent = {<View style={{flex:1 ,justifyContent:'center', alignItems:'center', marginTop:150}}><NoBoardComponent/></View>}
                            onEndReached = {() => {if(!this.props.loading){
                                this.props.allBoardsRequest(this.props.next, this.props.username);
                                        }}}
                            /> 
                        </View>
        } else {
            toReturn = <View><Text>error</Text></View>
        }
        return (
            toReturn
        )
    }

}
