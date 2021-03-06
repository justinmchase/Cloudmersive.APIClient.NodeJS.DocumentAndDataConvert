# cloudmersive-convert-api-client

CloudmersiveConvertApiClient - JavaScript client for cloudmersive-convert-api-client
Convert API lets you effortlessly convert file formats and types.
[Cloudmersive Document and Data Conversion API](https://www.cloudmersive.com/convert-api) provides advanced document conversion, editing and generation capabilities.

- API version: v1
- Package version: 2.1.1


## Installation

### For the [Cloudmersive Document and Data Conversion API](https://www.cloudmersive.com/convert-api)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-convert-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-convert-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-convert-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');

var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveConvertApiClient.CompareDocumentApi()

var inputFile1 = "/path/to/file.txt"; // {File} First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // {File} Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.compareDocumentDocx(inputFile1, inputFile2, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveConvertApiClient.CompareDocumentApi* | [**compareDocumentDocx**](docs/CompareDocumentApi.md#compareDocumentDocx) | **POST** /convert/compare/docx | Compare Two Word DOCX
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataCsvToJson**](docs/ConvertDataApi.md#convertDataCsvToJson) | **POST** /convert/csv/to/json | CSV to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXlsToJson**](docs/ConvertDataApi.md#convertDataXlsToJson) | **POST** /convert/xls/to/json | Excel (97-2003) XLS to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXlsxToJson**](docs/ConvertDataApi.md#convertDataXlsxToJson) | **POST** /convert/xlsx/to/json | Excel XLSX to JSON conversion
*CloudmersiveConvertApiClient.ConvertDataApi* | [**convertDataXmlToJson**](docs/ConvertDataApi.md#convertDataXmlToJson) | **POST** /convert/xml/to/json | XML to JSON conversion
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectGetInfo**](docs/ConvertDocumentApi.md#convertDocumentAutodetectGetInfo) | **POST** /convert/autodetect/get-info | Get document type information
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToPdf**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToPdf) | **POST** /convert/autodetect/to/pdf | Convert Document to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToPngArray**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToPngArray) | **POST** /convert/autodetect/to/png | Convert Document to PNG array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentAutodetectToTxt**](docs/ConvertDocumentApi.md#convertDocumentAutodetectToTxt) | **POST** /convert/autodetect/to/txt | Convert Document to Text
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentCsvToXlsx**](docs/ConvertDocumentApi.md#convertDocumentCsvToXlsx) | **POST** /convert/csv/to/xlsx | CSV to Excel XLSX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocToDocx**](docs/ConvertDocumentApi.md#convertDocumentDocToDocx) | **POST** /convert/doc/to/docx | Word DOC (97-03) to DOCX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocToPdf**](docs/ConvertDocumentApi.md#convertDocumentDocToPdf) | **POST** /convert/doc/to/pdf | Word DOC (97-03) to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToPdf**](docs/ConvertDocumentApi.md#convertDocumentDocxToPdf) | **POST** /convert/docx/to/pdf | Word DOCX to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentDocxToTxt**](docs/ConvertDocumentApi.md#convertDocumentDocxToTxt) | **POST** /convert/docx/to/txt | Word DOCX to Text
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentHtmlToPdf**](docs/ConvertDocumentApi.md#convertDocumentHtmlToPdf) | **POST** /convert/html/to/pdf | HTML to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentHtmlToPng**](docs/ConvertDocumentApi.md#convertDocumentHtmlToPng) | **POST** /convert/html/to/png | HTML to PNG array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToDocx**](docs/ConvertDocumentApi.md#convertDocumentPdfToDocx) | **POST** /convert/pdf/to/docx | PDF to Word DOCX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPngArray**](docs/ConvertDocumentApi.md#convertDocumentPdfToPngArray) | **POST** /convert/pdf/to/png | PDF to PNG Array
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToPptx**](docs/ConvertDocumentApi.md#convertDocumentPdfToPptx) | **POST** /convert/pdf/to/pptx | PDF to PowerPoint PPTX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPdfToTxt**](docs/ConvertDocumentApi.md#convertDocumentPdfToTxt) | **POST** /convert/pdf/to/txt | PDF to Text
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptToPdf**](docs/ConvertDocumentApi.md#convertDocumentPptToPdf) | **POST** /convert/ppt/to/pdf | PowerPoint PPT (97-03) to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptToPptx**](docs/ConvertDocumentApi.md#convertDocumentPptToPptx) | **POST** /convert/ppt/to/pptx | PowerPoint PPT (97-03) to PPTX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToPdf**](docs/ConvertDocumentApi.md#convertDocumentPptxToPdf) | **POST** /convert/pptx/to/pdf | PowerPoint PPTX to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentPptxToTxt**](docs/ConvertDocumentApi.md#convertDocumentPptxToTxt) | **POST** /convert/pptx/to/txt | PowerPoint PPTX to Text
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToCsv**](docs/ConvertDocumentApi.md#convertDocumentXlsToCsv) | **POST** /convert/xls/to/csv | Excel XLS (97-03) to CSV
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToPdf**](docs/ConvertDocumentApi.md#convertDocumentXlsToPdf) | **POST** /convert/xls/to/pdf | Excel XLS (97-03) to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsToXlsx**](docs/ConvertDocumentApi.md#convertDocumentXlsToXlsx) | **POST** /convert/xls/to/xlsx | Excel XLS (97-03) to XLSX
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToCsv**](docs/ConvertDocumentApi.md#convertDocumentXlsxToCsv) | **POST** /convert/xlsx/to/csv | Excel XLSX to CSV
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToPdf**](docs/ConvertDocumentApi.md#convertDocumentXlsxToPdf) | **POST** /convert/xlsx/to/pdf | Excel XLSX to PDF
*CloudmersiveConvertApiClient.ConvertDocumentApi* | [**convertDocumentXlsxToTxt**](docs/ConvertDocumentApi.md#convertDocumentXlsxToTxt) | **POST** /convert/xlsx/to/txt | Excel XLSX to Text
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageGetImageInfo**](docs/ConvertImageApi.md#convertImageGetImageInfo) | **POST** /convert/image/get-info | Get information about an image
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageImageFormatConvert**](docs/ConvertImageApi.md#convertImageImageFormatConvert) | **POST** /convert/image/{format1}/to/{format2} | Image format conversion
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageImageSetDPI**](docs/ConvertImageApi.md#convertImageImageSetDPI) | **POST** /convert/image/set-dpi/{dpi} | Change image DPI
*CloudmersiveConvertApiClient.ConvertImageApi* | [**convertImageMultipageImageFormatConvert**](docs/ConvertImageApi.md#convertImageMultipageImageFormatConvert) | **POST** /convert/image-multipage/{format1}/to/{format2} | Multi-page format conversion
*CloudmersiveConvertApiClient.ConvertTemplateApi* | [**convertTemplateApplyDocxTemplate**](docs/ConvertTemplateApi.md#convertTemplateApplyDocxTemplate) | **POST** /convert/template/docx/apply | Apply Word DOCX template
*CloudmersiveConvertApiClient.ConvertTemplateApi* | [**convertTemplateApplyHtmlTemplate**](docs/ConvertTemplateApi.md#convertTemplateApplyHtmlTemplate) | **POST** /convert/template/html/apply | Apply HTML template
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToDocx**](docs/ConvertWebApi.md#convertWebHtmlToDocx) | **POST** /convert/html/to/docx | HTML to DOCX
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebHtmlToPdf**](docs/ConvertWebApi.md#convertWebHtmlToPdf) | **POST** /convert/web/html/to/pdf | Convert HTML string to PDF
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebMdToHtml**](docs/ConvertWebApi.md#convertWebMdToHtml) | **POST** /convert/web/md/to/html | Convert Markdown to HTML
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebUrlToPdf**](docs/ConvertWebApi.md#convertWebUrlToPdf) | **POST** /convert/web/url/to/pdf | Convert a URL to PDF
*CloudmersiveConvertApiClient.ConvertWebApi* | [**convertWebUrlToScreenshot**](docs/ConvertWebApi.md#convertWebUrlToScreenshot) | **POST** /convert/web/url/to/screenshot | Take screenshot of URL
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentBeginEditing**](docs/EditDocumentApi.md#editDocumentBeginEditing) | **POST** /convert/edit/begin-editing | Begin editing a document
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxBody**](docs/EditDocumentApi.md#editDocumentDocxBody) | **POST** /convert/edit/docx/get-body | Get body from a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetHeadersAndFooters**](docs/EditDocumentApi.md#editDocumentDocxGetHeadersAndFooters) | **POST** /convert/edit/docx/get-headers-and-footers | Get content of a footer from a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetImages**](docs/EditDocumentApi.md#editDocumentDocxGetImages) | **POST** /convert/edit/docx/get-images | Get images from a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetSections**](docs/EditDocumentApi.md#editDocumentDocxGetSections) | **POST** /convert/edit/docx/get-sections | Get sections from a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetStyles**](docs/EditDocumentApi.md#editDocumentDocxGetStyles) | **POST** /convert/edit/docx/get-styles | Get styles from a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxGetTables**](docs/EditDocumentApi.md#editDocumentDocxGetTables) | **POST** /convert/edit/docx/get-tables | Get tables in DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertImage**](docs/EditDocumentApi.md#editDocumentDocxInsertImage) | **POST** /convert/edit/docx/insert-image | Insert image into a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertParagraph**](docs/EditDocumentApi.md#editDocumentDocxInsertParagraph) | **POST** /convert/edit/docx/insert-paragraph | Insert a new paragraph into a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxInsertTable**](docs/EditDocumentApi.md#editDocumentDocxInsertTable) | **POST** /convert/edit/docx/insert-table | Insert a new table into a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxRemoveHeadersAndFooters**](docs/EditDocumentApi.md#editDocumentDocxRemoveHeadersAndFooters) | **POST** /convert/edit/docx/remove-headers-and-footers | Remove headers and footers from DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxRemoveObject**](docs/EditDocumentApi.md#editDocumentDocxRemoveObject) | **POST** /convert/edit/docx/remove-object | Delete any object in a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxReplace**](docs/EditDocumentApi.md#editDocumentDocxReplace) | **POST** /convert/edit/docx/replace-all | Replace string in DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetFooter**](docs/EditDocumentApi.md#editDocumentDocxSetFooter) | **POST** /convert/edit/docx/set-footer | Set the footer in a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentDocxSetHeader**](docs/EditDocumentApi.md#editDocumentDocxSetHeader) | **POST** /convert/edit/docx/set-header | Set the header in a DOCX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentFinishEditing**](docs/EditDocumentApi.md#editDocumentFinishEditing) | **POST** /convert/edit/finish-editing | Download result from document editing
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentPptxReplace**](docs/EditDocumentApi.md#editDocumentPptxReplace) | **POST** /convert/edit/pptx/replace-all | Replace string in PPTX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetColumns**](docs/EditDocumentApi.md#editDocumentXlsxGetColumns) | **POST** /convert/edit/xlsx/get-columns | Get rows and cells from a XLSX worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetImages**](docs/EditDocumentApi.md#editDocumentXlsxGetImages) | **POST** /convert/edit/xlsx/get-images | Get images from a XLSX worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetRowsAndCells**](docs/EditDocumentApi.md#editDocumentXlsxGetRowsAndCells) | **POST** /convert/edit/xlsx/get-rows-and-cells | Get rows and cells from a XLSX worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetStyles**](docs/EditDocumentApi.md#editDocumentXlsxGetStyles) | **POST** /convert/edit/xlsx/get-styles | Get styles from a XLSX worksheet
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxGetWorksheets**](docs/EditDocumentApi.md#editDocumentXlsxGetWorksheets) | **POST** /convert/edit/xlsx/get-worksheets | Get worksheets from a XLSX
*CloudmersiveConvertApiClient.EditDocumentApi* | [**editDocumentXlsxInsertWorksheet**](docs/EditDocumentApi.md#editDocumentXlsxInsertWorksheet) | **POST** /convert/edit/xlsx/insert-worksheet | Insert a new worksheet into an XLSX spreadsheet
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentDocx**](docs/MergeDocumentApi.md#mergeDocumentDocx) | **POST** /convert/merge/docx | Merge Multple Word DOCX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPdf**](docs/MergeDocumentApi.md#mergeDocumentPdf) | **POST** /convert/merge/pdf | Merge Multple PDF Files Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentPptx**](docs/MergeDocumentApi.md#mergeDocumentPptx) | **POST** /convert/merge/pptx | Merge Multple PowerPoint PPTX Together
*CloudmersiveConvertApiClient.MergeDocumentApi* | [**mergeDocumentXlsx**](docs/MergeDocumentApi.md#mergeDocumentXlsx) | **POST** /convert/merge/xlsx | Merge Multple Excel XLSX Together
*CloudmersiveConvertApiClient.SplitDocumentApi* | [**splitDocumentXlsx**](docs/SplitDocumentApi.md#splitDocumentXlsx) | **POST** /convert/split/xlsx | Split a single Excel XLSX into Separate Worksheets
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentDocxValidation**](docs/ValidateDocumentApi.md#validateDocumentDocxValidation) | **POST** /convert/validate/docx | Validate a Word document (DOCX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentJsonValidation**](docs/ValidateDocumentApi.md#validateDocumentJsonValidation) | **POST** /convert/validate/json | Validate a JSON file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPdfValidation**](docs/ValidateDocumentApi.md#validateDocumentPdfValidation) | **POST** /convert/validate/pdf | Validate a PDF document file
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentPptxValidation**](docs/ValidateDocumentApi.md#validateDocumentPptxValidation) | **POST** /convert/validate/pptx | Validate a PowerPoint presentation (PPTX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXlsxValidation**](docs/ValidateDocumentApi.md#validateDocumentXlsxValidation) | **POST** /convert/validate/xlsx | Validate a Excel document (XLSX)
*CloudmersiveConvertApiClient.ValidateDocumentApi* | [**validateDocumentXmlValidation**](docs/ValidateDocumentApi.md#validateDocumentXmlValidation) | **POST** /convert/validate/xml | Validate an XML file
*CloudmersiveConvertApiClient.ViewerToolsApi* | [**viewerToolsCreateSimple**](docs/ViewerToolsApi.md#viewerToolsCreateSimple) | **POST** /convert/viewer/create/web/simple | Create a web-based viewer


## Documentation for Models

 - [CloudmersiveConvertApiClient.AlternateFileFormatCandidate](docs/AlternateFileFormatCandidate.md)
 - [CloudmersiveConvertApiClient.AutodetectGetInfoResult](docs/AutodetectGetInfoResult.md)
 - [CloudmersiveConvertApiClient.AutodetectToPngResult](docs/AutodetectToPngResult.md)
 - [CloudmersiveConvertApiClient.ConvertedPngPage](docs/ConvertedPngPage.md)
 - [CloudmersiveConvertApiClient.DocumentValidationError](docs/DocumentValidationError.md)
 - [CloudmersiveConvertApiClient.DocumentValidationResult](docs/DocumentValidationResult.md)
 - [CloudmersiveConvertApiClient.DocxBody](docs/DocxBody.md)
 - [CloudmersiveConvertApiClient.DocxCellStyle](docs/DocxCellStyle.md)
 - [CloudmersiveConvertApiClient.DocxFooter](docs/DocxFooter.md)
 - [CloudmersiveConvertApiClient.DocxHeader](docs/DocxHeader.md)
 - [CloudmersiveConvertApiClient.DocxImage](docs/DocxImage.md)
 - [CloudmersiveConvertApiClient.DocxInsertImageRequest](docs/DocxInsertImageRequest.md)
 - [CloudmersiveConvertApiClient.DocxInsertImageResponse](docs/DocxInsertImageResponse.md)
 - [CloudmersiveConvertApiClient.DocxParagraph](docs/DocxParagraph.md)
 - [CloudmersiveConvertApiClient.DocxRemoveObjectRequest](docs/DocxRemoveObjectRequest.md)
 - [CloudmersiveConvertApiClient.DocxRemoveObjectResponse](docs/DocxRemoveObjectResponse.md)
 - [CloudmersiveConvertApiClient.DocxRun](docs/DocxRun.md)
 - [CloudmersiveConvertApiClient.DocxSection](docs/DocxSection.md)
 - [CloudmersiveConvertApiClient.DocxSetFooterRequest](docs/DocxSetFooterRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetFooterResponse](docs/DocxSetFooterResponse.md)
 - [CloudmersiveConvertApiClient.DocxSetHeaderRequest](docs/DocxSetHeaderRequest.md)
 - [CloudmersiveConvertApiClient.DocxSetHeaderResponse](docs/DocxSetHeaderResponse.md)
 - [CloudmersiveConvertApiClient.DocxStyle](docs/DocxStyle.md)
 - [CloudmersiveConvertApiClient.DocxTable](docs/DocxTable.md)
 - [CloudmersiveConvertApiClient.DocxTableCell](docs/DocxTableCell.md)
 - [CloudmersiveConvertApiClient.DocxTableRow](docs/DocxTableRow.md)
 - [CloudmersiveConvertApiClient.DocxTemplateApplicationRequest](docs/DocxTemplateApplicationRequest.md)
 - [CloudmersiveConvertApiClient.DocxTemplateOperation](docs/DocxTemplateOperation.md)
 - [CloudmersiveConvertApiClient.DocxText](docs/DocxText.md)
 - [CloudmersiveConvertApiClient.ExifValue](docs/ExifValue.md)
 - [CloudmersiveConvertApiClient.FinishEditingRequest](docs/FinishEditingRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxBodyRequest](docs/GetDocxBodyRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxBodyResponse](docs/GetDocxBodyResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxHeadersAndFootersRequest](docs/GetDocxHeadersAndFootersRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxHeadersAndFootersResponse](docs/GetDocxHeadersAndFootersResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxImagesRequest](docs/GetDocxImagesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxImagesResponse](docs/GetDocxImagesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxSectionsRequest](docs/GetDocxSectionsRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxSectionsResponse](docs/GetDocxSectionsResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxStylesRequest](docs/GetDocxStylesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxStylesResponse](docs/GetDocxStylesResponse.md)
 - [CloudmersiveConvertApiClient.GetDocxTablesRequest](docs/GetDocxTablesRequest.md)
 - [CloudmersiveConvertApiClient.GetDocxTablesResponse](docs/GetDocxTablesResponse.md)
 - [CloudmersiveConvertApiClient.GetImageInfoResult](docs/GetImageInfoResult.md)
 - [CloudmersiveConvertApiClient.GetXlsxColumnsRequest](docs/GetXlsxColumnsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxColumnsResponse](docs/GetXlsxColumnsResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxImagesRequest](docs/GetXlsxImagesRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxImagesResponse](docs/GetXlsxImagesResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxRowsAndCellsRequest](docs/GetXlsxRowsAndCellsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxRowsAndCellsResponse](docs/GetXlsxRowsAndCellsResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxStylesRequest](docs/GetXlsxStylesRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxStylesResponse](docs/GetXlsxStylesResponse.md)
 - [CloudmersiveConvertApiClient.GetXlsxWorksheetsRequest](docs/GetXlsxWorksheetsRequest.md)
 - [CloudmersiveConvertApiClient.GetXlsxWorksheetsResponse](docs/GetXlsxWorksheetsResponse.md)
 - [CloudmersiveConvertApiClient.HtmlMdResult](docs/HtmlMdResult.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateApplicationRequest](docs/HtmlTemplateApplicationRequest.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateApplicationResponse](docs/HtmlTemplateApplicationResponse.md)
 - [CloudmersiveConvertApiClient.HtmlTemplateOperation](docs/HtmlTemplateOperation.md)
 - [CloudmersiveConvertApiClient.HtmlToOfficeRequest](docs/HtmlToOfficeRequest.md)
 - [CloudmersiveConvertApiClient.HtmlToPdfRequest](docs/HtmlToPdfRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxInsertParagraphRequest](docs/InsertDocxInsertParagraphRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxInsertParagraphResponse](docs/InsertDocxInsertParagraphResponse.md)
 - [CloudmersiveConvertApiClient.InsertDocxTablesRequest](docs/InsertDocxTablesRequest.md)
 - [CloudmersiveConvertApiClient.InsertDocxTablesResponse](docs/InsertDocxTablesResponse.md)
 - [CloudmersiveConvertApiClient.InsertXlsxWorksheetRequest](docs/InsertXlsxWorksheetRequest.md)
 - [CloudmersiveConvertApiClient.InsertXlsxWorksheetResponse](docs/InsertXlsxWorksheetResponse.md)
 - [CloudmersiveConvertApiClient.MultipageImageFormatConversionResult](docs/MultipageImageFormatConversionResult.md)
 - [CloudmersiveConvertApiClient.PageConversionResult](docs/PageConversionResult.md)
 - [CloudmersiveConvertApiClient.PdfToPngResult](docs/PdfToPngResult.md)
 - [CloudmersiveConvertApiClient.RemoveDocxHeadersAndFootersRequest](docs/RemoveDocxHeadersAndFootersRequest.md)
 - [CloudmersiveConvertApiClient.RemoveDocxHeadersAndFootersResponse](docs/RemoveDocxHeadersAndFootersResponse.md)
 - [CloudmersiveConvertApiClient.ReplaceStringRequest](docs/ReplaceStringRequest.md)
 - [CloudmersiveConvertApiClient.ScreenshotRequest](docs/ScreenshotRequest.md)
 - [CloudmersiveConvertApiClient.SplitXlsxWorksheetResult](docs/SplitXlsxWorksheetResult.md)
 - [CloudmersiveConvertApiClient.TextConversionResult](docs/TextConversionResult.md)
 - [CloudmersiveConvertApiClient.ViewerResponse](docs/ViewerResponse.md)
 - [CloudmersiveConvertApiClient.WorksheetResult](docs/WorksheetResult.md)
 - [CloudmersiveConvertApiClient.XlsxImage](docs/XlsxImage.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetCell](docs/XlsxSpreadsheetCell.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetColumn](docs/XlsxSpreadsheetColumn.md)
 - [CloudmersiveConvertApiClient.XlsxSpreadsheetRow](docs/XlsxSpreadsheetRow.md)
 - [CloudmersiveConvertApiClient.XlsxWorksheet](docs/XlsxWorksheet.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

