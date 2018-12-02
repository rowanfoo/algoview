

var mainserverurl='http://192.168.0.8:9000';
var algoserverurl='http://192.168.0.8:8005';



function setconfig($rootScope){
console.log('----setconfig-----');

    $rootScope.config={
        wishlist : mainserverurl + '/stock/wishlist',
        downfour : algoserverurl + '/fallfour',
        data : mainserverurl + '/data',
        codetech:  algoserverurl + '/codetech',
        rsi : algoserverurl + '/rsi',
        conseqfall : algoserverurl + '/conseqfall',
        vol : algoserverurl + '/vol',
        largefall : algoserverurl + '/largefall',
        reversal : algoserverurl + '/reversal',
        codetech : algoserverurl + '/codetech'

    };


}

