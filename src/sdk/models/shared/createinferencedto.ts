import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CreateInferenceDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=negativePrompt" })
  negativePrompt?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfImages" })
  numberOfImages?: number;

  @SpeakeasyMetadata({ data: "json, name=prompt" })
  prompt: string;

  @SpeakeasyMetadata({ data: "json, name=promptStrength" })
  promptStrength?: number;

  @SpeakeasyMetadata({ data: "json, name=restoreFaces" })
  restoreFaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seed" })
  seed?: number;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps?: number;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}