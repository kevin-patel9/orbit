import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SingleReels = ({ item }) => {
    const [likeStatus, setLikeStatus] = useState(false);
    const [count, setCount] = useState(100);

    const handleLike = () => {
        const countNumber = !likeStatus ? 101 : 100;
        setCount(countNumber);
        setLikeStatus(!likeStatus);
    }

    return (
        <View style={{ width, height }}>
            <Text style={styles.headerTitle}>For you</Text>
            <Image
                source={{ uri: item.download_url }}
                style={{ width: "100%", height: "94%" }}
                resizeMode="cover"
            />
            <TouchableOpacity
                onPress={handleLike}
                style={{ position: "absolute", right: 20, top: height / 1.64 }}
            >
                {likeStatus ?
                    <AntDesign name="heart" size={30} color="red" />
                    :
                    <AntDesign name="hearto" size={30} color="white" />
                }
                <Text style={styles.interactionTitle}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ position: "absolute", right: 20, top: height / 1.9 }}
            >
                <FontAwesome5 name="comment" size={30} color="white" />
                <Text style={styles.interactionTitle}>40</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ position: "absolute", right: 20, top: height / 1.44 }}
            >
                <FontAwesome name="share" size={26} color="white" />
                <Text style={styles.interactionTitle}>20</Text>
            </TouchableOpacity>
            <Text style={styles.caption}>{item.author}</Text>
            <Text style={[styles.caption, { bottom: 80, width: 260 }]}>
                #Reprehenderit commodo Lorem ipsum Lorem magna fugiat laborum sunt.
            </Text>
        </View>
    );
};

export default SingleReels;

const styles = StyleSheet.create({
    headerTitle: {
        position: "absolute",
        left: width / 2.3,
        top: Platform.OS === "android" ? 16 : 30,
        zIndex: 2,
        color: "white",
        fontWeight: "600"
    },
    caption: {
        position: "absolute",
        left: 30,
        bottom: 120,
        zIndex: 2,
        color: "white",
        fontWeight: "600"
    },
    interactionTitle: { 
        textAlign: "center",
        color: "white"
    }
});
