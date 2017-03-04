'use strict';

const { BookendInterface } = require('screwdriver-build-bookend');
const ARTIFACTS_DIR_SUFFIX = 'ARTIFACTS';

class ArtifactBookend extends BookendInterface {
    /**
     * Constructor for ArtifactBookend
     * @method constructor
     * @param  {Object}    config Configuration
     * @return {ArtifactBookend}
     */
    constructor(storeUrl) {
        super();
        this.storeUrl = storeUrl;
        this.teardownCommands = [
            'cd $SD_ARTIFACTS_DIR',
            'find . -print > manifest.txt',
            'find . -name "*" -type f -exec curl -H "Authorization: Bearer $SD_TOKEN" ' +
            '-H "Content-Type: text/plain" -X ' +
            `PUT ${this.storeUrl}/v1/builds/$SD_BUILD_ID/${ARTIFACTS_DIR_SUFFIX}/{} -T {} \\;`
        ];
    }

    /**
     * Gives the commands needed for setting up Artifact Storage before the build starts.
     * Currently, there is nothing to set up
     * @method getSetupCommand
     * @return {Promise}           Resolves to an empty string
     */
    getSetupCommand() {
        return Promise.resolve('');
    }

    /**
     * Gives the commands needed for storing artifacts after a build completes.
     * @method getTeardownCommand
     * @return {Promise}           Resolves to a string that represents the commmand to execute
     */
    getTeardownCommand() {
        return Promise.resolve(this.teardownCommands.join(' && '));
    }
}

module.exports = ArtifactBookend;
