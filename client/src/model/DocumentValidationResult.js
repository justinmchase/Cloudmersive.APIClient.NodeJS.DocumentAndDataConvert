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
    define(['ApiClient', 'model/DocumentValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocumentValidationResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocumentValidationError);
  }
}(this, function(ApiClient, DocumentValidationError) {
  'use strict';




  /**
   * The DocumentValidationResult model module.
   * @module model/DocumentValidationResult
   * @version 1.2.8
   */

  /**
   * Constructs a new <code>DocumentValidationResult</code>.
   * Document validation result
   * @alias module:model/DocumentValidationResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DocumentValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentValidationResult} obj Optional instance to populate.
   * @return {module:model/DocumentValidationResult} The populated <code>DocumentValidationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DocumentIsValid')) {
        obj['DocumentIsValid'] = ApiClient.convertToType(data['DocumentIsValid'], 'Boolean');
      }
      if (data.hasOwnProperty('ErrorCount')) {
        obj['ErrorCount'] = ApiClient.convertToType(data['ErrorCount'], 'Number');
      }
      if (data.hasOwnProperty('WarningCount')) {
        obj['WarningCount'] = ApiClient.convertToType(data['WarningCount'], 'Number');
      }
      if (data.hasOwnProperty('ErrorsAndWarnings')) {
        obj['ErrorsAndWarnings'] = ApiClient.convertToType(data['ErrorsAndWarnings'], [DocumentValidationError]);
      }
    }
    return obj;
  }

  /**
   * True if the document is valid and has no errors, false otherwise
   * @member {Boolean} DocumentIsValid
   */
  exports.prototype['DocumentIsValid'] = undefined;
  /**
   * Number of validation errors found in the document
   * @member {Number} ErrorCount
   */
  exports.prototype['ErrorCount'] = undefined;
  /**
   * Number of validation warnings found in the document
   * @member {Number} WarningCount
   */
  exports.prototype['WarningCount'] = undefined;
  /**
   * Details of errors and warnings found
   * @member {Array.<module:model/DocumentValidationError>} ErrorsAndWarnings
   */
  exports.prototype['ErrorsAndWarnings'] = undefined;



  return exports;
}));


