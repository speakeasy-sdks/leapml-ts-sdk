<!-- Start SDK Example Usage -->
```typescript
import {
  ModelsControllerRemoveRequest,
  ModelsControllerRemoveResponse 
} from "@leapml/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { LeapMLAPI } from "@leapml/sdk";


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