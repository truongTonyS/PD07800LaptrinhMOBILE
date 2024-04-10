import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
       marginTop:30,
    },
    label: {
        color:'#4267b2',
        marginBottom: 8 ,
        fontSize: 14,
        fontWeight:'500',
    },
    inputContainer: {
        borderWidth: 1,
        borderColor:'#8D9BB5',
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        paddingHorizontal:16,
        paddingVertical: 15,
        flex:1,
    },
    eye:{
        width: 24,
        height:24,
        marginHorizontal: 16,
    },
});