import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class EditControllerFindOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=editId" })
  editId: string;
}

export class EditControllerFindOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer: shared.SchemeBearer;
}

export class EditControllerFindOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditControllerFindOnePathParams;

  @SpeakeasyMetadata()
  security: EditControllerFindOneSecurity;
}

export class EditControllerFindOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editEntity?: shared.EditEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}