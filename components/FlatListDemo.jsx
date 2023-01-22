
import { StyleSheet, Button, Text, FlatList } from 'react-native';

export const FlatListDemo = (props) =>{

    const arrObj = [{
        title:"Post1"
    },
    {
        title:"Post2"
    },
    {
        title:"Post3"
    },
    {
        title:"Post4"
    }]
  return (
   <FlatList data={arrObj} renderItem={(elem)=>{
        return <Text>{elem.item.title}</Text>
   }} />

 
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffff" 
    
  }

});
