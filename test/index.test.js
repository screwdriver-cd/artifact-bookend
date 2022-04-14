/* Inline JSHint configuration for Mocha globals. */

'use strict';

const { assert } = require('chai');
const fs = require('fs');
const path = require('path');
const ArtifactBookend = require('..');

describe('index test', () => {
    let bookend;

    beforeEach(() => {
        bookend = new ArtifactBookend('https://store.screwdriver.cd');
    });

    it('constructs', () => {
        assert.ok(bookend);
        assert.property(bookend, 'getSetupCommand');
        assert.property(bookend, 'getTeardownCommand');
    });

    it('getTeardownCommand', () => {
        const commandsPath = path.resolve(__dirname, './data/commands.txt');
        const commands = fs.readFileSync(commandsPath, 'utf8').replace('\n', '');

        return bookend.getTeardownCommand().then(result => assert.deepEqual(result, commands));
    });

    it('getSetupCommand', () =>
        bookend.getSetupCommand().then(result => {
            assert.strictEqual(result, '');
        }));
});
