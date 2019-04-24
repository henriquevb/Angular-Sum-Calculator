var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    var self = this;
    self.parcela1 = 0;
    self.parcela2 = 0;

    self.soma = function () {
        self.resultado = self.parcela1 + self.parcela2;
    }
});

angular.module('myApp').component('calculadora', {
    
    template: '<input name="parcela1" type="number" ng-model="$ctrl.parcela1"/> + <input name="parcela2" type="number" ng-model="$ctrl.parcela2"/><button ng-click="$ctrl.soma()">Soma</button><br>parcela1: {{$ctrl.parcela1}} <br>    parcela2: {{$ctrl.parcela2}} <br>resultado: {{$ctrl.resultado}}',    
    controller: 'mainController'
});