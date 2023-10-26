import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList, TextInput, Modal, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RefreshControl } from 'react-native';
import DatePicker from '@dietime/react-native-date-picker';


import axios from './Api'; // Importa el módulo axios configurado en la respuesta anterior
import styles from './styles'; // Importa tus estilos desde el archivo styles.js
import { formatDate, calcularFechaSegundaDosis, getColorForEstado } from './function';

function App() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [nombre, setNombre] = useState('');
    const [puesto, setPuesto] = useState('');
    const [vacuna, setVacuna] = useState('');
    const [estado_vacunacion, setEstadoVacunacion] = useState('');
    const [fecha_primera_dosis, setFechaPrimeraDosis] = useState('');
    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        // Cargar la lista de elementos al iniciar la aplicación
        loadItems();
    }, []);

    const loadItems = () => {
        axios
            .get('/index')
            .then((response) => {
                // console.log('Respuesta de la solicitud:', response);
                setItems(response.data);
                setRefreshing(false); // Detener el indicador de refresco en caso de éxito
            })
            .catch((error) => {
                console.error('Error al cargar elementos:', error);
                setRefreshing(false); // Detener el indicador de refresco en caso de error
            });
    };


    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            loadItems();
        }, 1000); // Simula una carga de datos de 1 segundo
    };

    const handleAddItem = () => {
        const newItem = {
            nombre,
            puesto,
            vacuna,
            fecha_primera_dosis,
            estado_vacunacion,
        };
        axios
            .post('/create', newItem)
            .then(() => {
                loadItems();
                setModalVisible(false);
                clearForm();
            })
            .catch((error) => {
                console.error('Error al agregar elemento:', error);
            });
    };

    const handleEditItem = () => {
        const updatedItem = {
            nombre,
            puesto,
            vacuna,
            fecha_primera_dosis,
            estado_vacunacion,
        };
        axios
            .post(`/update/${selectedItem.id}`, updatedItem)
            .then(() => {
                console.log('actualizado con existo')
                loadItems();
                setModalVisible(false);
                clearForm();
            })
            .catch((error) => {
                console.error('Error al editar elemento:', error);
            });
    };

    const handleDeleteItem = () => {
        axios
            .post(`/delete/${selectedItem.id}`)
            .then(() => {
                loadItems();
                setModalVisible(false);
                clearForm();
            })
            .catch((error) => {
                console.error('Error al eliminar elemento:', error);
            });
    };

    const clearForm = () => {
        setNombre('');
        setPuesto('');
        setVacuna('');
        setFechaPrimeraDosis('');
        setEstadoVacunacion('');
        setSelectedItem(null);
    };
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => {
                setSelectedItem(item);
                setNombre(item.nombre);
                setPuesto(item.puesto);
                setVacuna(item.vacuna);
                setFechaPrimeraDosis(item.fecha_primera_dosis);
                setModalVisible(true);
            }}
        >
            <Text style={styles.cardText}>Nombre: {item.nombre}</Text>
            <Text>Puesto: {item.puesto}</Text>
            <Text>Vacuna: {item.vacuna}</Text>
            <Text>Fecha Primera Dosis: {formatDate(item.fecha_primera_dosis)}</Text>
            {item.vacuna !== 'Janssen' && (
                <Text>Fecha Segunda Dosis: {formatDate(calcularFechaSegundaDosis(item.vacuna, item.fecha_primera_dosis))}</Text>
            )}
            {/* <Text>Estado Vacunación: {item.estado_vacunacion}</Text> */}
            <View style={{
                backgroundColor: getColorForEstado(item.estado_vacunacion),
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
            }}>
                <Text style={{ color: 'white' }}>
                    {item.estado_vacunacion}
                </Text>
            </View>




        </TouchableOpacity>
    );



    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Listado de Empleados</Text>

            <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                    clearForm();
                    setModalVisible(true);
                }}            >
                <Text style={styles.addButtonLabel}>Agregar</Text>
            </TouchableOpacity>

            <FlatList
                style={styles.flatList}
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
            />
            <Modal visible={isModalVisible} transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalHeaderText}>
                            {selectedItem ? 'Editar Empleado' : 'Agregar Empleado'}
                        </Text>
                        <Text>Nombre:</Text>
                        <TextInput value={nombre} onChangeText={setNombre} style={styles.input} />
                        <Text>Puesto:</Text>
                        <TextInput value={puesto} onChangeText={setPuesto} style={styles.input} />
                        <Text>Vacuna:</Text>
                        {/* <TextInput value={vacuna} onChangeText={setVacuna} style={styles.input} /> */}
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={vacuna}
                                onValueChange={setVacuna}
                                style={styles.picker}
                            >
                                <Picker.Item label="Sinopharm" value="Sinopharm" />
                                <Picker.Item label="AstraZeneca" value="AstraZeneca" />
                                <Picker.Item label="Sputnik V" value="Sputnik V" />
                                <Picker.Item label="Pfizer" value="Pfizer" />
                                <Picker.Item label="Moderna" value="Moderna" />
                                <Picker.Item label="Janssen" value="Janssen" />
                            </Picker>
                        </View>
                        <Text>Fecha Primera Dosis (yyyy-mm-dd):</Text>
                        <TextInput
                            value={fecha_primera_dosis}
                            onChangeText={setFechaPrimeraDosis}
                            style={styles.input}
                        />
                        {/* <DatePicker
                            value={fecha_primera_dosis}
                            onChange={(value) => setFechaPrimeraDosis(value)}
                            format="yyyy-mm-dd"
                        /> */}
                        <Text>Estado vacunación:</Text>
                        <View style={styles.pickerContainer}>

                            <Picker
                                selectedValue={estado_vacunacion}
                                onValueChange={setEstadoVacunacion}
                                style={styles.picker}
                            >
                                <Picker.Item label="Protegido" value="Protegido" />
                                <Picker.Item label="En Progreso" value="En Progreso" />
                                <Picker.Item label="En Riesgo" value="En Riesgo" />
                            </Picker>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button
                                color="green"
                                title={selectedItem ? 'Editar' : 'Agregar'}
                                onPress={selectedItem ? handleEditItem : handleAddItem}
                            />
                            {selectedItem && (
                                <Button color="red" title="Eliminar" onPress={handleDeleteItem} />
                            )}
                            <Button color="" title="Cancelar" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default App;