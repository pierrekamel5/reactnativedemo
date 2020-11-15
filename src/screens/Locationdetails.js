import React, {useEffect, useState} from 'react';
import {  ScrollView } from 'react-native';
import {getLocationById} from '../actions/actions';
import { useHttpClient } from '../hooks/http-hook'
import LocationSelected from '../components/LocationSelected';
const Locationdetails = route => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [selectedLocation, setSelectedLocation] = useState();
    useEffect(() => {
        const getLocationSelected = async () => {
          await getLocationById(route.route.params.params.locationId).then(res => {
          setSelectedLocation(res.data);         
           });
         }
         getLocationSelected();
        },[sendRequest]) 
    return (
        <ScrollView>
        {selectedLocation && <LocationSelected Location={selectedLocation} />}    
      </ScrollView>
    );
}

export default Locationdetails;