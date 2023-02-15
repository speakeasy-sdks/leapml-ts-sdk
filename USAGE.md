<!-- Start SDK Example Usage -->
```typescript
import { LeapMLAPI, withSecurity} from "@leapml/sdk";
import { SamplesControllerCreateRequest, SamplesControllerCreateResponse } from "@leapml/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new LeapMLAPI();
    
const req: SamplesControllerCreateRequest = {
  security: {
    bearer: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    modelId: "unde",
  },
  request: {
    files: {
      content: "deserunt".encode(),
      files: "porro",
    },
  },
};

sdk.fineTuning.samplesControllerCreate(req).then((res: SamplesControllerCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->