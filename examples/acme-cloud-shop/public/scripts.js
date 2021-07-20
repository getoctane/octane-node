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

var whoami = function() {
    hide('user');
    show('loading-user');
    fetch('/api/whoami')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.code !== 201 && data.code !== 200) {
                alert('Error creating new customer: ' +
                    data.code + ': ' + data.message);
                return;
            }
            console.log(data);
            hide('loading-user');
            var html = '<h2>Welcome, <span id="username">' + data['name'] + '</span></h2>';
            html += '<br/><i>View this customer in ';
            html += '<a target="_blank" href="https://cloud.getoctane.io/">';
            html += 'Octane</a></i>'
            inject('user', html);
            show('user');
        });
};

window.onload = function() {
    whoami();
};
