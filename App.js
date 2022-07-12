import {
  StyleSheet,
  View
} from "react-native";

import AddItem from "./components/AddItem";
import CustomModal from "./components/Modal";
import List from "./components/List";
import { useState } from "react";

export default function App() {
   const [textItem, setTextItem] = useState("");
   const [itemList, setItemList] = useState([]);
   const [modalVisible, setModalVisible] = useState(false);
   const [itemSelected, setItemSelected] = useState({});

   const onHandlerChangeItem = (text) => setTextItem(text);
   const onHandlerAddItem = () => {
      //console.log("se agrego el item", textItem);
      setItemList((currentItems) => [
         ...currentItems,
         { id: Date.now(), value: textItem, completed: false },
      ]);

      setTextItem("");
   };

   const onHandlerDeleteItem = (id) => {
      setItemList((currentItems) =>
         currentItems.filter((item) => item.id !== id)
      );
      setItemSelected({});
      setModalVisible(!modalVisible);
   };
   const onHandlerModal = (id) => {
      setItemSelected(itemList.find((item) => item.id === id));
      setModalVisible(!modalVisible);
   };

   const onHandlerCompleteItem = (id) => {
      let itemCompleted = itemList.findIndex((item) => item.id === id);
      itemList[itemCompleted].completed = true;
      setItemList([...itemList]);
      setModalVisible(!modalVisible);
   };
 
   return (
      <View style={styles.screen}>
         <CustomModal
            modalVisible={modalVisible}
            onHandlerDeleteItem={onHandlerDeleteItem}
            itemSelected={itemSelected}
            onHandlerCompleteItem={onHandlerCompleteItem}
         />
         <AddItem
            textItem={textItem}
            onHandlerAddItem={onHandlerAddItem}
            onHandlerChangeItem={onHandlerChangeItem}
         />
         <List itemList={itemList} onHandlerModal={onHandlerModal} />
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      marginTop: "10%",
      padding: 30,
   },
});
