import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class ModelsControllerFindAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer?: shared.SchemeBearer;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer1?: shared.SchemeBearer;
}

export class ModelsControllerFindAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ModelsControllerFindAllSecurity;
}

export class ModelsControllerFindAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ModelEntity })
  modelEntities?: shared.ModelEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}