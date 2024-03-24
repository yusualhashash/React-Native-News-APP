import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HeaderList({ news }) {
    const navigation=useNavigation();
  return (
    <View>
      <Text
        style={{
          color: "red",
          marginLeft: 20,
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        New post
      </Text>
      <FlatList
        data={news}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('readnews',{news:item})}
            style={{
              display: "flex",
              borderRadius: 5,
              borderWidth: 0.2,
              margin: 5,
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: item?.urlToImage }}
              style={{ height: 100, borderRadius: 5, width: 100, margin: 5 }}
            />
            <View style={{ position: "relative", marginBottom: 7 }}>
              <Text style={{ marginTop: 10, marginRight:120, fontWeight: "700" }}>{item.title}</Text>
              <Text
                style={{position: "absolute", bottom: 5, color: "blue", fontSize: 13, fontWeight: "500",
                }}
              >
                {item.source.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
