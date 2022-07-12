import { Button, Modal, StyleSheet, Text, View, } from "react-native";

export default function CustomModal(props) {
   const {
      modalVisible,
      itemSelected,
      onHandlerDeleteItem,
      onHandlerCompleteItem,
   } = props;

   return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
         <View style={styles.modal}>
            <View style={styles.modalView}>              
               <View style={styles.modalMessage}>
                  <Text style={styles.title}>¿Estas seguro que desea borrar ?</Text>
               </View>
               <View style={styles.modalMessage}>
                  <Text style={styles.modalItem}>*{itemSelected.value}*</Text>
               </View>
               <View style={styles.modalButton}>
                  <Button
                     onPress={() => onHandlerDeleteItem(itemSelected.id)}
                     title="Confirmar"
                     
                  />
                  <Button
                     onPress={() => onHandlerCompleteItem(itemSelected.id)}
                     title="Tachar"
                        
                     />
               </View>
            </View>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   btn:{
      backgroundColor: '#00bfff',
      color: 'red',
      fontSize: 4,
      padding: 10,
      margin: 10,
      borderRadius: 10, fontWeight: 'bold',
      
   },
   modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
   },
   modalView: {
      backgroundColor: "white",
      width: "80%",
      height: "50%",
      borderRadius: 10,
      padding: "10%",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
   },   
   title: {    
      fontSize: 20,
      textAlign: "center",
   },
   modalMessage: {
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
   },
   modalButton: {
      marginTop: 15,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      padding: 10,
   },
   modalItem: {
      fontSize: 30,
   },
});
