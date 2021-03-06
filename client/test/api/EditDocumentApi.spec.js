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
    instance = new CloudmersiveConvertApiClient.EditDocumentApi();
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

  describe('EditDocumentApi', function() {
    describe('editDocumentBeginEditing', function() {
      it('should call editDocumentBeginEditing successfully', function(done) {
        //uncomment below and update the code to test editDocumentBeginEditing
        //instance.editDocumentBeginEditing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxBody', function() {
      it('should call editDocumentDocxBody successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxBody
        //instance.editDocumentDocxBody(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetHeadersAndFooters', function() {
      it('should call editDocumentDocxGetHeadersAndFooters successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetHeadersAndFooters
        //instance.editDocumentDocxGetHeadersAndFooters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetImages', function() {
      it('should call editDocumentDocxGetImages successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetImages
        //instance.editDocumentDocxGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetSections', function() {
      it('should call editDocumentDocxGetSections successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetSections
        //instance.editDocumentDocxGetSections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetStyles', function() {
      it('should call editDocumentDocxGetStyles successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetStyles
        //instance.editDocumentDocxGetStyles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetTables', function() {
      it('should call editDocumentDocxGetTables successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetTables
        //instance.editDocumentDocxGetTables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertImage', function() {
      it('should call editDocumentDocxInsertImage successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertImage
        //instance.editDocumentDocxInsertImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertParagraph', function() {
      it('should call editDocumentDocxInsertParagraph successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertParagraph
        //instance.editDocumentDocxInsertParagraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertTable', function() {
      it('should call editDocumentDocxInsertTable successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertTable
        //instance.editDocumentDocxInsertTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxRemoveHeadersAndFooters', function() {
      it('should call editDocumentDocxRemoveHeadersAndFooters successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxRemoveHeadersAndFooters
        //instance.editDocumentDocxRemoveHeadersAndFooters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxRemoveObject', function() {
      it('should call editDocumentDocxRemoveObject successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxRemoveObject
        //instance.editDocumentDocxRemoveObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxReplace', function() {
      it('should call editDocumentDocxReplace successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxReplace
        //instance.editDocumentDocxReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetFooter', function() {
      it('should call editDocumentDocxSetFooter successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetFooter
        //instance.editDocumentDocxSetFooter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetHeader', function() {
      it('should call editDocumentDocxSetHeader successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetHeader
        //instance.editDocumentDocxSetHeader(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentFinishEditing', function() {
      it('should call editDocumentFinishEditing successfully', function(done) {
        //uncomment below and update the code to test editDocumentFinishEditing
        //instance.editDocumentFinishEditing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentPptxReplace', function() {
      it('should call editDocumentPptxReplace successfully', function(done) {
        //uncomment below and update the code to test editDocumentPptxReplace
        //instance.editDocumentPptxReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetColumns', function() {
      it('should call editDocumentXlsxGetColumns successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetColumns
        //instance.editDocumentXlsxGetColumns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetImages', function() {
      it('should call editDocumentXlsxGetImages successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetImages
        //instance.editDocumentXlsxGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetRowsAndCells', function() {
      it('should call editDocumentXlsxGetRowsAndCells successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetRowsAndCells
        //instance.editDocumentXlsxGetRowsAndCells(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetStyles', function() {
      it('should call editDocumentXlsxGetStyles successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetStyles
        //instance.editDocumentXlsxGetStyles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetWorksheets', function() {
      it('should call editDocumentXlsxGetWorksheets successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetWorksheets
        //instance.editDocumentXlsxGetWorksheets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxInsertWorksheet', function() {
      it('should call editDocumentXlsxInsertWorksheet successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxInsertWorksheet
        //instance.editDocumentXlsxInsertWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
