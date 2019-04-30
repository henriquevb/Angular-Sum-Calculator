require('./node_modules/angular/angular.min.js');
require('./node_modules/angular-mocks/angular-mocks.js');
require ('./app.js');

describe('Calculadora Angular somar as parcelas', function(){
    beforeEach(
        angular.mock.module('myApp')
      );
      
      var $controller;

      beforeEach(inject(function(_$controller_, $injector){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_('mainController', {
            $scope: {}
        }) ;
      }));

      test ('1+1 should be equal 2', function(){
          $controller.parcela1 = 12;
          $controller.parcela2 = 5;
          $controller.soma();
          expect($controller.resultado).toEqual(17);
      });
      test ('-1 + (-1) should be equal 2', function(){
        $controller.parcela1 = 22;
        $controller.parcela2 = -5;
        $controller.soma();
        expect($controller.resultado).toEqual(17);
    });
      test ('-1 + (-1) should be equal 2', function(){
        $controller.parcela1 = 'ha';
        $controller.parcela2 = 'ha';
        $controller.soma();
        expect($controller.resultado).toEqual('haha');
    });
    });
    
