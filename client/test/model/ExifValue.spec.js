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
    instance = new CloudmersiveConvertApiClient.ExifValue();
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

  describe('ExifValue', function() {
    it('should create an instance of ExifValue', function() {
      // uncomment below and update the code to test ExifValue
      //var instance = new CloudmersiveConvertApiClient.ExifValue();
      //expect(instance).to.be.a(CloudmersiveConvertApiClient.ExifValue);
    });

    it('should have the property tag (base name: "Tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new CloudmersiveConvertApiClient.ExifValue();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "DataType")', function() {
      // uncomment below and update the code to test the property dataType
      //var instance = new CloudmersiveConvertApiClient.ExifValue();
      //expect(instance).to.be();
    });

    it('should have the property dataValue (base name: "DataValue")', function() {
      // uncomment below and update the code to test the property dataValue
      //var instance = new CloudmersiveConvertApiClient.ExifValue();
      //expect(instance).to.be();
    });

  });

}));
