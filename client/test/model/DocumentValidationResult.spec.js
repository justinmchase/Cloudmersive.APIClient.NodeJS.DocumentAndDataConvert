/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
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
    instance = new CloudmersiveConvertApiClient.DocumentValidationResult();
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

  describe('DocumentValidationResult', function() {
    it('should create an instance of DocumentValidationResult', function() {
      // uncomment below and update the code to test DocumentValidationResult
      //var instane = new CloudmersiveConvertApiClient.DocumentValidationResult();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.DocumentValidationResult);
    });

    it('should have the property documentIsValid (base name: "DocumentIsValid")', function() {
      // uncomment below and update the code to test the property documentIsValid
      //var instane = new CloudmersiveConvertApiClient.DocumentValidationResult();
      //expect(instance).to.be();
    });

    it('should have the property errorCount (base name: "ErrorCount")', function() {
      // uncomment below and update the code to test the property errorCount
      //var instane = new CloudmersiveConvertApiClient.DocumentValidationResult();
      //expect(instance).to.be();
    });

    it('should have the property warningCount (base name: "WarningCount")', function() {
      // uncomment below and update the code to test the property warningCount
      //var instane = new CloudmersiveConvertApiClient.DocumentValidationResult();
      //expect(instance).to.be();
    });

    it('should have the property errorsAndWarnings (base name: "ErrorsAndWarnings")', function() {
      // uncomment below and update the code to test the property errorsAndWarnings
      //var instane = new CloudmersiveConvertApiClient.DocumentValidationResult();
      //expect(instance).to.be();
    });

  });

}));
