import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ModelEntity } from "./modelentity";
import { WeightsEntity } from "./weightsentity";
import { Expose, Transform, Type } from "class-transformer";

export enum ModelVersionEntityStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Finished = "finished",
    Failed = "failed"
}

export class ModelVersionEntity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  @Type(() => ModelEntity)
  model: ModelEntity;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: ModelVersionEntityStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "weights" })
  @Type(() => WeightsEntity)
  weights: WeightsEntity;
}