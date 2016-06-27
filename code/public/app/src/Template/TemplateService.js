(function(){
  'use strict';

  angular.module('Template')
         .service('templateService', ['$q', templateService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function templateService($q){
    var Template = {
      Sections: [
        {
          Id: 0,
          name: 'George Duke',
          columns: [
            {
              Id:0,
              contents: [
                {
                  Id:0,
                  title: 'c1',
                  html: '<div>I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.</div>',
                  Settings: {
                    Margin: {
                      Size: 10,
                      Left: 10,
                      Top:10,
                      Bottom:10,
                      Right:10
                    },
                    Responsive: {
                      Margin: {
                        Size: 20
                      }
                    }
                  }
                }
              ]
            },
            {
              Id:1,
              contents: [
                {
                  Id:0,
                  title: 'c2',
                  html: '<div>I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.</div>',
                  Settings: {
                    Margin: {
                      Size: 10,
                      Left: 10,
                      Top:10,
                      Bottom:20,
                      Right:20
                    },
                    FontSize: {
                      Size: '18px'
                    }
                  }
                },
                {
                  Id:1,
                  title: 'c3',
                  html: '<div>I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.</div>',
                  Settings: {
                    Border: {
                      Size: 2,
                      Left: 2,
                      Top:5,
                      Bottom:5,
                      Right:2,
                      Color:'#000000'
                    },
                    Align: {
                      Align: 'left'
                    }
                  }
                }
              ]
            }
          ],
          
        },
      ],
      Settings: {

      }
    };

    // Promise-based API
    return {
      loadTemplate : function() {
        // Simulate async nature of real remote calls
        return $q.when(Template);
      }
    };
  }

})();
