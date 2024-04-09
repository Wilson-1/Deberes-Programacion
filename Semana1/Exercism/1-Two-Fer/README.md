# Ejercicio: Two Fer

Este ejercicio se encuentra en la sección de TypeScript en [Exercism](https://exercism.org/), específicamente en la categoría de "Two Fer".

## Descripción

El objetivo de este ejercicio es implementar una función en TypeScript llamada `twoFer` que devuelve una cadena en el formato "One for X, one for me.", donde "X" es el nombre proporcionado como argumento. Si no se proporciona ningún nombre, se asume "you" como valor predeterminado.

El código de solución es el siguiente:

```typescript
export function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me.`;
}
