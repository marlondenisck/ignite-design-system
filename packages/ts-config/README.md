# @ignite-ui/ts-config

Configurações TypeScript compartilhadas para o Ignite Design System.

## Configurações Disponíveis

### `base.json`
Configuração base para bibliotecas JavaScript/TypeScript com ES modules e Node.js moderno.

**Uso:**
```json
{
  "extends": "@ignite-ui/ts-config/base.json"
}
```

### `react.json`
Configuração para bibliotecas React, extende `base.json` com JSX e tipos DOM.

**Uso:**
```json
{
  "extends": "@ignite-ui/ts-config/react.json"
}
```

### `web.json`
Configuração para aplicações web front-end.

**Uso:**
```json
{
  "extends": "@ignite-ui/ts-config/web.json"
}
```

### `node.json`
Configuração para aplicações Node.js e ferramentas CLI.

**Uso:**
```json
{
  "extends": "@ignite-ui/ts-config/node.json"
}
```

## Recursos Incluídos

- ✅ ES Modules com `nodenext`
- ✅ Strict mode habilitado
- ✅ Source maps e declaration maps
- ✅ Verificação rigorosa de tipos
- ✅ Otimizado para monorepos
- ✅ Compatível com bundlers modernos