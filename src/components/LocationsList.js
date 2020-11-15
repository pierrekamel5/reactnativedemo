import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Text, View, FlatList ,SafeAreaView,TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
const LocationsList = props => {
    if (props === 0 || props === null) {
        return (
          <View className="center">
              <Text>No Locations found.</Text>
          </View>
        );
      }
      const navigation = useNavigation();
    return (
 
 <SafeAreaView  >
     {props.items.map(location => (
         <FlatList key={location.id}  
         data={[{ id:location.id.toString(), title:location.title, image:location.image, visits:location.visits }]}
         renderItem={({item}) => (
              <View style={{ backgroundColor:  'rgb(224, 224, 224)' }}>
                <TouchableOpacity onPress={() => navigation.navigate('details',{ params:{locationId: location.id}} )}>
                <Card key={item.id}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Image   source={{ uri: item.image }} />
            </Card>
                </TouchableOpacity>            
              </View>
          )}
          keyExtractor={item => item.id}>            
            </FlatList>
            
     ))}
    
    </SafeAreaView>
    );
   
  
}
export default LocationsList;