### $memoize

Uma técnica útil para otimização de cache os resultados das chamadas de função de tal forma que as pesquisas longos ou cálculos recursivos caros pode ser minimizado sempre que possível

```javascript
$memoize(function (a) {
  return Function('x', $reduce(steps, a, $lambda('(a, b) => b(a)')));
});
```
