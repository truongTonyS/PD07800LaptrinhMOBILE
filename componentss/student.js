import { Text, View } from "react-native";

export default function Student({name, address, phone}){
        return(
            <View>
                <Text>Name: {name}</Text>
                <Text>Phone: {phone}</Text>
                <Text>Address: {address}</Text>
            </View>
        )
}
// rnfes