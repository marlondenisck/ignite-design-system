export * from './colors.js'

export * from './space.js'
export * from './radius.js'

export * from './fonts.js'
export * from './font-sizes.js'
export * from './font-weights.js'
export * from './line-heights.js'

/**
 * Node.js com ES modules. Quando você usa `"module": "nodenext"` e `"type": "module"`, o TypeScript exige que você especifique extensões de arquivo nas importações relativas, **mas** a extensão deve ser `.js` (não `.ts`), mesmo que o arquivo fonte seja TypeScript.

Isso acontece porque o TypeScript compila os arquivos `.ts` para `.js`, então as importações devem referenciar os arquivos JavaScript resultantes.

*Solução: Alterar as importações para usar extensão `.js`*

````typescript
export * from './colors.js'
````

Sim, você leu certo! Mesmo que o arquivo seja colors.ts, você deve importar como `colors.js` porque:

1. O TypeScript compila colors.ts → `colors.js`
2. Em runtime, o Node.js procura por `colors.js`
3. O TypeScript é inteligente o suficiente para mapear `./colors.js` de volta para colors.ts durante a verificação de tipos

*Por que isso acontece?*
- Com `"moduleResolution": "nodenext"` e ES modules, o TypeScript segue as regras do Node.js
- O Node.js com ES modules exige extensões explícitas nas importações relativas
- O TypeScript mantém compatibilidade com o comportamento do Node.js em runtime

Esta é uma peculiaridade do TypeScript moderno com ES modules. A importação `./colors.js` funcionará perfeitamente, mesmo que o arquivo fonte seja colors.ts.
 *
 */
