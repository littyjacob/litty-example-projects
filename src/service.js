
import serviceEndpoints from "./config/serviceEndpoints";
import axios from "axios";

const baseUrl = "http://192.168.1.60:5001";
const API_ROUTE = `${baseUrl}`;

const authenticator = axios.create({
    baseURL: API_ROUTE,
    timeout: 20000
  });

export const SignIn = payload =>
    authenticator.post(serviceEndpoints.userEndpoints.login, payload);

export const addUser = payload =>
    authenticator.post(serviceEndpoints.userEndpoints.addUser, payload);