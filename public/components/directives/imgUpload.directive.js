(() => {
  'use strict';
  angular
  .module("randajad")
  .directive("imgUpload", imgUpload);

  function imgUpload() {

    const imgUpload = {
      restrict: 'A',
      require: "ngModel",
      link: function postLink(scope,elem,attrs,ngModel) {
        elem.on("change", function(e) {
          let files = elem[0].files;
          ngModel.$setViewValue(files);
        });
      }
    };

    return imgUpload;

  };
})();