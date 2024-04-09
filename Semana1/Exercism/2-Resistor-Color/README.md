# Ejercicio: Resistor Color

Este ejercicio se encuentra en la sección de TypeScript en [Exercism](https://exercism.org/), específicamente en la categoría de "Resistor Color".

## Descripción

El objetivo de este ejercicio es crear una función en TypeScript llamada `colorCode` que toma un color como cadena y devuelve su índice en un arreglo predefinido de colores. Además, se debe proporcionar un arreglo llamado `COLORS` que contiene los colores permitidos.

El código de solución es el siguiente:

```typescript
export const colorCode = (color: string): number => {
    const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const index = COLORS.indexOf(color);
    if (index === -1) {
        throw new Error('Invalid color');
    }
    return index;
};

export const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
