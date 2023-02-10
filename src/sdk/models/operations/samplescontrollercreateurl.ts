import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class SamplesControllerCreateUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class SamplesControllerCreateUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class SamplesControllerCreateUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SamplesControllerCreateUrlPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UploadSamplesViaUrlDto;

  @SpeakeasyMetadata()
  security: SamplesControllerCreateUrlSecurity;
}

export class SamplesControllerCreateUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainingSampleEntity?: shared.TrainingSampleEntity;
}