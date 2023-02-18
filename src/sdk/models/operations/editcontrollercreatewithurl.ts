import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class EditControllerCreateWithUrlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageGuidanceScale" })
  imageGuidanceScale?: number;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl: string;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: number;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: number;

  @SpeakeasyMetadata({ data: "json, name=textGuidanceScale" })
  textGuidanceScale?: number;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}

export class EditControllerCreateWithUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class EditControllerCreateWithUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EditControllerCreateWithUrlRequestBody;

  @SpeakeasyMetadata()
  security: EditControllerCreateWithUrlSecurity;
}

export class EditControllerCreateWithUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editEntity?: shared.EditEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}