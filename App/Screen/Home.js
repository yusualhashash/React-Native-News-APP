import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CategoryText from "../Compenets/CategoryText";
import TopHeaderSlider from "../Compenets/TopHeaderSlider";
import GlobalApi from "../Server/GlobalApi";
import HeaderList from "../Compenets/HeaderList";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
   // getTopheadslider();
   getNewsByCategory('latest');
  }, []);

  const getNewsByCategory = async (category) => {
    setLoading(true); // Set loading state to true when fetching data
    const result = (await GlobalApi.getByCategory(category)).data;
    setNews(result.articles);
    setLoading(false); // Set loading state to false after data is fetched
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? ( // Conditionally render loading indicator if loading state is true
        <ActivityIndicator size="large" color="#4A56C1" style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
      ) : (
        <FlatList
          style={{ backgroundColor:'white', flex: 1 }}
          data={[
            { key: "header" },
            { key: "category" },
            { key: "slider" },
            { key: "list" },
          ]}
          renderItem={({ item }) => {
            switch (item.key) {
              case "header":
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 7,
                      marginLeft: 10,
                      marginRight: 15,
                    }}
                  >
                    <Text
                      style={{ fontSize: 25, fontWeight: "bold", color: "#4A56C1" }}
                    >
                      Istanbul News
                    </Text>
                    <Ionicons
                      name="notifications-outline"
                      size={25}
                      color="black"
                    />
                  </View>
                );
              case "category":
                return (
                  <View style={{ marginTop: 10 }}>
                    <CategoryText selectcategory={(category)=>getNewsByCategory(category)}/>
                  </View>
                );
              case "slider":
                return (
                  <View style={{ marginTop: 10 }}>
                    <TopHeaderSlider news={news} />
                  </View>
                );
              case "list":
                return (
                  <View style={{ marginTop: 10 }}>
                    <HeaderList news={news} />
                  </View>
                );
              default:
                return null;
            }
          }}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
