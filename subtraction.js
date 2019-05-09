      const Subtraction = function() {
        let self = this;
    
        self.$onInit = () => {
            console.log('Init subtraction!!!');
        };  

        self.action = () => {
            console.log('Called subtraction()!');
            return self.resultado = self.parcela1 - self.parcela2; 
        };
    }
            
    angular.module('com.henriquevb.subtraction', [])
           .component('buttonSubtraction', {
                templateUrl: './button.html',
                controller: Sum,
                bindings: {
                    name: '<',
                    action: '&',
                    parcela1: '=',
                    parcela2: '=',
                    resultado: '='
        }
    })