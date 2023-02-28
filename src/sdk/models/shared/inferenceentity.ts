import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class InferenceEntity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "images" })
  images: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "modelId" })
  modelId: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "negativePrompt" })
  negativePrompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "numberOfImages" })
  numberOfImages: number;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "promptStrength" })
  promptStrength: number;

  @SpeakeasyMetadata()
  @Expose({ name: "seed" })
  seed: number;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: number;

  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps: number;

  @SpeakeasyMetadata()
  @Expose({ name: "width" })
  width: number;
}