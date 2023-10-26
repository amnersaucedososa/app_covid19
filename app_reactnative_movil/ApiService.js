// functions.js

// import axios from 'axios';
import axios from './Api'; // Importa el módulo axios configurado en la respuesta anterior

export const loadItems = (setItems, setRefreshing) => {
  axios
    .get('/index')
    .then((response) => {
      setItems(response.data);
      setRefreshing(false);
    })
    .catch((error) => {
      console.error('Error al cargar elementos:', error);
      setRefreshing(false);
    });
};

export const handleRefresh = (setRefreshing, loadItems) => {
  setRefreshing(true);
  setTimeout(() => {
    loadItems();
  }, 1000);
};

export const handleAddItem = (nombre, puesto, vacuna, fecha_primera_dosis, estado_vacunacion, setModalVisible, clearForm, loadItems) => {
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

export const handleEditItem = (selectedItem, nombre, puesto, vacuna, fecha_primera_dosis, estado_vacunacion, setModalVisible, clearForm, loadItems) => {
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
      console.log('actualizado con éxito');
      loadItems();
      setModalVisible(false);
      clearForm();
    })
    .catch((error) => {
      console.error('Error al editar elemento:', error);
    });
};

export const handleDeleteItem = (selectedItem, setModalVisible, clearForm, loadItems) => {
  axios
    .delete(`/delete/${selectedItem.id}`)
    .then(() => {
      loadItems();
      setModalVisible(false);
      clearForm();
    })
    .catch((error) => {
      console.error('Error al eliminar elemento:', error);
    });
};
