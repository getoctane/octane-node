var get = function(id) { return document.getElementById(id) }
var show = function(id) { get(id).style['display'] = 'block' };
var hide = function(id) { get(id).style['display'] = 'none' };
var reset = function(id) { get(id).value = null };
var inject = function(id, html) { get(id).innerHTML = html };
var set = function(id, value) { get(id).value = value };

// From https://stackoverflow.com/a/14794066
function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

window.onload = function() {
    console.log('Ready');
};
