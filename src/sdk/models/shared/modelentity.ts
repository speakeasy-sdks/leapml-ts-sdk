import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class ModelEntity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subjectIdentifier" })
  subjectIdentifier: string;

  @SpeakeasyMetadata()
  @Expose({ name: "subjectKeyword" })
  subjectKeyword: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;
}