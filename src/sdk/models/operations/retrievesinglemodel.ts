import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class RetrieveSingleModelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class RetrieveSingleModelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class RetrieveSingleModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveSingleModelPathParams;

  @SpeakeasyMetadata()
  security: RetrieveSingleModelSecurity;
}

export class RetrieveSingleModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelEntity?: shared.ModelEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}