import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class TrainModelDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "webhookUrl" })
  webhookUrl?: string;
}