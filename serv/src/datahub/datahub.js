/**
 * Module for DataHub interaction
 * 
 * Docs: http://datahub.yc.pbd.ai:9002/api/graphiql
 * 
 */

var axios = require('axios');

let DATAHUB_CONFIG = {
  DATAHUB_GRAPHQL: 'http://datahub.yc.pbd.ai:9002/api/graphql',
  DATAHUB_COOKIE: 'bid=a0e5e5bd-e74f-463f-a179-0fd7e5d8d59b; \
                   PLAY_SESSION=669be67ce71855799441548a73a0d8a4293d0b89-actor=urn%3Ali%3Acorpuser%3Adatahub; \
                   actor=urn:li:corpuser:datahub'
}
 
 /**
   * Get list of datasets urns
   * 
   * @returns {Array<String>}
   */
 function getDatasetsUrns() {
   var data = JSON.stringify({
     query: `{
     me {
       corpUser {
         urn
         username
         relationships(input: {types: [], direction: INCOMING}) {
           total
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
 
   var config = {
     method: 'post',
     url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
     headers: { 
       'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE, 
       'Content-Type': 'application/json'
     },
     data : data
   };
 
   return axios(config)
   .then(response => {
     relationships = response.data.data.me.corpUser.relationships.relationships;
     relationships = relationships.filter(relationship => relationship.entity.type == 'DATASET')
     dataset_urns = relationships.map(relationship => relationship.entity.urn)
     return dataset_urns;
   })
   .catch(error => {
     console.log(error);
   });
 }
 
 /**
   * Get Dataset Info
   * 
   * @param {String} urn - Identificator
   * @returns {Array<Object>}
   */
 function getDatasetInfo(urn) {
   var data = JSON.stringify({
     query: `{
     dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)") {
       urn
       name
       properties {
         description
         customProperties {
           key
           value
         }
         externalUrl
       }
       schemaMetadata(version: -1) {
         name
         fields {
           fieldPath
           jsonPath
         }
       }
     }
   }`,
     variables: {}
   });
   
   var config = {
     method: 'post',
     url: DATAHUB_CONFIG.DATAHUB_GRAPHQL,
     headers: { 
       'Cookie': DATAHUB_CONFIG.DATAHUB_COOKIE, 
       'Content-Type': 'application/json'
     },
     data : data
   };
   
   return axios(config)
   .then(response => {
     dataset = response.data.data.dataset;
     return dataset
   })
   .catch(error => {
     console.log(error);
   });
   
 }
 
 /*
 getDatasetsUrns().then(res => console.log(res))
 getDatasetInfo("urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)").then(res => console.log(res))
 */
 
module.export.getDatasetsUrns = getDatasetsUrns
module.export.getDatasetInfo = getDatasetInfo
