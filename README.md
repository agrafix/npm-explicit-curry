# Simple currying helpers

This is useful when you are writing JavaScript bindings for languages that are curried by default,
like purescript. Note that extensive use of currying doesn't go well with performance, so try
to use objects instead.

## Example (PureScript Binding)

```javascript
// module Foo
var curry = import('explicit-curry');
exports.someJsFun = curry.F2(function(a, b) {
    return a + b;
});
```

```purescript
module Foo

foreign import someJsFun :: Number -> Number -> Number
```
