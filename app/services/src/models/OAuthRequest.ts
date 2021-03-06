// tslint:disable
/**
 * Backend API
 * API Documentation for Backend Project
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OAuthRequest
 */
export interface OAuthRequest {
    /**
     * 
     * @type {string}
     * @memberof OAuthRequest
     */
    grantType?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthRequest
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthRequest
     */
    clientId?: string;
    /**
     * 
     * @type {string}
     * @memberof OAuthRequest
     */
    clientSecret?: string;
}

export function OAuthRequestFromJSON(json: any): OAuthRequest {
    return OAuthRequestFromJSONTyped(json, false);
}

export function OAuthRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuthRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'grantType': !exists(json, 'grant_type') ? undefined : json['grant_type'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'clientId': !exists(json, 'client_id') ? undefined : json['client_id'],
        'clientSecret': !exists(json, 'client_secret') ? undefined : json['client_secret'],
    };
}

export function OAuthRequestToJSON(value?: OAuthRequest): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'grant_type': value.grantType,
        'username': value.username,
        'password': value.password,
        'client_id': value.clientId,
        'client_secret': value.clientSecret,
    };
}


