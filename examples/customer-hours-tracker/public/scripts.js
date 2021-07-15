var get = function(id) { return document.getElementById(id) }
var show = function(id) { get(id).style['display'] = 'block' };
var hide = function(id) { get(id).style['display'] = 'none' };
var reset = function(id) { get(id).value = null };
var inject = function(id, html) { get(id).innerHTML = html };

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
                html += '<table><tr><th>Name</th><th>Actions</th></tr>'
                for (var i = 0; i < customers.length; i++) {
                    var customer = customers[i];
                    var name = customer['name'];
                    var jsInvoke = 'javascript:deleteCustomer(\'' + name + '\')';
                    html += '<tr>';
                    html += '<td>' + name + '</td>';
                    html += '<td><button onclick="' + jsInvoke +
                        '" class="customer-delete-button">Delete</button></td>';
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

var createCustomerInProgress = false;
var createCustomer = function(name) {
    if (createCustomerInProgress) {
        return;
    }
    createCustomerInProgress = true;
    var options = {
        method: 'POST',
        body: JSON.stringify({name: name}),
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
        })
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
