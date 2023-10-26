import axios from 'axios';


const ipPublica = "192.168.0.20";
const puerto = 3000; 

const apiEmpleado = axios.create({
  baseURL: `http:/${ipPublica}:${puerto}/api/empleado`, // Reemplaza con la URL de tu servidor
});

export default apiEmpleado;
