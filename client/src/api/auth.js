import axios from "./axios.js";

// Función para enviar una solicitud de registro
// Recibe un objeto 'user' como parámetro y realiza una solicitud POST a la URL de registro
export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const logoutRequest = (user) => axios.post(`/`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);
