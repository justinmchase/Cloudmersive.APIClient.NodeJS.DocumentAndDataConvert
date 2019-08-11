/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DocumentValidationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DocumentValidationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ValidateDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocumentValidationResult);
  }
}(this, function(ApiClient, DocumentValidationResult) {
  'use strict';

  /**
   * ValidateDocument service.
   * @module api/ValidateDocumentApi
   * @version 2.0.5
   */

  /**
   * Constructs a new ValidateDocumentApi. 
   * @alias module:api/ValidateDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the validateDocumentDocxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentDocxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Word document (DOCX)
     * Validate a Word document (DOCX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentDocxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentDocxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentDocxValidation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentPptxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentPptxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a PowerPoint presentation (PPTX)
     * Validate a PowerPoint presentation (PPTX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentPptxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentPptxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentPptxValidation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/pptx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateDocumentXlsxValidation operation.
     * @callback module:api/ValidateDocumentApi~validateDocumentXlsxValidationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DocumentValidationResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate a Excel document (XLSX)
     * Validate a Excel document (XLSX); if the document is not valid, identifies the errors in the document
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ValidateDocumentApi~validateDocumentXlsxValidationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DocumentValidationResult}
     */
    this.validateDocumentXlsxValidation = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling validateDocumentXlsxValidation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = DocumentValidationResult;

      return this.apiClient.callApi(
        '/convert/validate/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
