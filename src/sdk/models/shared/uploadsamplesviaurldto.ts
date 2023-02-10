import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class UploadSamplesViaUrlDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images" })
  images: string[];
}