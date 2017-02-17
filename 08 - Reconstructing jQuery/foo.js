(function(name, context, definition) {
  context[name] = definition()
})('foo', window, function() {

  var classOnly = /^\.([\w\-]+)$/
  var doc = document
  var win = window


  function toArray(arr) {
    return [].slice.call(arr, 0)
  }

  // Check if an element is an ancestor
  function isAncestor(element, container) {
    return (container.compareDocumentPosition(element) & 16) == 16
  }


  // Flatten array to one level
  // Useful when we have array
  // within array
  function flatten(ar) {
      var r = []
      for (var i = 0, l = ar.length; i < l; ++i) {
          if(arrayLike(ar[i])) {
              r = r.concat(ar[i])
          } else  {
              r[i] = ar[i]
          }
      }
      // return uniq(r)
      return r;
  }

  // Check if object is not a plain object type.
  // Plain objects dont have the length property
  function arrayLike(o) {
      return (typeof o === 'object' && isFinite(o.length))
  }

  // Check if the element is of
  // valid node type (document or any html tag)
  function isNode(el) {
      var t
      return el && typeof el === 'object' && (t = el.nodeType) && (t == 1 || t == 9)
  }

  function normalizeRoot(root) {
      if (!root) return doc
      if (typeof root == 'string') return query(root)[0]
      if (!root['nodeType'] && arrayLike(root)) return root[0]
      return root
  }

  function query(selector, context) {
    var rootElement = normalizeRoot(context)
    if (!rootElement || !selector) return []

    // if selector is a window or a valid node
    if (selector === win || isNode(selector)) {
      return !context || (selector !== win && isNode(rootElement) && isAncestor(selector, rootElement)) ? [selector] : []
    }

    // if selector is like an array, flatten it and return
    if (selector && arrayLike(selector)) return flatten(selector)


    if (doc.getElementsByClassName && selector == 'string' && (m = selector.match(classOnly))) {
      return toArray((rootElement).getElementsByClassName(m[1]))
    }
    // using duck typing for 'a' window or 'a' document (not 'the' window || document)
    if (selector && (selector.document || (selector.nodeType && selector.nodeType == 9))) {
      return !context ? [selector] : []
    }

    // convert results into an array and return
    return toArray((rootElement).querySelectorAll(selector))
  }



  function Foo(elements) {
    this.length = 0
    if (elements) {
        elements = typeof elements !== 'string' && !elements.nodeType && typeof elements.length !== 'undefined' ?
        elements :
        [elements]
        this.length = elements.length
        for (var i = 0; i < elements.length; i++) {
          this[i] = elements[i]
        }
    }
  }

  Foo.prototype = {
    map: function() {

    },
    html: function(value) {
      return this.each(function(obj) {
        if (value === undefined) {
          return obj.innerHTML;
        }
        obj.innerHTML = value;
      });
    },
    each: function(callback) {
      var length = this.length;
      for(var i = 0; i<length; i++) {
        callback.call(this[i], this[i], i);
      }
      return this;
    },
    addClass: function(classname) {
      return this.each(function(obj) {
        obj.className += ' ' + classname;
      });
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(this.length-1);
    },
    eq: function(idx) {
      return foo(this[idx])
    }
  };

  function foo(selector, context) {
    var elements = query(selector, context)
    return new Foo(elements)
  }

  return foo
})
