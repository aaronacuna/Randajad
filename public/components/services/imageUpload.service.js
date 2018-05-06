(() => {
  'use strict';
  angular
  .module('randajad')
  .service('imageUploadService', imageUploadService);

  imageUploadService.$inject = ['$http'];

  function imageUploadService($http){
    const cloudObj = {
      url:'https://api.cloudinary.com/v1_1/aacuna057/image/upload',
      data:{
        upload_preset: 'nswxnlzg',
        tags:'Any',
        context:'photo=test'
      }
    };

    const uploadAPI = {
      getConfiguration : _getConfiguration
    };
    return uploadAPI;

    function _getConfiguration() {
      return cloudObj;
    }
  };
})();