import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ModelsControllerFindOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class ModelsControllerFindOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class ModelsControllerFindOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModelsControllerFindOnePathParams;

  @SpeakeasyMetadata()
  security: ModelsControllerFindOneSecurity;
}

export class ModelsControllerFindOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelEntity?: shared.ModelEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}