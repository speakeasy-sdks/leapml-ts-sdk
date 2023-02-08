import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class TrainModelDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}