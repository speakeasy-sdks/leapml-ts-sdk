import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class SchemeBearer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}