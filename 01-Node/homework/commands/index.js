var fs = require('fs');
var request = require('request');

module.exports = {
    pwd: function (arg,done) { done(process.cwd()) },
    date: function (arg,done) { done(Date()) },
    ls: function (arg,done) {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            var out;
            files.forEach(function (file) {
              out = out + file + "\n";
            })  
            done(out);
        });
    },
    echo: function (arg,done) {
        done(arg.join(' '));
    },
    cat: function(file,done) {
        fs.readFile(file[0],'utf8', function (err, data) {
            if (err) throw err;
            done(data);
    });},

    head: function(file,done) {
        fs.readFile(file[0],'utf8', function (err, data) {
        if (err) throw err;
        var lineas = data.split("\n").slice(0,9).join("\n");
        done(lineas);
        })
    },

    tail: function(file,done) {
        fs.readFile(file[0],'utf8', function (err, data) {
        if (err) throw err;
        var lineas = data.split('\n').slice(-10).join('\n');
        done(lineas);
        })},
    
    curl: function(url,done) {
        request(url[0],function(err,response,body){
            if (err) throw err;
            done(body);
        })
    }
}