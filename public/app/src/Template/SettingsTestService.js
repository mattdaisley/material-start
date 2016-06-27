(function(){
  'use strict';

  angular.module('Template')
         .factory('settingsTestService', [SettingsTestService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function SettingsTestService(){

    // Promise-based API
    return Tests;
  };


  function Tests(Settings){
    this.Settings = Settings;
    this.Results = {
      Margin: undefined,
      MarginTop: undefined,
      MarginRight: undefined,
      MarginBottom: undefined,
      MarginLeft: undefined,
      Border: undefined,
      BorderTop: undefined,
      BorderRight: undefined,
      BorderBottom: undefined,
      BorderLeft: undefined,
      Align: undefined,
      FontSize: undefined,
      Responsive: {
        Margin: undefined,
        Border: undefined
      }
    };
    return this;
  };

  Tests.prototype.marginTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Margin ) return this.Results.Margin;

    // run the test
    if ( this.Settings.hasOwnProperty('Margin') ) {
      var Margin = this.Settings.Margin;
      if ( Margin.hasOwnProperty('Size') ) {
        if ( Margin.Size > 0 || this.marginTopTest() || this.marginRightTest() || this.marginBottomTest() || this.marginLeftTest() ) {
          // cache the result
          this.Results.Margin = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.Margin = false;
    return false;
  };

  Tests.prototype.marginTopTest = function() {
    // use the cached test result if it exists
    if ( this.Results.MarginTop ) return this.Results.MarginTop;

    // run the test
    if ( this.Settings.hasOwnProperty('Margin') ) {
      var Margin = this.Settings.Margin;
      if ( Margin.hasOwnProperty('Top') ) {
        if ( Margin.Top > 0 ) {
          // cache the result
          this.Results.MarginTop = true;
          return true;
        }
      }
    }
  };

  Tests.prototype.marginRightTest = function() {
    // use the cached test result if it exists
    if ( this.Results.MarginRight ) return this.Results.MarginRight;

    // run the test
    if ( this.Settings.hasOwnProperty('Margin') ) {
      var Margin = this.Settings.Margin;
      if ( Margin.hasOwnProperty('Right') ) {
        if ( Margin.Right > 0 ) {
          // cache the result
          this.Results.MarginRight = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.MarginRight = false;
    return false;
  };

  Tests.prototype.marginBottomTest = function() {
    // use the cached test result if it exists
    if ( this.Results.MarginBottom ) return this.Results.MarginBottom;

    // run the test
    if ( this.Settings.hasOwnProperty('Margin') ) {
      var Margin = this.Settings.Margin;
      if ( Margin.hasOwnProperty('Bottom') ) {
        if ( Margin.Bottom > 0 ) {
          // cache the result
          this.Results.MarginBottom = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.MarginBottom = false;
    return false;
  };

  Tests.prototype.marginLeftTest = function() {
    // use the cached test result if it exists
    if ( this.Results.MarginLeft ) return this.Results.MarginLeft;

    // run the test
    if ( this.Settings.hasOwnProperty('Margin') ) {
      var Margin = this.Settings.Margin;
      if ( Margin.hasOwnProperty('Left') ) {
        if ( Margin.Left > 0 ) {
          // cache the result
          this.Results.MarginLeft = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.MarginLeft = false;
    return false;
  };

  Tests.prototype.borderTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Border ) return this.Results.Border;

    // run the test
    if ( this.Settings.hasOwnProperty('Border') ) {
      var Border = this.Settings.Border;
      if ( Border.hasOwnProperty('Size') ) {
        if ( Border.Size > 0 || this.borderTopTest() || this.borderRightTest() || this.borderBottomTest() || this.borderLeftTest() ) {
          // cache the result
          this.Results.Border = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.Border = false;
    return false;
  };

  Tests.prototype.borderTopTest = function() {
    // use the cached test result if it exists
    if ( this.Results.BorderTop ) return this.Results.BorderTop;

    // run the test
    if ( this.Settings.hasOwnProperty('Border') ) {
      var Border = this.Settings.Border;
      if ( Border.hasOwnProperty('Top') ) {
        if ( Border.Top > 0 ) {
          // cache the result
          this.Results.BorderTop = true;
          return true;
        }
      }
    }
  };

  Tests.prototype.borderRightTest = function() {
    // use the cached test result if it exists
    if ( this.Results.BorderRight ) return this.Results.BorderRight;

    // run the test
    if ( this.Settings.hasOwnProperty('Border') ) {
      var Border = this.Settings.Border;
      if ( Border.hasOwnProperty('Right') ) {
        if ( Border.Right > 0 ) {
          // cache the result
          this.Results.BorderRight = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.BorderRight = false;
    return false;
  };

  Tests.prototype.borderBottomTest = function() {
    // use the cached test result if it exists
    if ( this.Results.BorderBottom ) return this.Results.BorderBottom;

    // run the test
    if ( this.Settings.hasOwnProperty('Border') ) {
      var Border = this.Settings.Border;
      if ( Border.hasOwnProperty('Bottom') ) {
        if ( Border.Bottom > 0 ) {
          // cache the result
          this.Results.BorderBottom = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.BorderBottom = false;
    return false;
  };

  Tests.prototype.borderLeftTest = function() {
    // use the cached test result if it exists
    if ( this.Results.BorderLeft ) return this.Results.BorderLeft;

    // run the test
    if ( this.Settings.hasOwnProperty('Border') ) {
      var Border = this.Settings.Border;
      if ( Border.hasOwnProperty('Left') ) {
        if ( Border.Left > 0 ) {
          // cache the result
          this.Results.BorderLeft = true;
          return true;
        }
      }
    }
    //cache the result
    this.Results.BorderLeft = false;
    return false;
  };

  Tests.prototype.alignTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Align ) return this.Results.Align;
    // run the test
    if ( this.Settings.hasOwnProperty('Align') ) {
      var Align = this.Settings.Align;
      if ( Align.hasOwnProperty('Align') ) {
        // cache the result
        this.Results.Align = true;
        return true;
      }
    }
    //cache the result
    this.Results.Align = false;
    return false;
  };

  Tests.prototype.fontSizeTest = function() {
    // use the cached test result if it exists
    if ( this.Results.FontSize ) return this.Results.FontSize;
    // run the test
    if ( this.Settings.hasOwnProperty('FontSize') ) {
      var FontSize = this.Settings.FontSize;
      if ( FontSize.hasOwnProperty('Size') ) {
        // cache the result
        this.Results.FontSize = true;
        return true;
      }
    }
    //cache the result
    this.Results.FontSize = false;
    return false;
  };


  /*
    ---------------------------------------------------
    Responsive Tests
    ---------------------------------------------------
  */

  Tests.prototype.rMarginTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Responsive.Margin ) return this.Results.Responsive.Margin;

    // run the test
    if ( this.Settings.hasOwnProperty('Responsive') ) {
      var Responsive = this.Settings.Responsive;

      if ( Responsive.Margin.Size > 0 || Responsive.Margin.Left > 0 || Responsive.Margin.Top > 0 || Responsive.Margin.Right > 0 || Responsive.Margin.Bottom > 0 ) {
        // cache the result
        this.Results.Responsive.Margin = true;
        return true;
      }
    }
    //cache the result
    this.Results.Responsive.Margin = false;
    return false;
  };

  Tests.prototype.rBorderTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Responsive.Border ) return this.Results.Responsive.Border;

    // run the test
    if ( this.Settings.hasOwnProperty('Responsive') ) {
      var Responsive = this.Settings.Responsive;

      if ( Responsive.Border.Size > 0 || Responsive.Border.Left > 0 || Responsive.Border.Top > 0 || Responsive.Border.Right > 0 || Responsive.Border.Bottom > 0 ) {
        // cache the result
        this.Results.Responsive.Border = true;
        return true;
      }
    }
    //cache the result
    this.Results.Responsive.Border = false;
    return false;
  };

  Tests.prototype.rAnyTest = function() {
    // use the cached test result if it exists
    if ( this.Results.Responsive.Any ) return this.Results.Responsive.Any;

    // run the test
    if ( this.Settings.hasOwnProperty('Responsive') ) {
      var Responsive = this.Settings.Responsive;

      if ( 
        this.rMarginTest() ||
        this.rBorderTest()
      ) {
        // cache the result
        this.Results.Responsive.Any = true;
        return true;
      }
    }
    // cache the result
    this.Results.Responsive.Any = false;
    return false;
  };


})();
