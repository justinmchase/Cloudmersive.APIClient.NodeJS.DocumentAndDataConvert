/**
 * convertapi
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Convertapi) {
      root.Convertapi = {};
    }
    root.Convertapi.ConvertDocumentApi = factory(root.Convertapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ConvertDocument service.
   * @module api/ConvertDocumentApi
   * @version v1
   */

  /**
   * Constructs a new ConvertDocumentApi. 
   * @alias module:api/ConvertDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertDocumentAutodetectToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentAutodetectToPdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Document to PDF
     * Automatically detect file type and convert it to PDF.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentAutodetectToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.convertDocumentAutodetectToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentAutodetectToPdf");
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

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/pdf'];
      var returnType = File;

      return this.apiClient.callApi(
        '/convert/autodetect/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentDocxToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentDocxToPdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Word DOCX to PDF
     * Convert Office Word Documents (docx) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentDocxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.convertDocumentDocxToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentDocxToPdf");
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

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/pdf'];
      var returnType = File;

      return this.apiClient.callApi(
        '/convert/docx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentPptxToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentPptxToPdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PowerPoint PPTX to PDF
     * Convert Office PowerPoint Documents (pptx) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentPptxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.convertDocumentPptxToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentPptxToPdf");
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

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/pdf'];
      var returnType = File;

      return this.apiClient.callApi(
        '/convert/pptx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentXlsxToCsv operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentXlsxToCsvCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLSX to CSV
     * Convert Office Excel Workbooks (xlsx) to standard Comma-Separated Values (CSV) format.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsxToCsvCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.convertDocumentXlsxToCsv = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentXlsxToCsv");
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

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/csv'];
      var returnType = File;

      return this.apiClient.callApi(
        '/convert/xlsx/to/csv', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentXlsxToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentXlsxToPdfCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLSX to PDF
     * Convert Office Excel Workbooks (xlsx) to standard PDF.  Converts all worksheets in the workbook to PDF.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.convertDocumentXlsxToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentXlsxToPdf");
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

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/pdf'];
      var returnType = File;

      return this.apiClient.callApi(
        '/convert/xlsx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
