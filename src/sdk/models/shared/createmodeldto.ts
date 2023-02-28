import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateModelDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "subjectIdentifier" })
  subjectIdentifier?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subjectKeyword" })
  subjectKeyword: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}