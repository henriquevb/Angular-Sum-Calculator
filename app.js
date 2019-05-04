let app = angular.module('com.henriquebv.app', [
    'com.henriquebv.app.calculator'
]);
 
const Calculator = function() {
    let self = this;

    self.$onInit = () => {
        console.log('Init calc!!!');
        console.log(self.name);
    };

    self.sum = () => {
        console.log('Called sum()!');
        return self.resultado = self.parcela1 + self.parcela2; 
    };
},
Sum = function() {
    let self = this;

    self.$onInit = () => {
        console.log('Init sum!!!');
    };  
};

angular.module('com.henriquebv.app.calculator',[
    'com.henriquebv.app.button'
]).component('calculatorComp', {
    templateUrl: './calculator.html',
    controller: Calculator,
    bindings: {
        name: '<'
    }
});

angular.module('com.henriquebv.app.button',[])
.component('buttonComp', {
    templateUrl: './button.html',
    controller: Sum,
    bindings: {
        name: '<',
        action: '&'
    }
});
