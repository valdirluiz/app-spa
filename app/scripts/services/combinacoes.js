'use strict';


angular.module('spaTestApp')
  .factory('CombinacoesFactory', function () {

      function getIndices(totalElements, elementCount) {

          var retorno = [];

          for (var i = 0; i < Math.pow(2, totalElements); i++) { 

              var elemento = i.toString(2).replace(new RegExp('0', 'g'), '');

              if(elemento.length === elementCount){
                retorno.push(i);
              }
                  
          }

          return retorno;
    }

    function conbinaElementos(array, elementCount) {
      var combinacoes = getIndices(array.length, elementCount);

      var retorno = [];

      for(var i = 0; i < combinacoes.length; i++) {

          var bitmapIndex = combinacoes[i].toString(2).split('').reverse().join('');
          var item = '';

          for(var j = 0; j < bitmapIndex.length + 1; j++){
              if (bitmapIndex.substring(j,j+1) === '1'){
                item += array[j];
              }    
          }

          retorno.push(item);
      }
      return retorno;
    }

    
    return {
      combina: function (elementos, quantidade) {
        return conbinaElementos(elementos, quantidade);
      }
    };

  });
