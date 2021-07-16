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

var loadCustomers = function() {
    hide('add-new-customer');
    hide('current-customers');
    show('loading-customers');
    fetch('/api/customers')
        .then(function(response) {
            return response.json();
        })
        .then(function(customers) {
            console.log(customers);
            var html = '<h2>Current customers</h2>';
            if (customers.length > 0) {
                html += '<table><tr><th id="name-header">Name</th><th>Actions</th></tr>'
                for (var i = 0; i < customers.length; i++) {
                    var customer = customers[i];
                    var name = customer['name'];
                    var jsInvokeDelete = 'javascript:deleteCustomer(\'' + name + '\')';
                    var jsInvokeAddHours = 'javascript:sendCustomerHours(\'' + name + '\', false)';
                    var jsInvokeRemoveHours = 'javascript:sendCustomerHours(\'' + name + '\', true)';
                    html += '<tr>';
                    html += '<td>' + name + '</td>';
                    html += '<td>';
                    html += '<button onclick="' + jsInvokeDelete +
                        '" class="customer-delete-button">Delete</button>';
                    html += '<div class="hours">';
                    html += '<input class="hours-input" id="hours-' + name + '" value="1"/>';
                    html += '<button onclick="' + jsInvokeAddHours + '">Add hours</button>';
                    html += '<button onclick="' + jsInvokeRemoveHours + '">Remove hours</button>';
                    html += '</form>';
                    html += '</td>';
                    html += '</tr>';
                }
                html += '</table>';
            } else {
                html += '<i>No customers yet, please add one</i>';
            }
            hide('loading-customers');
            show('add-new-customer');
            inject('current-customers', html);
            show('current-customers');
        });
};

var deleteCustomerInProgress = false;
var deleteCustomer = function(name) {
    if (deleteCustomerInProgress) {
        return;
    }
    deleteCustomerInProgress = true;
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('/api/customers/' + name, options)
        .then(function(response) {
            deleteCustomerInProgress = false;
            if (response.status !== 200) {
                console.log(response);
                alert('Error deleting customer: ' +
                    response.status + ': ' + response.statusText);
                return;
            }
            loadCustomers();
        })
        .catch(function(error) {
            alert(error)
            deleteCustomerInProgress = false;
        })
};

var sendCustomerHoursInProgress = false;
var sendCustomerHours = function(name, negative) {
    if (sendCustomerHoursInProgress) {
        return;
    }
    var id = 'hours-' + name;
    var hours = get(id).value;
    if (!isInt(hours) || hours <= 0) {
        alert('Number of hours must be a positive integer!');
        sendCustomerHoursInProgress = false;
        return;
    }
    if (negative) {
        hours = hours * -1;
    }
    reset(id);
    var options = {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            hours: hours,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('/api/hours', options)
        .then(function(response) {
            sendCustomerHoursInProgress = false;
            set(id, 1);
            if (response.status !== 201) {
                console.log(response);
                alert('Error adding hours: ' +
                    response.status + ': ' + response.statusText);
            }
        })
        .catch(function(error) {
            alert(error)
            sendCustomerHoursInProgress = false;
            set(id, 1);
        });
};

var createCustomerInProgress = false;
var createCustomer = function(name) {
    if (createCustomerInProgress) {
        return;
    }
    createCustomerInProgress = true;
    var options = {
        method: 'POST',
        body: JSON.stringify({
            name: name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    fetch('/api/customers', options)
        .then(function(response) {
            createCustomerInProgress = false;
            if (response.status !== 201) {
                console.log(response);
                alert('Error creating new customer: ' +
                    response.status + ': ' + response.statusText);
                return;
            }
            loadCustomers();
        })
        .catch(function(error) {
            alert(error)
            createCustomerInProgress = false;
        });
};

window.onload = function() {
    loadCustomers();
    get('new-customer-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var name = get('new-customer-input').value;
        reset('new-customer-input');
        createCustomer(name);
    });
};
