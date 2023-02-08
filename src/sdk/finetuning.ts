import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class FineTuning {
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
   * modelsControllerCreate - Create Model
   *
   * This endpoint will create a new model
  **/
  modelsControllerCreate(
    req: operations.ModelsControllerCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModelsControllerCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModelsControllerCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/images/models";

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
        const res: operations.ModelsControllerCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modelsControllerFindAll - List All Models
   *
   * This endpoint will return a list of all models for the workspace.
  **/
  modelsControllerFindAll(
    req: operations.ModelsControllerFindAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModelsControllerFindAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModelsControllerFindAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/api/v1/images/models";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModelsControllerFindAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelEntities = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modelsControllerFindOne - Retrieve a Single Model
   *
   * This endpoint will return a single model.
  **/
  modelsControllerFindOne(
    req: operations.ModelsControllerFindOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModelsControllerFindOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModelsControllerFindOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModelsControllerFindOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modelsControllerQueue - Queue Training Job
   *
   * This endpoint will queue a new model version to be trained. 
   *     
   *     After uploading image samples via the samples endpoint. You can use this endpoint to queue a new model version to be trained.
   *     
   *     Upon completion, you'll be able to query your custom model via the inference endpoint.
  **/
  modelsControllerQueue(
    req: operations.ModelsControllerQueueRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModelsControllerQueueResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModelsControllerQueueRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/queue", req.pathParams);

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
        const res: operations.ModelsControllerQueueResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelVersionEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * samplesControllerCreate - Upload Image Samples
   *
   * Upload one or multiple image sample to a model.
  **/
  samplesControllerCreate(
    req: operations.SamplesControllerCreateRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SamplesControllerCreateResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SamplesControllerCreateRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/samples", req.pathParams);

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
        const res: operations.SamplesControllerCreateResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.trainingSampleEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * samplesControllerFindAll - List Image Samples
   *
   * Given a model ID, returns all image samples for that model.
  **/
  samplesControllerFindAll(
    req: operations.SamplesControllerFindAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SamplesControllerFindAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SamplesControllerFindAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/samples", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SamplesControllerFindAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.trainingSampleEntities = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * samplesControllerFindOne - Get Image Sample
   *
   * Given a model ID and a sample ID, returns the image sample.
  **/
  samplesControllerFindOne(
    req: operations.SamplesControllerFindOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SamplesControllerFindOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SamplesControllerFindOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/samples/{sampleId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SamplesControllerFindOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.trainingSampleEntities = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * samplesControllerRemove - Archive Image Sample
   *
   * Given a model ID and a sample ID, archives the image sample. Archived samples are not used for training.
  **/
  samplesControllerRemove(
    req: operations.SamplesControllerRemoveRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SamplesControllerRemoveResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SamplesControllerRemoveRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/samples/{sampleId}/archive", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.SamplesControllerRemoveResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.trainingSampleEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * versionsControllerFindAll - List All Model Versions
   *
   * This endpoint will return a list of all versions of a model including the status of each model.
  **/
  versionsControllerFindAll(
    req: operations.VersionsControllerFindAllRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VersionsControllerFindAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VersionsControllerFindAllRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/versions", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.VersionsControllerFindAllResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelVersionEntities = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * versionsControllerFindOne - Get Model Version
   *
   * This endpoint will return a version of a model including the status of the model.
  **/
  versionsControllerFindOne(
    req: operations.VersionsControllerFindOneRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.VersionsControllerFindOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.VersionsControllerFindOneRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/images/models/{modelId}/versions/{versionId}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.VersionsControllerFindOneResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modelVersionEntity = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
