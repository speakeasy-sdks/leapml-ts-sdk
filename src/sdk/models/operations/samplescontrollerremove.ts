import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SamplesControllerRemovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sampleId" })
  sampleId: string;
}

export class SamplesControllerRemoveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class SamplesControllerRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SamplesControllerRemovePathParams;

  @SpeakeasyMetadata()
  security: SamplesControllerRemoveSecurity;
}

export class SamplesControllerRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainingSampleEntity?: shared.TrainingSampleEntity;
}