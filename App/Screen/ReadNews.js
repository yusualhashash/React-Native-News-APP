import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Share,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import * as WebBrowser from "expo-web-browser";

export default function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const sharenews = () => {
    const message = `*Title:* ${news.title}\n\n*Description:* ${news.description}\n\n*Image:* ${news.urlToImage}`;

    Share.share({
      message: message,
    });
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          display: "flex",
          margin: 3,
          marginLeft: 10,
          marginRight: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => sharenews()}>
          <Feather name="share" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <Image
          source={{ uri: news.urlToImage }}
          style={{
            width: "auto",
            marginTop: 10,
            marginRight: 10,
            marginLeft: 10,
            height: 210,
            borderRadius: 5,
          }}
        />
        <Text style={{ marginLeft: 10, fontWeight: "500", fontSize: 20 }}>
          {news.title}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 5,
            fontWeight: "600",
            fontSize: 15,
            color: "blue",
          }}
        >
          {news.source.name}
        </Text>

        <View style={{ display: "flex" }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 10,
              fontSize: 17,
              fontWeight: "400",
              flex: 1, 
              lineHeight:25
            }}
          >
            {news.description}
          </Text>
          <TouchableOpacity
            onPress={() => WebBrowser.openBrowserAsync(news.url)}
          >
            <Text style={{ marginLeft: 10, color: "blue", fontSize:17,}}>
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
