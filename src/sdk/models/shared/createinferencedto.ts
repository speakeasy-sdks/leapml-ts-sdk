import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CreateInferenceDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "negativePrompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "numberOfImages" })
  numberOfImages?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "prompt" })
  prompt: string;

  @SpeakeasyMetadata()
  @Expose({ name: "promptStrength" })
  promptStrength?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "restoreFaces" })
  restoreFaces?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "seed" })
  seed?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "webhookUrl" })
  webhookUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "width" })
  width?: number;
}