import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelEntity } from "./modelentity";
import { WeightsEntity } from "./weightsentity";

export enum ModelVersionEntityStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Finished = "finished",
    Failed = "failed"
}

export class ModelVersionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model: ModelEntity;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ModelVersionEntityStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=weights" })
  weights: WeightsEntity;
}