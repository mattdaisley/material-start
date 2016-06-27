(function(){

  angular
       .module('Template')
       .controller('TemplateController', [
          'templateService', 'settingsTestService', 'buildDomService', '$timeout', '$log',
          TemplateController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function TemplateController( TemplateService, settingsTestService, buildDomService, $timeout, $log ) {
    var self = this;

    self.Tests         = settingsTestService;
    self.BuildDom      = buildDomService;

    self.Sections     = [ ];
    self.buildBox     = buildBox;

    // Load all registered Sections

    TemplateService
          .loadTemplate()
          .then( function( Template ) {
            self.Sections = [].concat(Template.Sections);
            self.buildBox();
          });

    // *********************************
    // Internal methods
    // *********************************


    /**
     * Hide or Show the 'left' sideNav area
     */

    function buildBox() {
      var sections = self.Sections;

      sections.forEach(function(section) {
        var columns = section.columns;

        columns.forEach(function(column) {
          var columnId = 'clm-'+section.Id+'-'+column.Id;
          var contents = column.contents;

          contents.forEach(function(content) {
            var Settings = content.Settings;
            var BuildDom = new self.BuildDom();
            var Tests = new self.Tests(Settings);

            var parentElem = angular.element(document.getElementById(columnId));

            var contentId = 'cnt-'+section.Id+'-'+column.Id+'-'+content.Id;

            if ( Tests.marginTest() || Tests.rAnyTest() ) {

              // create the main table element
              BuildDom.buildMainTable();
              BuildDom.buildMainTableTR();
              BuildDom.buildMainTableTD();

              // add the responsive class
              if ( Tests.rAnyTest() ) {
                BuildDom.addMainTableRClass(contentId);
              }

              // add the top margin
              if ( Tests.marginTopTest() ) {
                BuildDom.buildTopMargin(Settings.Margin.Top, Tests.marginLeftTest(), Tests.marginRightTest());
                BuildDom.mainTable.append(BuildDom.topMargin);
              }

              BuildDom.mainTable.append(BuildDom.mainTableTR);

              // add the left margin
              if ( Tests.marginLeftTest() ) {
                BuildDom.buildLeftMargin(Settings.Margin.Left);
                BuildDom.mainTableTR.append(BuildDom.leftMargin);
              }

              BuildDom.mainTableTR.append(BuildDom.mainTableTD);

              // add the responsive margin container class
              if ( Tests.rMarginTest() ) {
                BuildDom.mainTableTD.attr('class', 'margin-container');
              }

              // add the right margin
              if ( Tests.marginRightTest() ) {
                BuildDom.buildRightMargin(Settings.Margin.Right);
                BuildDom.mainTableTR.append(BuildDom.rightMargin);
              }

              // add the bottom margin
              if ( Tests.marginBottomTest() ) {
                BuildDom.buildBottomMargin(Settings.Margin.Bottom, Tests.marginLeftTest(), Tests.marginRightTest());
                BuildDom.mainTable.append(BuildDom.bottomMargin);
              }

              parentElem.append(BuildDom.mainTable);
              parentElem = BuildDom.mainTableTD;
            }

            if ( Tests.borderTest() ) {
              BuildDom.buildBorder(Settings.Border.Top, Settings.Border.Right, Settings.Border.Bottom, Settings.Border.Left, Settings.Border.Color);
              parentElem.append(BuildDom.border);
              parentElem = BuildDom.border;
            }

            if ( Tests.alignTest() || Tests.fontSizeTest() /* || font-family || color || line-height*/ ) {
              BuildDom.buildChildContainerTable();
              BuildDom.buildChildContainerTR();
              BuildDom.buildChildContainerTD();

              var style = '';

              if ( Tests.alignTest() ) {
                BuildDom.childContainerTD.attr('align', Settings.Align.Align);
                style = style + 'text-align:'+Settings.Align.Align+';'
              }

              if ( Tests.fontSizeTest() ) {
                style = style + 'font-size:'+Settings.FontSize.Size+';'
              }
              
              BuildDom.childContainerTD.attr('style', style);

              BuildDom.childContainerTR.append(BuildDom.childContainerTD);
              BuildDom.childContainerTable.append(BuildDom.childContainerTR);

              parentElem.append(BuildDom.childContainerTable);
              parentElem = BuildDom.childContainerTD;
            }

            var html = angular.element(content.html);
            parentElem.append(html);

          });
        });
      });
    }

  }

})();
