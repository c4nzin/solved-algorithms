String.prototype.toJadenCase = function () {
    var newStr = "";
    
    this.split(" ").forEach(function(s) { 
        newStr = newStr + " " + s.substring(0,1).toUpperCase() + s.substring(1); 
    });
  
    return newStr.substr(1);
  }
