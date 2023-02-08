# @leapml/sdk

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @leapml/sdk
```

### Yarn

```bash
yarn add @leapml/sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### fineTuning

* `modelsControllerCreate` - Create Model
* `modelsControllerFindAll` - List All Models
* `modelsControllerFindOne` - Retrieve a Single Model
* `modelsControllerQueue` - Queue Training Job
* `samplesControllerCreate` - Upload Image Samples
* `samplesControllerFindAll` - List Image Samples
* `samplesControllerFindOne` - Get Image Sample
* `samplesControllerRemove` - Archive Image Sample
* `versionsControllerFindAll` - List All Model Versions
* `versionsControllerFindOne` - Get Model Version

### generatingImages

* `inferencesControllerCreate` - Generate Image
* `inferencesControllerFindAll` - List Inference Jobs
* `inferencesControllerFindOne` - Get Single Inference Job
* `inferencesControllerRemove` - Delete Inference

### imageEditing

* `editControllerCreate` - Edit a photo
* `editControllerFindOne` - Get an edit
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
