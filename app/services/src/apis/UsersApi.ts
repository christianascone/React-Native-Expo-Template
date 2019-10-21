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


import * as runtime from '../runtime';
import {
    InlineResponse200,
    InlineResponse200FromJSON,
    InlineResponse200ToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface ApiUsersExistsEmailGetRequest {
    email: string;
}

export interface ApiUsersIdDeleteRequest {
    id: number;
}

export interface ApiUsersIdGetRequest {
    id: string;
}

export interface ApiUsersIdPutRequest {
    id: number;
    user: User;
}

export interface ApiUsersPostRequest {
    user: User;
}

/**
 * no description
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     */
    async apiUsersExistsEmailGetRaw(requestParameters: ApiUsersExistsEmailGetRequest): Promise<runtime.ApiResponse<InlineResponse200>> {
        if (requestParameters.email === null || requestParameters.email === undefined) {
            throw new runtime.RequiredError('email','Required parameter requestParameters.email was null or undefined when calling apiUsersExistsEmailGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users/exists/{email}`.replace(`{${"email"}}`, encodeURIComponent(String(requestParameters.email))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse200FromJSON(jsonValue));
    }

   /**
    */
    async apiUsersExistsEmailGet(requestParameters: ApiUsersExistsEmailGetRequest): Promise<InlineResponse200> {
        const response = await this.apiUsersExistsEmailGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async apiUsersGetRaw(): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

   /**
    */
    async apiUsersGet(): Promise<Array<User>> {
        const response = await this.apiUsersGetRaw();
        return await response.value();
    }

    /**
     */
    async apiUsersIdDeleteRaw(requestParameters: ApiUsersIdDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUsersIdDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async apiUsersIdDelete(requestParameters: ApiUsersIdDeleteRequest): Promise<void> {
        await this.apiUsersIdDeleteRaw(requestParameters);
    }

    /**
     */
    async apiUsersIdGetRaw(requestParameters: ApiUsersIdGetRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUsersIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

   /**
    */
    async apiUsersIdGet(requestParameters: ApiUsersIdGetRequest): Promise<User> {
        const response = await this.apiUsersIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async apiUsersIdPutRaw(requestParameters: ApiUsersIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiUsersIdPut.');
        }

        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling apiUsersIdPut.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async apiUsersIdPut(requestParameters: ApiUsersIdPutRequest): Promise<void> {
        await this.apiUsersIdPutRaw(requestParameters);
    }

    /**
     */
    async apiUsersPostRaw(requestParameters: ApiUsersPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling apiUsersPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("passport", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        });

        return new runtime.VoidApiResponse(response);
    }

   /**
    */
    async apiUsersPost(requestParameters: ApiUsersPostRequest): Promise<void> {
        await this.apiUsersPostRaw(requestParameters);
    }

}