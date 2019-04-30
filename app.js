var myApp = angular.module('myApp', ['myApp']);
myApp.controller('mainController', function($scope) {
    var self = this;
    self.parcela1 = 0;
    self.parcela2 = 0;
    self.resultado = 0;
});

angular.module('myApp').component('calculadora', {
    
    templateUrl: './calculadora.html',
    controller: function () {
        var calculadora = this;
        calculadora.soma = function () {
            console.log('----------------------------');
            return self.resultado = self.parcela1 + self.parcela2; 
        };
  },
    bindings: {
        parcela1: '=',
        parcela2:'=',
        resultado:'='
    }
});

angular.module('myApp').component('sumButton', {
    template: '<button ng-click="calculadora.soma()">Soma</button><br>',
    controller: function () {
        var controle = this;
      },
      bindings: {
        soma: '&',
        parcela1: '=',
        parcela2:'=',
        resultado:'='
    }
});
