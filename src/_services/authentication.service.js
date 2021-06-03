import {BehaviorSubject} from 'rxjs';

import config from 'config';
import {handleResponse} from '../_helpers/';
import {LOCAL_STORAGE_CURRENT_USER_KEY} from "../config/constants";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(LOCAL_STORAGE_CURRENT_USER_KEY)));

/**
 *
 * @param loginRequest {LoginRequest}
 * @returns {Promise<Response>}
 */
const login = (loginRequest) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginRequest)
    };

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(LOCAL_STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem(LOCAL_STORAGE_CURRENT_USER_KEY);
    currentUserSubject.next(null);
}

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};
