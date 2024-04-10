import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        flexDirection:'column',
        },
    view1:{
        width: "100%",
        height: 500, 
    },
    view2:{
        marginTop:450,
        position:'absolute',
        width:'100%',
        height:'100%',
        padding:20,
        backgroundColor:"white",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    view3:{
        marginTop:200,
        padding:10,
        flexDirection: 'row',
         alignItems: 'center',
          justifyContent: 'space-between' 
    },
    title: {
        color:'#606060',
        paddingVertical: 8,
    },
    price:{
        color:'#000000',
        paddingBottom:8,
    },
});