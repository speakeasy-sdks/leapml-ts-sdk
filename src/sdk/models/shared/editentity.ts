import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class EditEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=editedImageUri" })
  editedImageUri: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=imageGuidanceScale" })
  imageGuidanceScale: number;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=sourceImageUri" })
  sourceImageUri: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: string;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps: number;

  @SpeakeasyMetadata({ data: "json, name=textGuidanceScale" })
  textGuidanceScale: number;
}