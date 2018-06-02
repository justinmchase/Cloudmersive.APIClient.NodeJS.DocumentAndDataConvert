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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['com.example.v3client/ApiClient', 'com.example.v3client/com.example.v3client.model/HtmlTemplateApplicationRequest', 'com.example.v3client/com.example.v3client.model/HtmlTemplateApplicationResponse', 'com.example.v3client/com.example.v3client.model/HtmlTemplateOperation', 'com.example.v3client/com.example.v3client.model/HtmlToPdfRequest', 'com.example.v3client/com.example.v3client.model/ScreenshotRequest', 'com.example.v3client/com.example.v3client.api/ConvertDataApi', 'com.example.v3client/com.example.v3client.api/ConvertDocumentApi', 'com.example.v3client/com.example.v3client.api/ConvertImageApi', 'com.example.v3client/com.example.v3client.api/ConvertTemplateApi', 'com.example.v3client/com.example.v3client.api/ConvertWebApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./com.example.v3client.model/HtmlTemplateApplicationRequest'), require('./com.example.v3client.model/HtmlTemplateApplicationResponse'), require('./com.example.v3client.model/HtmlTemplateOperation'), require('./com.example.v3client.model/HtmlToPdfRequest'), require('./com.example.v3client.model/ScreenshotRequest'), require('./com.example.v3client.api/ConvertDataApi'), require('./com.example.v3client.api/ConvertDocumentApi'), require('./com.example.v3client.api/ConvertImageApi'), require('./com.example.v3client.api/ConvertTemplateApi'), require('./com.example.v3client.api/ConvertWebApi'));
  }
}(function(ApiClient, HtmlTemplateApplicationRequest, HtmlTemplateApplicationResponse, HtmlTemplateOperation, HtmlToPdfRequest, ScreenshotRequest, ConvertDataApi, ConvertDocumentApi, ConvertImageApi, ConvertTemplateApi, ConvertWebApi) {
  'use strict';

  /**
   * ERROR_UNKNOWN.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveConvertApiClient = require('com.example.v3client/index'); // See note below*.
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['com.example.v3client/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module com.example.v3client/index
   * @version v1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:com.example.v3client/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The HtmlTemplateApplicationRequest model constructor.
     * @property {module:com.example.v3client/com.example.v3client.model/HtmlTemplateApplicationRequest}
     */
    HtmlTemplateApplicationRequest: HtmlTemplateApplicationRequest,
    /**
     * The HtmlTemplateApplicationResponse model constructor.
     * @property {module:com.example.v3client/com.example.v3client.model/HtmlTemplateApplicationResponse}
     */
    HtmlTemplateApplicationResponse: HtmlTemplateApplicationResponse,
    /**
     * The HtmlTemplateOperation model constructor.
     * @property {module:com.example.v3client/com.example.v3client.model/HtmlTemplateOperation}
     */
    HtmlTemplateOperation: HtmlTemplateOperation,
    /**
     * The HtmlToPdfRequest model constructor.
     * @property {module:com.example.v3client/com.example.v3client.model/HtmlToPdfRequest}
     */
    HtmlToPdfRequest: HtmlToPdfRequest,
    /**
     * The ScreenshotRequest model constructor.
     * @property {module:com.example.v3client/com.example.v3client.model/ScreenshotRequest}
     */
    ScreenshotRequest: ScreenshotRequest,
    /**
     * The ConvertDataApi service constructor.
     * @property {module:com.example.v3client/com.example.v3client.api/ConvertDataApi}
     */
    ConvertDataApi: ConvertDataApi,
    /**
     * The ConvertDocumentApi service constructor.
     * @property {module:com.example.v3client/com.example.v3client.api/ConvertDocumentApi}
     */
    ConvertDocumentApi: ConvertDocumentApi,
    /**
     * The ConvertImageApi service constructor.
     * @property {module:com.example.v3client/com.example.v3client.api/ConvertImageApi}
     */
    ConvertImageApi: ConvertImageApi,
    /**
     * The ConvertTemplateApi service constructor.
     * @property {module:com.example.v3client/com.example.v3client.api/ConvertTemplateApi}
     */
    ConvertTemplateApi: ConvertTemplateApi,
    /**
     * The ConvertWebApi service constructor.
     * @property {module:com.example.v3client/com.example.v3client.api/ConvertWebApi}
     */
    ConvertWebApi: ConvertWebApi
  };

  return exports;
}));
