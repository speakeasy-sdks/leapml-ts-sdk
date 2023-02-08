import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class WeightsEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}