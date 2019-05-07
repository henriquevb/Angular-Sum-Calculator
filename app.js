let app = angular.module('com.henriquebv.app', [

]);
 
const Calculator = function() {
    let self = this;
    self.parcela1 = 0;
    self.parcela2 = 0;
    self.resultado = 0;
    

    self.$onInit = () => {
        console.log('Init calc!!!');
        console.log(self.name);
    };

    self.sum = () => {
        console.log('Called sum()!');
        return self.resultado = self.parcela1 + self.parcela2; 
    };

    self.subtraction = () => {
        console.log('Called subtraction()!');
        return self.resultado = self.parcela1 - self.parcela2; 
    };
},
    Division = function () {
    let div = this;

    div.$onInit = () => {
        console.log('Init div!!!');
        console.log(div.name);
    };

    div.action = () => {
        console.log('Called division ()!');
        return div.resultado = div.parcela1 / div.parcela2;
    };
},
 
Operation = function() {
    let self = this;

    self.$onInit = () => {
        console.log('Init operation!!!');
    };  
},
Multiplication = function () {
    let mult = this;

    mult.$onInit = () => {
        console.log('Init mult!!!');
        console.log(mult.name);
    };

    mult.action = () => {
        console.log('Called multiplication ()!');
        return mult.resultado = mult.parcela1 * mult.parcela2;
    };
};

angular.module('com.henriquebv.app', ['com.henriquevb.multiplication'])
.component('calculatorComp', {
    templateUrl: './calculator.html',
    controller: Calculator,
    bindings: {
        name: '<'
    }
}).component('buttonComp', {
    templateUrl: './button.html',
    controller: Operation,
    bindings: {
        name: '<',
        action: '&'
    }
}).component('buttonDivision', {
    templateUrl: './button.html',
    controller: Division,
    bindings: {
        name: '<',
        parcela1: '=',
        parcela2: '=',
        resultado: '='
    }
});

angular.module('com.henriquevb.multiplication', [
]).component('buttonMultiplication', {
    templateUrl: './button.html',
    controller: Multiplication,
    bindings: {
        name: '<',
        parcela1: '=',
        parcela2: '=',
        resultado: '='
    }
})

