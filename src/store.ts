import { writable } from 'svelte/store';

interface AuthData {
    auth: boolean;
    token: string;
}
const loggedin = writable(false);

const store_login = (data: AuthData) => {

}

const clear_login = () => {

};

const ismobile = writable(false);

export { type AuthData, loggedin, store_login, clear_login, ismobile };
