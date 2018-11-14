// Register `phoneList` component, along with its associated controller and template
angular.
module('phonecatApp').component('rowanIt', {
    template:
        '<h1>----x>name: {{$ctrl.name}}</h1>'+
        '<h1>----x>name: {{$ctrl.input}}</h1>'+
        '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' +
        '<span>{{phone.name}}</span>' +
        '<p>{{phone.snippet}}</p>' +
        '</li>' +
        '</ul>',
    bindings: { name:'@' ,input:'='},
    controller: function PhoneListController($scope) {
        console.log('scope 1' );
        console.log('scope ' +$scope.name);

        this.$onInit=function(){
            // do all your initializations here.
            // create a local scope object for this component only. always update that scope with bindings. and use that in views also.
            console.log('anydata v3 ');
            console.log('anydata' +this.name);



        };

        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }




});