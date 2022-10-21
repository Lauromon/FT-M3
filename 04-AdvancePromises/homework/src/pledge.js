'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise (executor){
    this._state = 'pending';
    this._value ;
    var esto = this;
    var resolve = function(data){
        return esto._internalResolve(data);
    };
    var reject = function(data){
        return esto._internalReject(data);
    };

    if(typeof executor !== 'function'){
        throw TypeError('El arg executor tiene que ser function')
    };
    
    executor(resolve,reject);
};


$Promise.prototype._internalResolve = function(data){
    if(this._state === 'pending'){
        this._state = 'fulfilled',
        this._value = data
    };
};
$Promise.prototype._internalReject = function(data){
    if(this._state === 'pending'){
        this._state = 'rejected',
        this._value = data
    };
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
