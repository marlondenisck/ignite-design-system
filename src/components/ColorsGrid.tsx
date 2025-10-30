import { getContrast } from 'polished'

// Lista dos nomes das cores definidas no globals.css
const colorTokens = [
  'white',
  'black',
  'gray-100',
  'gray-200', 
  'gray-400',
  'gray-500',
  'gray-600',
  'gray-700',
  'gray-800',
  'gray-900',
  'ignite-300',
  'ignite-500',
  'ignite-700',
  'ignite-900',
]

// Função para pegar o valor da variável CSS
function getCSSVariableValue(variableName: string): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--color-${variableName}`)
    .trim()
}



export function ColorsGrid() {
  return (
    <div>
      {colorTokens.map((tokenName) => {
        const colorValue = getCSSVariableValue(tokenName)
        
        return (
          <div 
            key={tokenName} 
            style={{ 
              backgroundColor: `var(--color-${tokenName})`, 
              padding: '2rem' 
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: getContrast(colorValue, '#FFF') < 3.5 ? '#000' : '#FFF',
              }}
            >
              <strong>--color-{tokenName}</strong>
              <span>{colorValue || `var(--color-${tokenName})`}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}