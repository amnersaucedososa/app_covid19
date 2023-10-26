import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    flatList: {
        backgroundColor: '#f5f5f5', // Cambia el color de fondo según tus preferencias
        padding: 10, // Agrega un espacio alrededor de la lista
    },
    container: {
        flex: 1,
        paddingTop: 25, // Espacio en blanco en la parte superior
        backgroundColor: '#f5f5f5',
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5, // Agrega una sombra al botón flotante
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 30,
    },
    datePickerStyle: {
        width: 230,
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    cardText: {
        fontSize: 18,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 100,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatingButtonText: {
        fontSize: 18,
        color: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    modalHeaderText: {
        fontSize: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginVertical: 4,
    },
    picker: {
        marginVertical: 4,
    },
    flatList: {
        flex: 1,
    },
    addButton: {
        alignSelf: 'flex-end', // Alinea el botón a la derecha
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16, // Agrega espacio entre el botón y el listado
    },
    addButtonLabel: {
        fontSize: 18,
        color: 'white',
    }, flatList: {
        flex: 1,
    },
    addButton: {
        alignSelf: 'flex-end', // Alinea el botón a la derecha
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 8,
        marginBottom: 16, // Agrega espacio entre el botón y el listado
    },
    addButtonLabel: {
        fontSize: 18,
        color: 'white',
    },
    buttonContainer: {
        flexDirection: 'row', // Coloca los botones en una fila horizontal
        justifyContent: 'space-between', // Distribuye el espacio entre los botones
        marginVertical: 16, // Agrega espacio vertical
    },
    pickerContainer: {
        borderColor: '#ccc', // Color del borde
        borderWidth: 1, // Ancho del borde
        borderRadius: 5, // Radio de los bordes
        marginBottom: 10, // Espacio inferior
    },
    picker: {
        height: 40, // Altura del Picker
        paddingHorizontal: 10, // Espacio interno horizontal
    },
});