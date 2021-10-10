import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
import {randomWords} from 'random-words'
import axios, {AxiosRequestConfig} from 'axios'


let DATAHUB_CONFIG = {
    DATAHUB_GRAPHQL: 'http://datahub.yc.pbd.ai:9002/api/graphql',
    DATAHUB_COOKIE: 'bid=a0e5e5bd-e74f-463f-a179-0fd7e5d8d59b; \
                     PLAY_SESSION=669be67ce71855799441548a73a0d8a4293d0b89-actor=urn%3Ali%3Acorpuser%3Adatahub; \
                     actor=urn:li:corpuser:datahub'
}

@Injectable()
export class DatahubService {
    /**
     * Get list of datasets urns
     * 
     */
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
       
        let config: AxiosRequestConfig = {
            method: 'post',
            url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
            headers: { 
                'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE, 
                'Content-Type': 'application/json'
            },
            data : data
        };
       
        return axios.request(config)
            .then(response => {
                let relationships = response.data.data.me.corpUser.relationships.relationships;
                relationships = relationships.filter(relationship => relationship.entity.type == 'DATASET')
                return relationships.map(relationship => relationship.entity.urn)
            })
            .catch(error => {
                console.log(error);
            });
    }
       
    /**
     * Get Dataset Info
     * 
     * @param {String} urn - Identificator
     * 
     */
    getDatasetInfo(urn: String) {
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
        })
        
        let config: AxiosRequestConfig = {
            method: 'post',
            url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
            headers: { 
                'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE, 
                'Content-Type': 'application/json'
            },
            data: data
        }
        
        return axios.request(config)
            .then(response => {
                return response.data.data.dataset
            })
            .catch(error => {
                console.log(error);
            });
    }
}


