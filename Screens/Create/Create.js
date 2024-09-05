import React, { useEffect, useState } from "react";
import { View, Image, SafeAreaView, FlatList } from "react-native";
import { getReelsListApi } from "../../Apis/ReelsApi";
import SingleReels from "./SingleReels";

function Create() {
    const [reelsData, setReelsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await getReelsListApi();
            
            if (response.length > 0) {
                setReelsData(prevData => [...prevData, ...response]);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const reelsScreen = (item) => (
        <SingleReels item={item} />
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <FlatList
                data={reelsData}
                renderItem={({ item }) => reelsScreen(item)}
                windowSize={8}
                onEndReached={fetchData}
                onEndReachedThreshold={0.1}
                disableIntervalMomentum={true}
                pagingEnabled
                removeClippedSubviews
                initialNumToRender={10}
                decelerationRate="normal"
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            />
        </SafeAreaView>
    );
};

export default Create;
