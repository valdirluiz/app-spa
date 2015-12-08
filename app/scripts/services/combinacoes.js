'use strict';


angular.module('spaTestApp')
  .factory('CombinacoesFactory', function () {

      function getQuantidadeCombinacoes(totalElements, elementCount) {

          var res = [];

          for (var i = 0; i < Math.pow(2, totalElements); i++) { 

              var probe = i.toString(2).replace(new RegExp('0', 'g'), '');

              if(probe.length === elementCount){
                res.push(i);
              }
                  
          }

          return res;
    }

    function cobinaElementos(array, elementCount) {
      var combinacoes = getQuantidadeCombinacoes(array.length, elementCount);

      var res = [];

      for(var i = 0; i < combinacoes.length; i++) {

          var bitmapIndex = combinacoes[i].toString(2).split('').reverse().join('');
          console.debug(i + ':' + bitmapIndex);
          var arItem = '';

          for(var j = 0; j < bitmapIndex.length + 1; j++){
              if (bitmapIndex.substring(j,j+1) === '1'){
                arItem += array[j];
              }    
          }

          res.push(arItem);
      }
      return res;
    }

    
    return {
      combina: function (elementos, quantidade) {
        return cobinaElementos(elementos, quantidade);
      }
    };

  });
