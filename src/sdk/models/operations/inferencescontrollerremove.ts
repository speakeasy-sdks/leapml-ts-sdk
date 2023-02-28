import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InferencesControllerRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=inferenceId" })
  inferenceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class InferencesControllerRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class InferencesControllerRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InferencesControllerRemovePathParams;

  @SpeakeasyMetadata()
  security: InferencesControllerRemoveSecurity;
}

export class InferencesControllerRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}