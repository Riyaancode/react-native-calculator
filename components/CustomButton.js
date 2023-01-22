
import { StyleSheet, Button } from 'react-native';

export default function CustomButton(props) {
  return (
   
      <Button
      styles={styles.btn}
        title={props.title}
        color="blue" 
        onPress={()=> alert('hello')}
        
      />
 
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#ffff" 
    
  }

});
