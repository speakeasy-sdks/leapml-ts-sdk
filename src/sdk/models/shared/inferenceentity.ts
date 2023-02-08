import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class InferenceEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=images" })
  images: string[];

  @SpeakeasyMetadata({ data: "json, name=modelId" })
  modelId: string[];

  @SpeakeasyMetadata({ data: "json, name=negativePrompt" })
  negativePrompt: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfImages" })
  numberOfImages: number;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=promptStrength" })
  promptStrength: number;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: number;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width: number;
}