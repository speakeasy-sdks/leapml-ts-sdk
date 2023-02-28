import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InferencesControllerFindOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inferenceId" })
  inferenceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class InferencesControllerFindOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class InferencesControllerFindOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InferencesControllerFindOnePathParams;

  @SpeakeasyMetadata()
  security: InferencesControllerFindOneSecurity;
}

export class InferencesControllerFindOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inferenceEntity?: shared.InferenceEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}