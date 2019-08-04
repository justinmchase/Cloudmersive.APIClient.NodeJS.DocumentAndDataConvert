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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.HtmlToPdfRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlToPdfRequest model module.
   * @module model/HtmlToPdfRequest
   * @version 2.0.4
   */

  /**
   * Constructs a new <code>HtmlToPdfRequest</code>.
   * Details of the HTML to PDF request
   * @alias module:model/HtmlToPdfRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HtmlToPdfRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlToPdfRequest} obj Optional instance to populate.
   * @return {module:model/HtmlToPdfRequest} The populated <code>HtmlToPdfRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Html')) {
        obj['Html'] = ApiClient.convertToType(data['Html'], 'String');
      }
      if (data.hasOwnProperty('ExtraLoadingWait')) {
        obj['ExtraLoadingWait'] = ApiClient.convertToType(data['ExtraLoadingWait'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} Html
   */
  exports.prototype['Html'] = undefined;
  /**
   * @member {Number} ExtraLoadingWait
   */
  exports.prototype['ExtraLoadingWait'] = undefined;



  return exports;
}));


