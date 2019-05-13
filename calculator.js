const Calculator = function() {
    let self = this;

    self.parcela1 = 0;
    self.parcela2 = 0;
    self.resultado = 0;
    
    self.$onInit = () => {
        console.log('Init calc!!!');
        console.log(self.name);
    }
}

angular.module('com.henriquebv.calculator', [
   'com.henriquevb.sum',
   'com.henriquevb.subtraction',
   'com.henriquevb.multiplication',
   'com.henriquebv.division'
])
  .component('calculatorComp', {
    templateUrl: './calculator.html',
    controller: Calculator,
    bindings: {
        name: '<'
    }
});