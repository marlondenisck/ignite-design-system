# @ignite-ui/eslint-config

Configuração ESLint compartilhada para o Ignite Design System.

## Configurações Disponíveis

### `index.js` (Base)
Configuração base para JavaScript/TypeScript com ESLint v9.

**Uso:**
```js
// eslint.config.js
import config from '@ignite-ui/eslint-config'

export default config
```

### `react.js`
Configuração para projetos React, estende a configuração base.

**Uso:**
```js
// eslint.config.js
import config from '@ignite-ui/eslint-config/react.js'

export default config
```

## Recursos Incluídos

- ✅ ESLint v9 (flat config)
- ✅ Regras recomendadas do `@eslint/js`
- ✅ Suporte para ES modules
- ✅ Configurações específicas para React
- ✅ Ignora automaticamente `dist/`, `node_modules/`, etc.

## Scripts Recomendados

Adicione aos seus `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src/**/*.{js,ts,tsx} --fix",
    "lint:check": "eslint src/**/*.{js,ts,tsx}"
  }
}
```