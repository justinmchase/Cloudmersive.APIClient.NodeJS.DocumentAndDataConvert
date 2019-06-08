/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DocxParagraph'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxParagraph'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxTableCell = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph);
  }
}(this, function(ApiClient, DocxParagraph) {
  'use strict';




  /**
   * The DocxTableCell model module.
   * @module model/DocxTableCell
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>DocxTableCell</code>.
   * A cell in a Word Document (DOCX) file
   * @alias module:model/DocxTableCell
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>DocxTableCell</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTableCell} obj Optional instance to populate.
   * @return {module:model/DocxTableCell} The populated <code>DocxTableCell</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CellIndex')) {
        obj['CellIndex'] = ApiClient.convertToType(data['CellIndex'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Paragraphs')) {
        obj['Paragraphs'] = ApiClient.convertToType(data['Paragraphs'], [DocxParagraph]);
      }
      if (data.hasOwnProperty('CellShadingColor')) {
        obj['CellShadingColor'] = ApiClient.convertToType(data['CellShadingColor'], 'String');
      }
      if (data.hasOwnProperty('CellShadingFill')) {
        obj['CellShadingFill'] = ApiClient.convertToType(data['CellShadingFill'], 'String');
      }
      if (data.hasOwnProperty('CellShadingPattern')) {
        obj['CellShadingPattern'] = ApiClient.convertToType(data['CellShadingPattern'], 'String');
      }
      if (data.hasOwnProperty('CellWidthMode')) {
        obj['CellWidthMode'] = ApiClient.convertToType(data['CellWidthMode'], 'String');
      }
      if (data.hasOwnProperty('CellWidth')) {
        obj['CellWidth'] = ApiClient.convertToType(data['CellWidth'], 'String');
      }
    }
    return obj;
  }

  /**
   * The index of the cell, 0-based
   * @member {Number} CellIndex
   */
  exports.prototype['CellIndex'] = undefined;
  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Paragraphs inside the cell; this is where the contents of the cell are stored
   * @member {Array.<module:model/DocxParagraph>} Paragraphs
   */
  exports.prototype['Paragraphs'] = undefined;
  /**
   * Color of the cell shading
   * @member {String} CellShadingColor
   */
  exports.prototype['CellShadingColor'] = undefined;
  /**
   * Fill of the cell shading
   * @member {String} CellShadingFill
   */
  exports.prototype['CellShadingFill'] = undefined;
  /**
   * Pattern of the cell shading
   * @member {String} CellShadingPattern
   */
  exports.prototype['CellShadingPattern'] = undefined;
  /**
   * Width mode of the cell; can be auto (for automatic) or manual
   * @member {String} CellWidthMode
   */
  exports.prototype['CellWidthMode'] = undefined;
  /**
   * Width of the cell
   * @member {String} CellWidth
   */
  exports.prototype['CellWidth'] = undefined;



  return exports;
}));


