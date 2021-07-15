var get = function(id) { return document.getElementById(id); }
var show = function(id) { get(id).style['display'] = 'block' };
var hide = function(id) { get(id).style['display'] = 'none' };
var reset = function(id) { get(id).value = null };

var loadCustomers = function() {
    hide('add-new-customer');
    show('loading-customers');
    fetch('/api/customers')
        .then(function(response) {
            return response.json();
        })
        .then(function(customers) {
            console.log(customers);
            hide('loading-customers');
            show('add-new-customer');
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
