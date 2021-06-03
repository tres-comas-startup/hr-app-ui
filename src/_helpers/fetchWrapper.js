import HttpHeaders from "@odinrossy/http-utils/httpHeaders";
import MediaTypes from "@odinrossy/http-utils/mediaTypes";
import {authHeader} from "./authHeader";
import config from "config";

/**
 * A wrapper that appends default headers like "Content-type", "Authorization" to every request
 * @param input {RequestInfo}
 * @param init {RequestInit}
 * @returns {Promise<Response>}
 */
const fetchWrapper = (input, init = {}) => {

    const defaultHeaders = {
        [HttpHeaders.CONTENT_TYPE]: MediaTypes.APPLICATION_JSON,
        ...authHeader()
    }

    return fetch(input, {
        ...init,
        headers: init.hasOwnProperty('headers') ? {...init.headers, ...defaultHeaders} : defaultHeaders,
        mode: config.get('Api.fetchMode')
    });
}

export default fetchWrapper;