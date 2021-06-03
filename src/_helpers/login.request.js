/**
 * Creates LoginRequest Object
 * @param username {String}
 * @param password {String}
 * @constructor
 */
const LoginRequest = (username, password) => Object.freeze({username, password});