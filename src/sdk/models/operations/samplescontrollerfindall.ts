import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class SamplesControllerFindAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class SamplesControllerFindAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class SamplesControllerFindAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SamplesControllerFindAllPathParams;

  @SpeakeasyMetadata()
  security: SamplesControllerFindAllSecurity;
}

export class SamplesControllerFindAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TrainingSampleEntity })
  trainingSampleEntities?: shared.TrainingSampleEntity[];
}