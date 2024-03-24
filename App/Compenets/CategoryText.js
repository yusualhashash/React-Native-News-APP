import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

export default function CategoryText({selectcategory}) {

  const [active, setActive] = useState();

  const categoryList = [
    {
      id: "1",
      name: "Latest",
    },
    {
      id: "2",
      name: "World",
    },
    {
      id: "3",
      name: "Business",
    },
    {
      id: "4",
      name: "Sport",
    },
    {
      id: "5",
      name: "Life",
    },
    {
      id: "6",
      name: "Movies",
    },
  ];

  const presstolist = (id) => {
    setActive(id);
  };

  return (
    <View>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>{ presstolist(item.id),selectcategory(item.name)}}
            style={styles.item}
          >
            <Text

                style={
                    active === item.id
                    ? { color: 'blue', fontWeight: "700", fontSize: 10 }
                    : { fontWeight: "600", marginTop: 3, fontSize: 13 }
                }
  
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingRight: 25,
    paddingLeft:15,
    paddingBottom: 5,
    paddingTop:5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
