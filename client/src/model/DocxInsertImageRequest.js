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
    root.CloudmersiveConvertApiClient.DocxInsertImageRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxInsertImageRequest model module.
   * @module model/DocxInsertImageRequest
   * @version 1.2.3
   */

  /**
   * Constructs a new <code>DocxInsertImageRequest</code>.
   * Input to set-footer command
   * @alias module:model/DocxInsertImageRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DocxInsertImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxInsertImageRequest} obj Optional instance to populate.
   * @return {module:model/DocxInsertImageRequest} The populated <code>DocxInsertImageRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InputDocumentFileBytes')) {
        obj['InputDocumentFileBytes'] = ApiClient.convertToType(data['InputDocumentFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('InputDocumentFileUrl')) {
        obj['InputDocumentFileUrl'] = ApiClient.convertToType(data['InputDocumentFileUrl'], 'String');
      }
      if (data.hasOwnProperty('InputImageFileBytes')) {
        obj['InputImageFileBytes'] = ApiClient.convertToType(data['InputImageFileBytes'], 'Blob');
      }
      if (data.hasOwnProperty('InputImageFileUrl')) {
        obj['InputImageFileUrl'] = ApiClient.convertToType(data['InputImageFileUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageWidth')) {
        obj['ImageWidth'] = ApiClient.convertToType(data['ImageWidth'], 'Number');
      }
      if (data.hasOwnProperty('ImageHeight')) {
        obj['ImageHeight'] = ApiClient.convertToType(data['ImageHeight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Optional: Bytes of the input file to operate on
   * @member {Blob} InputDocumentFileBytes
   */
  exports.prototype['InputDocumentFileBytes'] = undefined;
  /**
   * Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
   * @member {String} InputDocumentFileUrl
   */
  exports.prototype['InputDocumentFileUrl'] = undefined;
  /**
   * Optional: Bytes of the input image file to operate on
   * @member {Blob} InputImageFileBytes
   */
  exports.prototype['InputImageFileBytes'] = undefined;
  /**
   * Optional: URL of an image file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
   * @member {String} InputImageFileUrl
   */
  exports.prototype['InputImageFileUrl'] = undefined;
  /**
   * Width in points of the image, set to 0 for default
   * @member {Number} ImageWidth
   */
  exports.prototype['ImageWidth'] = undefined;
  /**
   * Height in point of the image, set to 0 for default
   * @member {Number} ImageHeight
   */
  exports.prototype['ImageHeight'] = undefined;



  return exports;
}));


