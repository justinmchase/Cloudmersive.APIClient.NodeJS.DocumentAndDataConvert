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
    define(['ApiClient', 'model/PdfToPngResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PdfToPngResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ConvertDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfToPngResult);
  }
}(this, function(ApiClient, PdfToPngResult) {
  'use strict';

  /**
   * ConvertDocument service.
   * @module api/ConvertDocumentApi
   * @version 1.2.6
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
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Document to PDF
     * Automatically detect file type and convert it to PDF.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentAutodetectToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
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

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/autodetect/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentCsvToXlsx operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentCsvToXlsxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * CSV to Excel XLSX
     * Convert CSV file to Office Excel XLSX Workbooks file format.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentCsvToXlsxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentCsvToXlsx = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentCsvToXlsx");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/csv/to/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentDocToDocx operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentDocToDocxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Word DOC (97-03) to DOCX
     * Convert/upgrade Office Word (97-2003 Format) Documents (doc) to the modern DOCX format
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentDocToDocxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentDocToDocx = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentDocToDocx");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/doc/to/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentDocToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentDocToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Word DOC (97-03) to PDF
     * Convert Office Word (97-2003 Format) Documents (doc) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentDocToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentDocToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentDocToPdf");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/doc/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentDocxToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentDocxToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Word DOCX to PDF
     * Convert Office Word Documents (docx) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentDocxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
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

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/docx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentPdfToPngArray operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentPdfToPngArrayCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PdfToPngResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PDF to PNG Array
     * Convert PDF document to PNG array, one image per page.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentPdfToPngArrayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PdfToPngResult}
     */
    this.convertDocumentPdfToPngArray = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentPdfToPngArray");
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
      var returnType = PdfToPngResult;

      return this.apiClient.callApi(
        '/convert/pdf/to/png', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentPptToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentPptToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PowerPoint PPT (97-03) to PDF
     * Convert Office PowerPoint (97-2003) Documents (ppt) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentPptToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentPptToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentPptToPdf");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/ppt/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentPptToPptx operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentPptToPptxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PowerPoint PPT (97-03) to PPTX
     * Convert/upgrade Office PowerPoint (97-2003) Documents (ppt) to modern PPTX
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentPptToPptxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentPptToPptx = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentPptToPptx");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/ppt/to/pptx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentPptxToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentPptxToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * PowerPoint PPTX to PDF
     * Convert Office PowerPoint Documents (pptx) to standard PDF
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentPptxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
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

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/pptx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentXlsToPdf operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentXlsToPdfCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLS (97-03) to PDF
     * Convert Office Excel (97-2003) Workbooks (xls) to standard PDF.  Converts all worksheets in the workbook to PDF.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.convertDocumentXlsToPdf = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentXlsToPdf");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/xls/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentXlsToXlsx operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentXlsToXlsxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLS (97-03) to XLSX
     * Convert/upgrade Office Excel (97-2003) Workbooks (xls) to modern XLSX format.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsToXlsxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertDocumentXlsToXlsx = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertDocumentXlsToXlsx");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/xls/to/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertDocumentXlsxToCsv operation.
     * @callback module:api/ConvertDocumentApi~convertDocumentXlsxToCsvCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLSX to CSV
     * Convert Office Excel Workbooks (xlsx) to standard Comma-Separated Values (CSV) format.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsxToCsvCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
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

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

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
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Excel XLSX to PDF
     * Convert Office Excel Workbooks (xlsx) to standard PDF.  Converts all worksheets in the workbook to PDF.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertDocumentApi~convertDocumentXlsxToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
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

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/xlsx/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
