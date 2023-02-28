import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SamplesControllerFindOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sampleId" })
  sampleId: string;
}

export class SamplesControllerFindOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class SamplesControllerFindOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SamplesControllerFindOnePathParams;

  @SpeakeasyMetadata()
  security: SamplesControllerFindOneSecurity;
}

export class SamplesControllerFindOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TrainingSampleEntity })
  trainingSampleEntities?: shared.TrainingSampleEntity[];
}