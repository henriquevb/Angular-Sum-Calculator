const Multiplication = function () {
    let mult = this;

    mult.$onInit = () => {
        console.log('Init mult!!!');
        console.log(mult.name);
    };

        mult.action = () => {
        console.log('Called multiplication ()!');
        return mult.resultado = mult.parcela1 * mult.parcela2;
    };
}

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

