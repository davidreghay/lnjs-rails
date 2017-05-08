// Copyright (C) 2015, 2016, David Reghay

// don't step on others' toes!

console.log('this is new and only in dev')
// some comment

console.log('oh another comment')

if(typeof Logger === 'undefined') { 
    var Logger = function(level) {
        //private
        var self = this;
        var _level = typeof level !== 'undefined' ? level : 'all';
        var levels = ['error', 'warn', 'info', 'debug', 'log'];
        var priority = {
            off: -1,
            all : 10
        };
        var timestamp = function() {
            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var date = time.getDate();
            var hour = time.getHours();
            var nothing = null;
            var min = time.getMinutes();
            var sec = time.getSeconds();
            var mill = time.getMilliseconds();
            return ("" + month + '-' + date + '-' + year + ' ' + hour + ':' + min + '.' + sec + ',' + mill);
        };
        
        this.e = Math.E;
        levels.forEach(function(l, i) {
            self[l] = function(data) {
                if(typeof console !== 'undefined' && priority[l] <= priority[_level]) {
                    var caller = self[l].caller !== null ? '[' + self[l].caller.name + ']' : '[Main]';
                    if(caller.length === 2) caller = '[anonymous_function]';
                    console[l](timestamp() + ' ' + caller + ' ' + l.toUpperCase() + ' - ' + data);
                }
            };
            priority[l] = i;
        });

        console.log('B-999 is where it\s at')
    };
}