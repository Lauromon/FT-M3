'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise (executor){
    this._state = 'pending';
    this._handlerGroups = [];
    
    if(typeof executor !== 'function'){
        throw TypeError('El arg executor tiene que ser function')
    };
    /* var resolve = function(data){
        return this._internalResolve(data).bind(this);
    };
    var reject = function(data){
        return this._internalReject(data).bind(this);
    }; */


    executor(this._internalResolve.bind(this),this._internalReject.bind(this));
};


$Promise.prototype._internalResolve = function(data){
    if(this._state === 'pending'){
        this._state = 'fulfilled',
        this._value = data
        this._callHandlers()
    };
};

$Promise.prototype._internalReject = function(data){
    if(this._state === 'pending'){
        this._state = 'rejected',
        this._value = data
        this._callHandlers()
    };
};

$Promise.prototype.then = function(successCb,errorCb){
    if(typeof successCb !== 'function'){ successCb = false }
    if(typeof errorCb !== 'function'){ errorCb = false}
    this._handlerGroups.push({successCb,errorCb})
    if(this._state !=='pending'){
        this._callHandlers()
    }
};

$Promise.prototype._callHandlers = function(){
    while(this._handlerGroups.length){
        var handlf = this._handlerGroups.shift()
        if (this._state ==='fulfilled'){
            handlf.successCb && handlf.successCb(this._value);
        }
        else{
            handlf.errorCb && handlf.errorCb(this._value);
        }
    }
};

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
