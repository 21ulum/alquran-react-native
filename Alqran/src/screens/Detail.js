import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = ({ route }) => {

  const [listAyat, setLisAyat] = useState([])

  const getAyat = async () => {
    try {
        await axios.get(route.params.surahId).then(res => {
            setLisAyat(res.data.data.verses)

        })
    } catch (error) {
      
    }
  }
  useEffect(() => {
      getAyat()
  }, [])

  return  (
      <View>
          <FlatList
               data={listAyat}
               renderItem={(item, index) => (
                  <View style={styles.wrapperSurah}>
                      <View style={styles.wrapperAyat}>
                          <Text style={styles.wrapperNumber}>{item.item.number.inSurah}</Text>
                          <Text style={styles.wrapperArabic}>{item.item.text.arab}</Text>
                      </View>
                        <Text style={styles.wrappertranslation}>{item.item.translation.id}</Text>
                  </View>
               )}
          />
      </View>
  )
}


export default Detail

const styles = StyleSheet.create({
  wrapperSurah: {
    flex: 1,
    padding: 8,
  },
  wrapperAyat: {
      flexDirection: 'row',
      backgroundColor: 'darkorchid',
      borderRadius: 5,
      justifyContent: 'space-between',
      margin: 8,
    },
    wrappertranslation: {
      padding: 8,
      backgroundColor: '#C8FAC8',
      // color: 'white',
      borderRadius: 5,
      justifyContent: 'center',
      marginVertical: 8,
    },
    wrapperArabic: {
      flex: 2,
      padding: 8,
      fontSize: 24,
      color: 'white',

  },
  wrapperNumber: {
    fontSize: 20,
    padding: 8,
    color: 'white',
  }

})