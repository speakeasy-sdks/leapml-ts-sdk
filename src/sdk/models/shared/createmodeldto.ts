import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateModelDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subjectIdentifier" })
  subjectIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectKeyword" })
  subjectKeyword: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}