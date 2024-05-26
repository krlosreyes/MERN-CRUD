import axios from "axios";

// URL base de la API
const API = 'http://localhost:3000/api';

// Función para enviar una solicitud de registro
// Recibe un objeto 'user' como parámetro y realiza una solicitud POST a la URL de registro
export const registerRequest = (user) => axios.post(`${API}/register`, user);
