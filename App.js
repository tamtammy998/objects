import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';

const data = [
  { id: '1', firstName: 'Miarafe', lastName: 'Betasa', nickname: 'Mia', course: 'Information Technology', year: '3rd' },
  { id: '2', firstName: 'Jenmarie', lastName: 'Cumahig', nickname: 'Madi', course: 'Information Technology', year: '3rd' },
  { id: '3', firstName: 'Monaliza', lastName: 'Liparto', nickname: 'muning', course: 'Information Technology', year: '3rd' },

];

export default function ObjectListApp() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => showFullInformation(item)}>
      <Text style={styles.item}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  const showFullInformation = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.fullInfo}>First Name: {selectedItem?.firstName}</Text>
            <Text style={styles.fullInfo}>Last Name: {selectedItem?.lastName}</Text>
            <Text style={styles.fullInfo}>Nickname: {selectedItem?.nickname}</Text>
            <Text style={styles.fullInfo}>Course: {selectedItem?.course}</Text>
            <Text style={styles.fullInfo}>Year: {selectedItem?.year}</Text>
          </ScrollView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: 50,
  },
  item: {
    padding: 20,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullInfo: {
    fontSize: 20,
    marginBottom: 10,
  },
};