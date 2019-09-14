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
import {
    UserTokenOs,
    UserTokenOsFromJSON,
    UserTokenOsFromJSONTyped,
    UserTokenOsToJSON,
} from './';

/**
 * 
 * @export
 * @interface UserToken
 */
export interface UserToken {
    /**
     * 
     * @type {number}
     * @memberof UserToken
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserToken
     */
    token?: string;
    /**
     * 
     * @type {UserTokenOs}
     * @memberof UserToken
     */
    os?: UserTokenOs;
}

export function UserTokenFromJSON(json: any): UserToken {
    return UserTokenFromJSONTyped(json, false);
}

export function UserTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'os': !exists(json, 'os') ? undefined : UserTokenOsFromJSON(json['os']),
    };
}

export function UserTokenToJSON(value?: UserToken): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'token': value.token,
        'os': UserTokenOsToJSON(value.os),
    };
}


