const constants = require('generator-jhipster/generators/generator-constants');
const ANGULAR_DIR = constants.ANGULAR_DIR;

const files = {
    angularShared: [
        {
            path: ANGULAR_DIR,
            templates: [
                'shared/constants/menu.constants.ts',
                'layouts/search/search.component.ts',
                {
                    file: 'layouts/search/search.component.html',
                    method: 'processHtml'
                },
                {
                    file: 'layouts/search/search.component.scss',
                    method: 'processHtml'
                },
                'layouts/notify/notify.component.ts',
                {
                    file: 'layouts/main/main.component.scss',
                    method: 'processHtml'
                },
                {
                    file: 'admin/logs/logs.component.scss',
                    method: 'processHtml'
                }
            ]
        },
        {
            path: ANGULAR_DIR,
            templates: [
                'shared/constants/pattern.constants.ts',
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
