import axios from "axios";

export class UserService {
    static serverURL = `http://127.0.0.1:9000/api`;

    static getAllUsers() {
        let dataURL = `${this.serverURL}/users`
        return axios.get(dataURL);
    }

    static getUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.get(dataURL);
    }

    static createUser(user) {
        let dataURL = `${this.serverURL}/users/`
        return axios.post(dataURL, user);
    }

    static editUser(user, userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.put(dataURL, user);
    }

    static deleteUser(userId) {
        let dataURL = `${this.serverURL}/users/${userId}`
        return axios.delete(dataURL);
    }
}