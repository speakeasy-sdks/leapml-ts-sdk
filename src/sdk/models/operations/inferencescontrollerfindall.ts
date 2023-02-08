import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class InferencesControllerFindAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class InferencesControllerFindAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class InferencesControllerFindAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InferencesControllerFindAllPathParams;

  @SpeakeasyMetadata()
  security: InferencesControllerFindAllSecurity;
}

export class InferencesControllerFindAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}