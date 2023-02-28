import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InferencesControllerCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class InferencesControllerCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class InferencesControllerCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InferencesControllerCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateInferenceDto;

  @SpeakeasyMetadata()
  security: InferencesControllerCreateSecurity;
}

export class InferencesControllerCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inferenceEntity?: shared.InferenceEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}