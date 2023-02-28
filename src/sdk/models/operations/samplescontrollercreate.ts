import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SamplesControllerCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class SamplesControllerCreateRequestBodyFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=files" })
  files: string;
}

export class SamplesControllerCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  files?: SamplesControllerCreateRequestBodyFiles;
}

export class SamplesControllerCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class SamplesControllerCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SamplesControllerCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SamplesControllerCreateRequestBody;

  @SpeakeasyMetadata()
  security: SamplesControllerCreateSecurity;
}

export class SamplesControllerCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainingSampleEntity?: shared.TrainingSampleEntity;
}