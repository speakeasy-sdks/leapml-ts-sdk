<!-- Start SDK Example Usage -->
```typescript
import { LeapMLAPI, withSecurity} from "@leapml/sdk";
import { ModelsControllerRemoveRequest, ModelsControllerRemoveResponse } from "@leapml/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new LeapMLAPI();
    
const req: ModelsControllerRemoveRequest = {
  security: {
    bearer: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  pathParams: {
    modelId: "unde",
  },
};

sdk.fineTuning.modelsControllerRemove(req).then((res: ModelsControllerRemoveResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->