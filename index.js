'use strict';

const fs = require('fs');
const path = require('path');
const { BookendInterface } = require('screwdriver-build-bookend');

const ARTIFACTS_DIR_SUFFIX = 'ARTIFACTS';
const COMMANDS = fs.readFileSync(path.join(__dirname, 'commands.txt'), 'utf8').trim();

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
        this.teardownCommands = COMMANDS
            .replace(new RegExp('\\$ARTIFACTS_DIR_SUFFIX', 'g'), ARTIFACTS_DIR_SUFFIX)
            .replace(new RegExp('\\$STORE_URL', 'g'), storeUrl)
            .split('\n');
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
