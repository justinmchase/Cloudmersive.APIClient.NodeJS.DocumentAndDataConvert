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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveConvertApiClient);
  }
}(this, function(expect, CloudmersiveConvertApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveConvertApiClient.DocxTableCell();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocxTableCell', function() {
    it('should create an instance of DocxTableCell', function() {
      // uncomment below and update the code to test DocxTableCell
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.DocxTableCell);
    });

    it('should have the property cellIndex (base name: "CellIndex")', function() {
      // uncomment below and update the code to test the property cellIndex
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "Path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property paragraphs (base name: "Paragraphs")', function() {
      // uncomment below and update the code to test the property paragraphs
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property cellShadingColor (base name: "CellShadingColor")', function() {
      // uncomment below and update the code to test the property cellShadingColor
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property cellShadingFill (base name: "CellShadingFill")', function() {
      // uncomment below and update the code to test the property cellShadingFill
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property cellShadingPattern (base name: "CellShadingPattern")', function() {
      // uncomment below and update the code to test the property cellShadingPattern
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property cellWidthMode (base name: "CellWidthMode")', function() {
      // uncomment below and update the code to test the property cellWidthMode
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

    it('should have the property cellWidth (base name: "CellWidth")', function() {
      // uncomment below and update the code to test the property cellWidth
      //var instane = new CloudmersiveConvertApiClient.DocxTableCell();
      //expect(instance).to.be();
    });

  });

}));
