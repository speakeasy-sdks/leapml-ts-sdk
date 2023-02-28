import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class GeneratingImages {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * inferencesControllerCreate - Generate Image
   *
   * This endpoint will generate a new inference for a particular model.
  **/
  inferencesControllerCreate(
    req: operations.InferencesControllerCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InferencesControllerCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InferencesControllerCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/inferences", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InferencesControllerCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.inferenceEntity = plainToInstance(
                shared.InferenceEntity,
                httpRes?.data as shared.InferenceEntity,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * inferencesControllerFindAll - List Inference Jobs
   *
   * Retrieve all inferences for a specific model
  **/
  inferencesControllerFindAll(
    req: operations.InferencesControllerFindAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InferencesControllerFindAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InferencesControllerFindAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/inferences", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InferencesControllerFindAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * inferencesControllerFindOne - Get Single Inference Job
   *
   * This endpoint will retrieve a specific inference for a particular model.
  **/
  inferencesControllerFindOne(
    req: operations.InferencesControllerFindOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InferencesControllerFindOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InferencesControllerFindOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/inferences/{inferenceId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InferencesControllerFindOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.inferenceEntity = plainToInstance(
                shared.InferenceEntity,
                httpRes?.data as shared.InferenceEntity,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * inferencesControllerRemove - Delete Inference
  **/
  inferencesControllerRemove(
    req: operations.InferencesControllerRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InferencesControllerRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InferencesControllerRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/inferences/{inferenceId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InferencesControllerRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
