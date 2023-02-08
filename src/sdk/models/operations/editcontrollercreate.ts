import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class EditControllerCreateRequestBodyBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageGuidanceScale" })
  imageGuidanceScale?: number;

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

export class EditControllerCreateRequestBodyFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=files" })
  files: string;
}

export class EditControllerCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body;json=true" })
  body: EditControllerCreateRequestBodyBody;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  files: EditControllerCreateRequestBodyFiles;
}

export class EditControllerCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class EditControllerCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: EditControllerCreateRequestBody;

  @SpeakeasyMetadata()
  security: EditControllerCreateSecurity;
}

export class EditControllerCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editEntity?: shared.EditEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}