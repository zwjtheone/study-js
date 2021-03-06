

(function(){
  var root = this;
  function watch(obj, name, func){
    var value = obj[name];

    Object.defineProperty(obj, name, {
      get: function() {
        return value;
      },
      set: function(newValue) {
        value = newValue;
        func(value)
      }
    });

    if (value) obj[name] = value
  }

  this.watch = watch;
})()
