import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class VersionsControllerFindOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionId" })
  versionId: string;
}

export class VersionsControllerFindOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class VersionsControllerFindOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VersionsControllerFindOnePathParams;

  @SpeakeasyMetadata()
  security: VersionsControllerFindOneSecurity;
}

export class VersionsControllerFindOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelVersionEntity?: shared.ModelVersionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}