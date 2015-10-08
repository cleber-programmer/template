### $format

Formatador de texto a funcao curry

```javascript
this.Atomic(['$format'], function ($format) {
  console.log($format('Nome: {0}, Data de Nascimento: {1:99/99/9999}', ['cleber.programmer', '25011988']));
});
```
