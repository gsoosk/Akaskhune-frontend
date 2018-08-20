import React, { PureComponent } from 'react';
import {Icon, Button} from 'native-base';



const FHBackIcon = (props) => (
    <Button  transparent rounded primary style={{borderRadius:50}}>
        <Icon name='arrow-forward' style={{color:'white'}} fontSize={500}/>
    </Button>
)
export default FHBackIcon;