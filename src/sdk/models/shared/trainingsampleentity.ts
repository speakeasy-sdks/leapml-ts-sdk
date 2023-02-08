import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TrainingSampleEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}