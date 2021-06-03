import {authenticationService} from "../_services";
import HttpHeaders from "@odinrossy/http-utils/httpHeaders";

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return {[HttpHeaders.AUTHORIZATION]: `Bearer ${currentUser.token}`};
    } else {
        return {};
    }
}