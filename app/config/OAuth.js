import {environment} from "../environments/environment";

export default {
    grant_type: 'password',
    client_id: environment.oauthClientId,
    client_secret: environment.oauthClientSecret
};
