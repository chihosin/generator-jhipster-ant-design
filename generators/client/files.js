const constants = require('generator-jhipster/generators/generator-constants');
const ANGULAR_DIR = constants.ANGULAR_DIR;

const files = {
    angularShared: [
        {
            path: ANGULAR_DIR,
            templates: [
                'shared/constants/menu.constants.ts',
            ]
        }
    ],
};

module.exports = {
    writeFiles
};

function writeFiles() {
    this.copy('_dummy.txt', 'dummy.txt');
    this.writeFilesToDisk(files, this, false, 'angular');
}
