
const styles = {
    col: {
      flex: 1,
      flexDirection: 'column',
      // alignItems: 'center', // this will prevent TFs from stretching horizontal
      marginLeft: 7, marginRight: 7,
      // backgroundColor: MKColor.Lime,
    },
    textfield: {
      height: 28,  // have to do it on iOS
      marginTop: 32,
    },
    textfieldWithFloatingLabel: {
      height: 48,  // have to do it on iOS
      marginTop: 10,
    },
    inputFontStyle : {
        fontSize: 10,
        fontStyle: 'italic',
        fontWeight: '200'
      },
    LoginButton : {
       marginTop : 15,
       height : 40,
       borderRadius: 10,
       width : 345,
       alignSelf: 'center',

    },

  };
  export default styles;
