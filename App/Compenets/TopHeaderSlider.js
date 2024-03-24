import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Server/GlobalApi'
import { useNavigation } from '@react-navigation/native'

export default function TopHeaderSlider({news}) {

    const Navigation =useNavigation();


  return (
    <View>
      <FlatList
      data={news}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(

        <TouchableOpacity 
        onPress={()=>Navigation.navigate('readnews',{news:item})}
        
        style={{width:300 , margin:5 , borderRadius:5, borderWidth:0.1}}>
            <Image source={{uri:item.urlToImage}}  style={{height:170,borderRadius:5, }} />
            <Text style={{marginTop:3 ,marginLeft:5 ,fontWeight:'bold' , fontSize:15 }}>{item.title}</Text>
            <Text style={{marginTop:5 , marginBottom:7,fontWeight:'500', color:'blue',marginLeft:10}}>{item.source.name}</Text>    
        </TouchableOpacity>

      )}
      
      
      
      />
    </View>
  )
}