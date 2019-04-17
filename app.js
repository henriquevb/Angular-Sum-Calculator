var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    var self = this;
    self.parcela1 = 0;
    self.parcela2 = 0;

    self.soma = function () {
        self.resultado = self.parcela1 + self.parcela2;
    }
});