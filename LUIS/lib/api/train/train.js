/**
 * Copyright(c) Microsoft Corporation.All rights reserved.
 * Licensed under the MIT License.
 */
const {ServiceBase} = require('../serviceBase');
class Train extends ServiceBase {
    constructor() {
        super('/apps/{appId}/versions/{versionId}/train');
    }

    /**
    * Gets the training status of all models (intents and entities) for the specified LUIS app. You must call the train API to train the LUIS app before you call this API to get training status. "appID" specifies the LUIS app ID. "versionId" specifies the version number of the LUIS app. For example, "0.1".
    */
    GetStatus(params) {
        return this.createRequest('', params, 'get');
    }
    /**
    * Sends a training request for a version of a specified LUIS app. This POST request initiates a request asynchronously. To determine whether the training request is successful, submit a GET request to get training status. Note: The application version is not fully trained unless all the models (intents and entities) are trained successfully or are up to date. To verify training success, get the training status at least once after training is complete.
    */
    TrainVersion(params) {
        return this.createRequest('', params, 'post');
    }
}
module.exports = Train;
