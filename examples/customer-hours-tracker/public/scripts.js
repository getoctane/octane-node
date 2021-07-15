var page = document;
page.show = function(id) { page.getElementById(id).style['display'] = 'block' };
page.hide = function(id) { page.getElementById(id).style['display'] = 'none' };

var loadCustomers = function() {
    page.show('loading-customers');
    fetch('/api/customers')
        .then(function(response) {
            return response.json()
        })
        .then(function(customers) {
            console.log(customers);
            page.hide('loading-customers');
        });
};

window.onload = function() {
    loadCustomers();
};
