const Division = function () {
    let div = this;

    div.$onInit = () => {
        console.log('Init div!!!');
        console.log(div.name);
    };

        div.action = () => {
        console.log('Called division ()!');
        return div.resultado = div.parcela1 / div.parcela2;
    };
}

angular.module('com.henriquebv.division', [])
       .component('buttonDivision', {
            templateUrl: './button.html',
            controller: Division,
            bindings: {
                name: '<',
                parcela1: '=',
                parcela2: '=',
                resultado: '='
     }
});