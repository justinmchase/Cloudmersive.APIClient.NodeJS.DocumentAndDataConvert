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
    instance = new CloudmersiveConvertApiClient.DocxTable();
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

  describe('DocxTable', function() {
    it('should create an instance of DocxTable', function() {
      // uncomment below and update the code to test DocxTable
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.DocxTable);
    });

    it('should have the property tableID (base name: "TableID")', function() {
      // uncomment below and update the code to test the property tableID
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "Path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "Width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property widthType (base name: "WidthType")', function() {
      // uncomment below and update the code to test the property widthType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property tableRows (base name: "TableRows")', function() {
      // uncomment below and update the code to test the property tableRows
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property topBorderType (base name: "TopBorderType")', function() {
      // uncomment below and update the code to test the property topBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property topBorderSize (base name: "TopBorderSize")', function() {
      // uncomment below and update the code to test the property topBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property topBorderSpace (base name: "TopBorderSpace")', function() {
      // uncomment below and update the code to test the property topBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property topBorderColor (base name: "TopBorderColor")', function() {
      // uncomment below and update the code to test the property topBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property bottomBorderType (base name: "BottomBorderType")', function() {
      // uncomment below and update the code to test the property bottomBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property bottomBorderSize (base name: "BottomBorderSize")', function() {
      // uncomment below and update the code to test the property bottomBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property bottomBorderSpace (base name: "BottomBorderSpace")', function() {
      // uncomment below and update the code to test the property bottomBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property bottomBorderColor (base name: "BottomBorderColor")', function() {
      // uncomment below and update the code to test the property bottomBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property leftBorderType (base name: "LeftBorderType")', function() {
      // uncomment below and update the code to test the property leftBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property leftBorderSize (base name: "LeftBorderSize")', function() {
      // uncomment below and update the code to test the property leftBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property leftBorderSpace (base name: "LeftBorderSpace")', function() {
      // uncomment below and update the code to test the property leftBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property leftBorderColor (base name: "LeftBorderColor")', function() {
      // uncomment below and update the code to test the property leftBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property rightBorderType (base name: "RightBorderType")', function() {
      // uncomment below and update the code to test the property rightBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property rightBorderSize (base name: "RightBorderSize")', function() {
      // uncomment below and update the code to test the property rightBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property rightBorderSpace (base name: "RightBorderSpace")', function() {
      // uncomment below and update the code to test the property rightBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property rightBorderColor (base name: "RightBorderColor")', function() {
      // uncomment below and update the code to test the property rightBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellHorizontalBorderType (base name: "CellHorizontalBorderType")', function() {
      // uncomment below and update the code to test the property cellHorizontalBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellHorizontalBorderSize (base name: "CellHorizontalBorderSize")', function() {
      // uncomment below and update the code to test the property cellHorizontalBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellHorizontalBorderSpace (base name: "CellHorizontalBorderSpace")', function() {
      // uncomment below and update the code to test the property cellHorizontalBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellHorizontalBorderColor (base name: "CellHorizontalBorderColor")', function() {
      // uncomment below and update the code to test the property cellHorizontalBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellVerticalBorderType (base name: "CellVerticalBorderType")', function() {
      // uncomment below and update the code to test the property cellVerticalBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellVerticalBorderSize (base name: "CellVerticalBorderSize")', function() {
      // uncomment below and update the code to test the property cellVerticalBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellVerticalBorderSpace (base name: "CellVerticalBorderSpace")', function() {
      // uncomment below and update the code to test the property cellVerticalBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property cellVerticalBorderColor (base name: "CellVerticalBorderColor")', function() {
      // uncomment below and update the code to test the property cellVerticalBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property startBorderType (base name: "StartBorderType")', function() {
      // uncomment below and update the code to test the property startBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property startBorderSize (base name: "StartBorderSize")', function() {
      // uncomment below and update the code to test the property startBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property startBorderSpace (base name: "StartBorderSpace")', function() {
      // uncomment below and update the code to test the property startBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property startBorderColor (base name: "StartBorderColor")', function() {
      // uncomment below and update the code to test the property startBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property endBorderType (base name: "EndBorderType")', function() {
      // uncomment below and update the code to test the property endBorderType
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property endBorderSize (base name: "EndBorderSize")', function() {
      // uncomment below and update the code to test the property endBorderSize
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property endBorderSpace (base name: "EndBorderSpace")', function() {
      // uncomment below and update the code to test the property endBorderSpace
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property endBorderColor (base name: "EndBorderColor")', function() {
      // uncomment below and update the code to test the property endBorderColor
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property tableIndentationMode (base name: "TableIndentationMode")', function() {
      // uncomment below and update the code to test the property tableIndentationMode
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

    it('should have the property tableIndentationWidth (base name: "TableIndentationWidth")', function() {
      // uncomment below and update the code to test the property tableIndentationWidth
      //var instance = new CloudmersiveConvertApiClient.DocxTable();
      //expect(instance).to.be();
    });

  });

}));
