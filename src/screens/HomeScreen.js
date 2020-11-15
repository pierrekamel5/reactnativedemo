import { View, Text } from 'react-native'
import React, { useState, useEffect } from "react";
import { getLocations } from '../actions/actions';
import LocationsList from '../components/LocationsList';
import { useHttpClient } from '../hooks/http-hook'
import { ScrollView } from 'react-native-gesture-handler';
const HomeScreen = () => {
   const { sendRequest } = useHttpClient();
    const [loadedLocations, setLoadedLocations] = useState();   
   useEffect(() => {
   const retrieveUsers = async () => {
     await getLocations().then(res => {
      console.log(res.data);
      res.data.map(x =>{
        setLoadedLocations(x.locations)
      } )
      });
    }
    retrieveUsers();
   },[sendRequest]) 
    return (
               <ScrollView > 
                 <Text style={{textAlign:'center',fontSize:35,fontWeight:'bold',backgroundColor:'rgb(224, 224, 224)'}}>Locations</Text>
               {loadedLocations && <LocationsList items={loadedLocations} />}    
               </ScrollView>
    );
}
export default HomeScreen;