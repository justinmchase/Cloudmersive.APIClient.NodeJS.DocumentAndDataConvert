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
    define(['cloudmersive.client.convert.invoke/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.HtmlTemplateOperation = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlTemplateOperation model module.
   * @module cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>HtmlTemplateOperation</code>.
   * @alias module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>HtmlTemplateOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation} obj Optional instance to populate.
   * @return {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation} The populated <code>HtmlTemplateOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Action')) {
        obj['Action'] = ApiClient.convertToType(data['Action'], 'Number');
      }
      if (data.hasOwnProperty('MatchAgsint')) {
        obj['MatchAgsint'] = ApiClient.convertToType(data['MatchAgsint'], 'String');
      }
      if (data.hasOwnProperty('ReplaceWith')) {
        obj['ReplaceWith'] = ApiClient.convertToType(data['ReplaceWith'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation.ActionEnum} Action
   */
  exports.prototype['Action'] = undefined;
  /**
   * @member {String} MatchAgsint
   */
  exports.prototype['MatchAgsint'] = undefined;
  /**
   * @member {String} ReplaceWith
   */
  exports.prototype['ReplaceWith'] = undefined;


  /**
   * Allowed values for the <code>Action</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1  };


  return exports;
}));


