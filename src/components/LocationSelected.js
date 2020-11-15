import React from 'react';
import { Image,  View } from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Body, Right } from 'native-base';
const LocationSelected = props => {
    console.log(props.Location);
    return (
        <Container >
        <Content >
          <Card style={{flex:0}}>
            <CardItem >
              <Body>
                <Image 
                source={{uri: props.Location.main_image}} style={{height: 200, width: "100%", flex: 1}}/>
                <Text style={{fontSize:26,fontWeight:"bold",marginTop:10}}>
                 {props.Location.title}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={{fontSize:12}}>{props.Location.content}</Text>                
              </Left>
            </CardItem>
            <CardItem>
                  <Text style={{fontWeight:"bold",fontSize:20}}>Good To Know</Text>
                 
            </CardItem>
            <CardItem>
                <Text style={{fontWeight:"bold",fontSize:14}}>Opening Hours</Text>
                <Right><Text>8:00AM - 5:00PM</Text></Right>
            </CardItem>
            <CardItem>
                <Right><Text>
                {props.Location.entranceFeesLocals > 0 ? props.Location.entranceFeesLocals + " For Locals " : ""}  {"\n"} {"\n"}
                 {props.Location.entranceFeesForeigns > 0 ? props.Location.entranceFeesForeigns + " For Foreigns" : "" }
                    </Text></Right>
            </CardItem>
            <CardItem>
                
            <Text style={{fontWeight:"bold",fontSize:14}}>Accessbility</Text>
                <Right><Text>{props.Location.accessibility[2].title}</Text></Right>
            </CardItem>
            <CardItem>{props.Location.events.length != 0 &&
                <Left>
                  <Text style={{fontWeight:"bold",fontSize:20}}>Events</Text>
              </Left>}
            </CardItem>
            <CardItem>{props.Location.events && props.Location.events.map(event =>{
               return(<View key={event.id}>
                    <Text>{event.eventDate} {"\n"}{"\n"} {event.title}</Text>
               </View>)  
            })}
            
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
}

export default LocationSelected;