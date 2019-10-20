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
    instance = new CloudmersiveConvertApiClient.ConvertDocumentApi();
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

  describe('ConvertDocumentApi', function() {
    describe('convertDocumentAutodetectGetInfo', function() {
      it('should call convertDocumentAutodetectGetInfo successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectGetInfo
        //instance.convertDocumentAutodetectGetInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToPdf', function() {
      it('should call convertDocumentAutodetectToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToPdf
        //instance.convertDocumentAutodetectToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToPngArray', function() {
      it('should call convertDocumentAutodetectToPngArray successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToPngArray
        //instance.convertDocumentAutodetectToPngArray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentAutodetectToTxt', function() {
      it('should call convertDocumentAutodetectToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentAutodetectToTxt
        //instance.convertDocumentAutodetectToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentCsvToXlsx', function() {
      it('should call convertDocumentCsvToXlsx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentCsvToXlsx
        //instance.convertDocumentCsvToXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocToDocx', function() {
      it('should call convertDocumentDocToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocToDocx
        //instance.convertDocumentDocToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocToPdf', function() {
      it('should call convertDocumentDocToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocToPdf
        //instance.convertDocumentDocToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToPdf', function() {
      it('should call convertDocumentDocxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToPdf
        //instance.convertDocumentDocxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentDocxToTxt', function() {
      it('should call convertDocumentDocxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentDocxToTxt
        //instance.convertDocumentDocxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentHtmlToPdf', function() {
      it('should call convertDocumentHtmlToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentHtmlToPdf
        //instance.convertDocumentHtmlToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentHtmlToPng', function() {
      it('should call convertDocumentHtmlToPng successfully', function(done) {
        //uncomment below and update the code to test convertDocumentHtmlToPng
        //instance.convertDocumentHtmlToPng(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToDocx', function() {
      it('should call convertDocumentPdfToDocx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToDocx
        //instance.convertDocumentPdfToDocx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToPngArray', function() {
      it('should call convertDocumentPdfToPngArray successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToPngArray
        //instance.convertDocumentPdfToPngArray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToPptx', function() {
      it('should call convertDocumentPdfToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToPptx
        //instance.convertDocumentPdfToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPdfToTxt', function() {
      it('should call convertDocumentPdfToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPdfToTxt
        //instance.convertDocumentPdfToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptToPdf', function() {
      it('should call convertDocumentPptToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptToPdf
        //instance.convertDocumentPptToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptToPptx', function() {
      it('should call convertDocumentPptToPptx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptToPptx
        //instance.convertDocumentPptToPptx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptxToPdf', function() {
      it('should call convertDocumentPptxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptxToPdf
        //instance.convertDocumentPptxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentPptxToTxt', function() {
      it('should call convertDocumentPptxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentPptxToTxt
        //instance.convertDocumentPptxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToCsv', function() {
      it('should call convertDocumentXlsToCsv successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToCsv
        //instance.convertDocumentXlsToCsv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToPdf', function() {
      it('should call convertDocumentXlsToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToPdf
        //instance.convertDocumentXlsToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsToXlsx', function() {
      it('should call convertDocumentXlsToXlsx successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsToXlsx
        //instance.convertDocumentXlsToXlsx(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToCsv', function() {
      it('should call convertDocumentXlsxToCsv successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToCsv
        //instance.convertDocumentXlsxToCsv(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToPdf', function() {
      it('should call convertDocumentXlsxToPdf successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToPdf
        //instance.convertDocumentXlsxToPdf(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('convertDocumentXlsxToTxt', function() {
      it('should call convertDocumentXlsxToTxt successfully', function(done) {
        //uncomment below and update the code to test convertDocumentXlsxToTxt
        //instance.convertDocumentXlsxToTxt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
