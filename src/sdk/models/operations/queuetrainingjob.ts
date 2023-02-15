import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class QueueTrainingJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class QueueTrainingJobSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class QueueTrainingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QueueTrainingJobPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TrainModelDto;

  @SpeakeasyMetadata()
  security: QueueTrainingJobSecurity;
}

export class QueueTrainingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelVersionEntity?: shared.ModelVersionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}