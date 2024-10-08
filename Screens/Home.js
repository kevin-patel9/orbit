import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  View,
} from "react-native";
import {
  getCommunityPostListApi,
  getHashTagPostListApi,
  getRandomPostApi,
  getTopNomadsApi
} from "../Apis/PostApi";

function Home() {
  const [hashTagList, setHashTagList] = useState([]);
  const [communityList, setCommunityList] = useState([]);
  const [randomPost, setRandomPost] = useState("");
  const [topNomads, setTopNomads] = useState([]);

  useEffect(() => {
    const getPostData = async () => {
      const [
        hashTagPostData,
        communityPostData,
        randomPostData,
        topNomadsData,
      ] = await Promise.all([
        getHashTagPostListApi(),
        getCommunityPostListApi(),
        getRandomPostApi(),
        getTopNomadsApi(),
      ]);

      setHashTagList(hashTagPostData);
      setCommunityList(communityPostData);
      setRandomPost(randomPostData);
      setTopNomads(topNomadsData);
    };

    getPostData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView 
        contentContainerStyle={{ marginHorizontal: 32, paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>
          Discover the world
        </Text>
        <TextInput placeholder="Search" style={styles.textInput} />
        <View style={styles.section}>
            <Image source={{ uri: randomPost?.download_url }} style={{ height: 140, width: "auto", borderRadius: 10 }} />
        </View>
        <View style={styles.section}>
          <View style={styles.trendingTitle}>
            <Text style={styles.title}>Trending hashtags</Text>
            <Text style={styles.seeAllText}>see all</Text>
          </View>
          <FlatList
            data={hashTagList}
            contentContainerStyle={styles.flatListContent}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.download_url }}
                  style={styles.image}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.trendingTitle}>
            <Text style={styles.title}>Top Community</Text>
            <Text style={styles.seeAllText}>see all</Text>
          </View>
          <FlatList
            data={communityList}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.download_url }}
                  style={styles.image}
                />
              </View>
            )}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.trendingTitle}>
            <Text style={styles.title}>Top nomads</Text>
            <Text style={styles.seeAllText}>see all</Text>
          </View>
          <FlatList
            data={topNomads}
            contentContainerStyle={styles.flatListContent}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image
                  source={{ uri: item.download_url }}
                  style={styles.nomadImage}
                />
                <Text style={styles.authorText}>{item.author.length > 10 ? <>{item.author.slice(0, 10)}...</> :  item.author}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  section: {
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    // marginBottom: 10,
    color: "#5a7a7f"
  },
  flatListContent: {
    alignItems: 'center',
    gap: 20,
  },
  itemContainer: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  nomadImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  authorText: {
    textAlign: "center",
    marginTop: 5,
  },
  trendingTitle: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 10 
  },
  seeAllText: {
    color: "#5a7a7f"
  }
});