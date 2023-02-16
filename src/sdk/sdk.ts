import { FineTuning } from "./finetuning";
import { GeneratingImages } from "./generatingimages";
import { ImageEditing } from "./imageediting";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.leapml.dev",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class LeapMLAPI {
  public fineTuning: FineTuning;
  public generatingImages: GeneratingImages;
  public imageEditing: ImageEditing;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.3.3";
  private _genVersion = "1.3.1";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.fineTuning = new FineTuning(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.generatingImages = new GeneratingImages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imageEditing = new ImageEditing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}