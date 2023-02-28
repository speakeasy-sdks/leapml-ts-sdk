import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class InferencesControllerFindAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}

export class InferencesControllerFindAllQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFinished" })
  onlyFinished?: boolean;
}

export class InferencesControllerFindAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class InferencesControllerFindAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InferencesControllerFindAllPathParams;

  @SpeakeasyMetadata()
  queryParams: InferencesControllerFindAllQueryParams;

  @SpeakeasyMetadata()
  security: InferencesControllerFindAllSecurity;
}

export class InferencesControllerFindAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}