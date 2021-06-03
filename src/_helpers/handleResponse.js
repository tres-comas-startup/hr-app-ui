import {authenticationService} from '../_services';
import HttpStatuses from "@odinrossy/http-utils/httpStatuses";

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (shouldForceLogout(response.status)) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authenticationService.logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

const shouldForceLogout = status => [HttpStatuses.UNAUTHORIZED, HttpStatuses.FORBIDDEN].includes(status);