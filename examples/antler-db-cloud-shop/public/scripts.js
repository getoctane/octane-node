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
            html += '<i>View this customer in ';
            html += '<a target="_blank" href="' + data['url'] + '">';
            html += 'Octane</a></i>'
            inject('user', html);
            show('user');
            show('resources');
        });
};


var adjustResourceInProgress = false;
var adjustResource = function(name, negative) {
    if (adjustResourceInProgress) {
        return;
    }
    var id = 'unit-' + name;
    var value = get(id).value;
    if (!isInt(value) || value <= 0) {
        alert('Value must be a positive integer!');
        adjustResourceInProgress = false;
        return;
    }
    if (negative) {
        value = value * -1;
    }
    reset(id);
    var options = {
        method: 'POST',
        body: JSON.stringify({
            resource: name,
            value: value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('/api/resources', options)
        .then(function(response) {
            return response.json()
        })
        .then(function(data){
            adjustResourceInProgress = false;
            set(id, 1);
            if (data.code !== 201) {
                alert('Error adjusting resource: ' +
                    data.code + ': ' + data.message);
                return;
            }
        })
        .catch(function(error) {
            alert(error)
            adjustResourceInProgress = false;
            set(id, 1);
        });
};

window.onload = function() {
    whoami();
};
