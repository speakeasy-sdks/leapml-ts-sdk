import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ListAllModelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer?: shared.SchemeBearer;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer1?: shared.SchemeBearer;
}

export class ListAllModelsRequest extends SpeakeasyBase {
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