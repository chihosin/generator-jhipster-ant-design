const constants = require('generator-jhipster/generators/generator-constants');
const ANGULAR_DIR = constants.ANGULAR_DIR;

const files = {
    angularAdmin: [
        {
            path: ANGULAR_DIR,
            templates: [
                {
                    file: 'admin/logs/logs.scss',
                    method: 'processHtml'
                }
            ]
        }
    ],
    angularShared: [
        {
            path: ANGULAR_DIR,
            templates: [
                'shared/constants/menu.constants.ts',
                'shared/constants/pattern.constants.ts',
            ]
        }
    ],
    angularLayouts: [
        {
            path: ANGULAR_DIR,
            templates: [
                {
                    file: 'layouts/search/search.component.html',
                    method: 'processHtml'
                },
                {
                    file: 'layouts/search/search.scss',
                    method: 'processHtml'
                },
                {
                    file: 'layouts/main/main.scss',
                    method: 'processHtml'
                },
                'layouts/search/search.component.ts',
                'layouts/notify/notify.component.ts',
            ]
        }
    ],
};

module.exports = {
    writeFiles
};

function writeFiles() {
    this.writeFilesToDisk(files, this, false, 'angular');
}
