"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatahubService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let DATAHUB_CONFIG = {
    DATAHUB_GRAPHQL: 'http://datahub.yc.pbd.ai:9002/api/graphql',
    DATAHUB_COOKIE: 'bid=a0e5e5bd-e74f-463f-a179-0fd7e5d8d59b; \
                     PLAY_SESSION=669be67ce71855799441548a73a0d8a4293d0b89-actor=urn%3Ali%3Acorpuser%3Adatahub; \
                     actor=urn:li:corpuser:datahub'
};
let DatahubService = class DatahubService {
    getDatasetsUrns() {
        var data = JSON.stringify({
            query: `{
              me {
                corpUser {
                  relationships(input: {types: [], direction: INCOMING}) {
                    relationships {
                      entity {
                        urn
                        type
                      }
                    }
                  }
                }
              }
            }`,
            variables: {}
        });
        let config = {
            method: 'post',
            url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
            headers: {
                'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE,
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios_1.default.request(config)
            .then(response => {
            let relationships = response.data.data.me.corpUser.relationships.relationships;
            relationships = relationships.filter(relationship => relationship.entity.type == 'DATASET');
            return relationships.map(relationship => relationship.entity.urn);
        })
            .catch(error => {
            console.log(error);
        });
    }
    getDatasetInfo(urn) {
        var data = JSON.stringify({
            query: `{
              dataset(urn: "${urn}") {
                urn
                name
                properties {
                  description
                }
                schemaMetadata(version: -1) {
                  name
                  fields {
                    fieldPath
                    description
                    type
                  }
                }
              }
            }`,
            variables: {}
        });
        let config = {
            method: 'post',
            url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
            headers: {
                'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE,
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios_1.default.request(config)
            .then(response => {
            return response.data.data.dataset;
        })
            .catch(error => {
            console.log(error);
        });
    }
};
DatahubService = __decorate([
    (0, common_1.Injectable)()
], DatahubService);
exports.DatahubService = DatahubService;
//# sourceMappingURL=datahub.service.js.map