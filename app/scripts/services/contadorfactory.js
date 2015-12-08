'use strict';


angular.module('spaTestApp').factory('ContadorFactory', function($interval){
    
	var secundos = 0;
	var retorno = {dataFormatada: ''};

	

	function secondsToHms(d) {
			d = Number(d);
			var h = Math.floor(d / 3600);
			var m = Math.floor(d % 3600 / 60);
			var s = Math.floor(d % 3600 % 60);
			return ((h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s); 
	}

	function incrementaTempo(){
		$interval(function() {
    		secundos++;    
            retorno.dataFormatada = secondsToHms(secundos);
        }, 1000);
	}

	incrementaTempo();
	
    return function(){	
    	return retorno;
    };
     
 });









