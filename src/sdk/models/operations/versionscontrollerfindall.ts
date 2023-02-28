import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class VersionsControllerFindAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class VersionsControllerFindAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class VersionsControllerFindAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VersionsControllerFindAllPathParams;

  @SpeakeasyMetadata()
  security: VersionsControllerFindAllSecurity;
}

export class VersionsControllerFindAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ModelVersionEntity })
  modelVersionEntities?: shared.ModelVersionEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}