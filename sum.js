const Sum = function() {
    let self = this;

    self.$onInit = () => {
        console.log('Init sum!!!');
    };  
    self.action = () => {
        console.log('Called sum()!');
        return self.resultado = self.parcela1 + self.parcela2; 
    };
}
        
angular.module('com.henriquevb.sum', [])
       .component('buttonSum', {
            templateUrl: './button.html',
            controller: Sum,
            bindings: {
                name: '<',
                parcela1: '=',
                parcela2: '=',
                resultado: '='
    }
})