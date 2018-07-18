const _ = require('lodash');
const constants = require('generator-jhipster/generators/generator-constants');
const chalk = require('chalk');
const utils = require('generator-jhipster/generators/utils');

/* Constants use throughout */
const CLIENT_MAIN_SRC_DIR = constants.CLIENT_MAIN_SRC_DIR;
const CLIENT_TEST_SRC_DIR = constants.CLIENT_TEST_SRC_DIR;
const ANGULAR_DIR = constants.ANGULAR_DIR;
const CLIENT_NG2_TEMPLATES_DIR = 'angular';

const angularFiles = {
    client: [
        {
            path: ANGULAR_DIR,
            templates: [
                {
                    file: 'entities/entity-management.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.html`
                },
                {
                    file: 'entities/entity-management-detail.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-detail.component.html`
                },
                {
                    file: 'entities/entity-management-update.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-update.component.html`
                },
                {
                    file: 'entities/entity-component-view.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-view.component.html`
                },
                {
                    file: 'entities/entity-component-form.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-form.component.html`
                },
                {
                    file: 'entities/entity-component-list.component.html',
                    method: 'processHtml',
                    template: true,
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-list.component.html`
                },
                {
                    file: 'entities/index.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/index.ts`
                },
                {
                    file: 'entities/entity-management.module.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.module.ts`
                },
                {
                    file: 'entities/entity-management.route.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.route.ts`
                },
                {
                    file: 'entities/entity.model.ts',
                    // using entityModelFileName so that there is no conflict when genertaing microservice entities
                    renameTo: generator => `shared/model/${generator.entityModelFileName}.model.ts`
                },
                {
                    file: 'entities/entity-management.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}.component.ts`
                },
                {
                    file: 'entities/entity-management-update.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-update.component.ts`
                },
                {
                    file: 'entities/entity-management-detail.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-detail.component.ts`
                },
                {
                    file: 'entities/entity-component-form.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-form.component.ts`
                },
                {
                    file: 'entities/entity-component-list.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-list.component.ts`
                },
                {
                    file: 'entities/entity-component-view.component.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/components/${generator.entityFileName}-view.component.ts`
                },
                {
                    file: 'entities/entity.service.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityServiceFileName}.service.ts`
                },
                {
                    file: 'entities/entity-modal.service.ts',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityServiceFileName}-modal.service.ts`
                }
            ]
        }
    ],
    test: [
        {
            path: CLIENT_TEST_SRC_DIR,
            templates: [
                {
                    file: 'spec/app/entities/entity-management-detail.component.spec.ts',
                    renameTo: generator => `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}-detail.component.spec.ts`
                },
                {
                    file: 'spec/app/entities/entity-management-update.component.spec.ts',
                    renameTo: generator => `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}-update.component.spec.ts`
                },
                {
                    file: 'spec/app/entities/entity-management.component.spec.ts',
                    renameTo: generator => `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}.component.spec.ts`
                },
                {
                    file: 'spec/app/entities/entity-management.service.spec.ts',
                    renameTo: generator => `spec/app/entities/${generator.entityFolderName}/${generator.entityFileName}.service.spec.ts`
                }
            ]
        },
        {
            condition: generator => generator.protractorTests,
            path: CLIENT_TEST_SRC_DIR,
            templates: [{
                file: 'e2e/entities/entity-page-object.ts',
                renameTo: generator => `e2e/entities/${generator.entityFolderName}/${generator.entityFileName}.page-object.ts`
            }, {
                file: 'e2e/entities/entity.spec.ts',
                renameTo: generator => `e2e/entities/${generator.entityFolderName}/${generator.entityFileName}.spec.ts`
            }]
        }
    ]
};

module.exports = {
    writeFiles,
    angularFiles,
};

function writeFiles() {
    return {
        writeClientFiles() {
            if (this.skipClient) return;
            if (this.clientFramework === 'angularX') {
                // write client side files for angular 2.x +
                this.writeFilesToDisk(angularFiles, this, false, CLIENT_NG2_TEMPLATES_DIR);
                this.addEntityToModule(
                    this.entityInstance, this.entityClass, this.entityAngularName, this.entityFolderName,
                    this.entityFileName, this.enableTranslation, this.clientFramework, this.microserviceName
                );
            }
            if (this.applicationType === 'gateway' && !_.isUndefined(this.microserviceName)) {
                this.addEntityToWebpack(this.microserviceName, this.clientFramework);
            }
            customAddEntityToMenu.call(this, this.entityStateName, this.enableTranslation, this.clientFramework, this.entityTranslationKeyMenu);
        }
    };
}

function customAddEntityToMenu(routerName, enableTranslation, clientFramework, entityTranslationKeyMenu = _.camelCase(routerName)) {
    let entityMenuPath;
    try {
        if (this.clientFramework === 'angularX') {
            entityMenuPath = `${CLIENT_MAIN_SRC_DIR}app/shared/constants/menu.constants.ts`;
            utils.rewriteFile({
                file: entityMenuPath,
                needle: 'jhipster-needle-add-entity-to-menu',
                splicable: [`{ title: '${_.startCase(routerName)}', link: '${routerName}', hasAnyAuthority: ['ROLE_USER'] },`]
            }, this);
        }
    } catch (e) {
        this.log(`${chalk.yellow('\nUnable to find ') + entityMenuPath + chalk.yellow(' or missing required jhipster-needle. Reference to ') + routerName} ${chalk.yellow('not added to menu.\n')}`);
        this.debug('Error:', e);
    }
}
