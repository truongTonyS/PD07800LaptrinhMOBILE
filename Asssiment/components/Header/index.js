import React,{ useState } from "react";
import Input from "../Input";
import { styles } from "./styles";
import { Image, Pressable, Text, View } from "react-native";

const Header = ({title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack}) =>{
    const [showSearchInput, setshowSearchInput] = useState(false);

    const onSearchClick = () =>{
        setshowSearchInput(s => !s)
    }
 return(
    <View style={styles.mainContainer}>
        <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/back.png')}></Image>
                </Pressable>
            ): showSearch ? (
                <Pressable hitSlop={20} onPress={onSearchClick}>
                    <Image style={styles.icon} source={require('../../assets/search.png')}></Image>
                </Pressable>
            ) : <View style={styles.space}/>}

            <Text style={styles.title}>{title}</Text>

            {showLogout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require('../../assets/logout.png')}></Image>
                </Pressable>
            ) : <View style={styles.space}/>}
        </View>

        {showSearchInput ? (
            <Input onChangeText={onSearch} value={keyword} placeholder="Type your keyword..."></Input>
        ) : null}
    </View>
 )
}

export default React.memo(Header);