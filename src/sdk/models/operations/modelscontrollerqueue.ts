import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ModelsControllerQueuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class ModelsControllerQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class ModelsControllerQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModelsControllerQueuePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.TrainModelDto;

  @SpeakeasyMetadata()
  security: ModelsControllerQueueSecurity;
}

export class ModelsControllerQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelVersionEntity?: shared.ModelVersionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}