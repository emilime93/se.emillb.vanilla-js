/* A SMALL LIBRARY FOR ES5 AND BELOW FOR EASIER AJAX */

function EasyAJAX() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET request
EasyAJAX.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    // Capture the outter scope, cause of how old JS works...
    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Easy-AJAX Error: ' + self.http.status);
        }
    }
    this.http.send();
}

// Make a HTTP POST request
EasyAJAX.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    let self = this;
    this.http.onload = function() {
        if (self.http.status) {
            callback(null, self.http.responseText);
        } else {
            callback('Easy-AJAX Error: ' + self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}

// Make a HTTP PUT request
EasyAJAX.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Easy-AJAX Error: ' + self.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}

// Make a HTTP DELETE request
EasyAJAX.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    // Capture the outter scope, cause of how old JS works...
    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Easy-AJAX Error: ' + self.http.status);
        }
    }
    this.http.send();
}