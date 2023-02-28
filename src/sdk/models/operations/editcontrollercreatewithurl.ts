import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Expose, Type } from "class-transformer";


export class EditControllerCreateWithUrlRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "imageGuidanceScale" })
  imageGuidanceScale?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "imageUrl" })
  imageUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "seed" })
  seed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "textGuidanceScale" })
  textGuidanceScale?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "webhookUrl" })
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