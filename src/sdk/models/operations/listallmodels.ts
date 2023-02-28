import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class ListAllModelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnInObject" })
  returnInObject?: boolean;
}

export class ListAllModelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer?: shared.SchemeBearer;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer1?: shared.SchemeBearer;
}

export class ListAllModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAllModelsQueryParams;

  @SpeakeasyMetadata()
  security: ListAllModelsSecurity;
}

export class ListAllModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ModelEntity })
  modelEntities?: shared.ModelEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}