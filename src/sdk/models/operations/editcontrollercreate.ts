import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class EditControllerCreateRequestBodyFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=files" })
  files: string;
}

export class EditControllerCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  files: EditControllerCreateRequestBodyFiles;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageGuidanceScale" })
  imageGuidanceScale?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=seed" })
  seed?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=steps" })
  steps?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=textGuidanceScale" })
  textGuidanceScale?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=webhookUrl" })
  webhookUrl?: string;
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