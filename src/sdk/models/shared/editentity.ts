import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class EditEntity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "editedImageUri" })
  editedImageUri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "imageGuidanceScale" })
  imageGuidanceScale: number;

  @SpeakeasyMetadata()
  @Expose({ name: "projectId" })
  projectId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceImageUri" })
  sourceImageUri: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: string;

  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "textGuidanceScale" })
  textGuidanceScale: number;
}