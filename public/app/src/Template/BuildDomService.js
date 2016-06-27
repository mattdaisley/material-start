(function(){
  'use strict';

  angular.module('Template')
         .factory('buildDomService', [BuildDomService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function BuildDomService(){

    // Promise-based API
    return BuildDom;
  };


  function BuildDom(Settings) {
    this.Settings = Settings;
    this.mainTable = undefined;
    this.mainTableTR = undefined;
    this.mainTableTD = undefined;
    this.topMargin = undefined;
    this.rightMargin = undefined;
    this.bottomMargin = undefined;
    this.leftMargin = undefined;
    this.border = undefined;
    this.childContainerTable = undefined;
    this.childContainerTR = undefined;
    this.childContainerTD = undefined;
    return this;
  }

  // BuildDom.prototype = new self.Tests();
  // angular.extend(BuildDom.prototype, self.Tests.prototype);

  BuildDom.prototype.buildMainTable = function() {
    if ( this.mainTable ) return this.mainTable;

    var table = angular.element('<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"></table>');

    this.mainTable = table;
    return table;
  };

  BuildDom.prototype.addMainTableRClass = function(selector) {
    this.mainTable.attr('class', selector+'-ctr');
  };

  BuildDom.prototype.buildSpacerHeight = function(height) {

    var td = angular.element('<td style="font-size:0px; line-height:0px;"></td>');
    td.attr('height', height);

    var div = angular.element('<div style="font-size:0px; line-height:0px;"></div>');

    var img = angular.element('<img src="http://app.rezora.com/themes/default/images/spacer.gif" border="0" style="display:block;"/>');
    img.attr('height', height);
    img.attr('width', 1);

    div.append(img);
    td.append(div);

    return td;
  };

  BuildDom.prototype.buildSpacerWidth = function(width) {
    var td = document.createElement('td');

    var td = angular.element('<td style="font-size:0px; line-height:0px;"></td>');
    td.attr('width', width);

    var div = angular.element('<div style="font-size:0px; line-height:0px;"></div>');

    var img = angular.element('<img src="http://app.rezora.com/themes/default/images/spacer.gif" border="0" style="display:block;"/>');
    img.attr('width', 1);

    div.append(img);
    td.append(div);

    return td;
  };

  BuildDom.prototype.buildTopMargin = function(height, includeMarginLeft, includeMarginRight) {
    if ( this.topMargin ) return this.topMargin;

    var tr = angular.element('<tr class="rzHide"></tr>');

    var td = this.buildSpacerHeight(height);

    var colspan = 1;
    if ( includeMarginLeft ) colspan++;
    if ( includeMarginRight ) colspan++;

    if ( colspan > 1 ) td.attr('colspan',colspan);

    tr.append(td);

    this.topMargin = tr;
    return tr;
  };

  BuildDom.prototype.buildRightMargin = function(width) {
    if ( this.rightMargin ) return this.rightMargin;

    var td = this.buildSpacerWidth(width);
    td.attr('class', 'rzHide');

    this.rightMargin = td;
    return td;
  };

  BuildDom.prototype.buildBottomMargin = function(height, includeMarginLeft, includeMarginRight) {
    if ( this.bottomMargin ) return this.bottomMargin;
    
    var tr = angular.element('<tr class="rzHide"></tr>');

    var td = this.buildSpacerHeight(height);

    var colspan = 1;
    if ( includeMarginLeft ) colspan++;
    if ( includeMarginRight ) colspan++;

    if ( colspan > 1 ) td.attr('colspan',colspan);

    tr.append(td);

    this.bottomMargin = tr;
    return tr;
  };

  BuildDom.prototype.buildLeftMargin = function(width) {
    if ( this.leftMargin ) return this.leftMargin;

    var td = this.buildSpacerWidth(width);
    td.attr('class', 'rzHide');

    this.leftMargin = td;
    return td;
  };

  BuildDom.prototype.buildMainTableTR = function() {
    if ( this.mainTableTR ) return this.mainTableTR;

    var tr = angular.element('<tr>');

    this.mainTableTR = tr;
    return tr;
  };

  BuildDom.prototype.buildMainTableTD = function() {
    if ( this.mainTableTD ) return this.mainTableTD;

    var td = angular.element('<td>');

    this.mainTableTD = td;
    return td;
  };

  BuildDom.prototype.buildBorder = function(top, right, bottom, left, color) {
    if ( this.border ) return this.border;

    var div = angular.element('<div>');

    var styleString = '';
    if ( top ) styleString += 'border-top:'+top+'px solid '+color+';';
    if ( right ) styleString += 'border-right:'+right+'px solid '+color+';';
    if ( bottom ) styleString += 'border-bottom:'+bottom+'px solid '+color+';';
    if ( left ) styleString += 'border-left:'+left+'px solid '+color+';';

    div.attr('style', styleString + 'border-color:'+color+';');

    this.border = div;
    return div;
  };

  BuildDom.prototype.buildChildContainerTable = function() {
    if ( this.childContainerTable ) return this.childContainerTable;

    var table = angular.element('<table width="100%" cellpadding="0" cellspacing="0" border="0" align="center"></table>');

    this.childContainerTable = table;
    return table;
  };

  BuildDom.prototype.buildChildContainerTR = function() {
    if ( this.childContainerTR ) return this.childContainerTR;

    var tr = angular.element('<tr>');

    this.childContainerTR = tr;
    return tr;
  };

  BuildDom.prototype.buildChildContainerTD = function() {
    if ( this.childContainerTD ) return this.childContainerTD;

    var td = angular.element('<td>');

    this.childContainerTD = td;
    return td;
  };

})();
