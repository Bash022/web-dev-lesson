//ES5 OOP library

function easyHTTP() {    //CONSTRUCTOR
    this.http = new XMLHttpRequest(); 
}

//Make http GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText);  // null = default
        } else {
            callback('Error: ' + self.http.status)
        }
    };

    this.http.send();
}

//arrow function
// function easyHTTP() {
//     this.http = new XMLHttpRequest();
// }

//Make http GET request
// easyHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);
    
//     this.http.onload = () => {
//         if(this.http.status === 200){
//             callback(null, this.http.responseText);
//         } else {
//             callback('Error: ' + this.http.status)
//         }
//     };

//     this.http.send();
// }


//Make an HTTP Post Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST',url, true);
    this.http.setRequestHeader('Content-type', 'application/json');   //application/json - because of API it depends on the web site

    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));


};



//Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
    
}


//Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
   

    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted');

        } else {
            callback('Error: ' + self.http.status);
        }
        

    }

    this.http.send();
    
}
