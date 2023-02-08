import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class ModelEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=subjectIdentifier" })
  subjectIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=subjectKeyword" })
  subjectKeyword: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}