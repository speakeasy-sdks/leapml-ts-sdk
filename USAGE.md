<!-- Start SDK Example Usage -->
```typescript
import { LeapMLAPI, withSecurity} from "@leapml/sdk";
import { ModelsControllerCreateRequest, ModelsControllerCreateResponse } from "@leapml/sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new LeapMLAPI();
    
const req: ModelsControllerCreateRequest = {
  security: {
    bearer: {
      authorization: "Bearer YOUR_BEARER_TOKEN_HERE",
    },
  },
  request: {
    subjectIdentifier: "unde",
    subjectKeyword: "deserunt",
    title: "porro",
  },
};

sdk.fineTuning.modelsControllerCreate(req).then((res: ModelsControllerCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->