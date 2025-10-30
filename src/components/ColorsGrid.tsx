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

// Função para determinar se usar texto branco ou preto baseado na luminância
function shouldUseWhiteText(hexColor: string): boolean {
  // Se não tem cor definida, usa texto preto
  if (!hexColor || hexColor === '') return false
  
  const hex = hexColor.replace('#', '')
  
  // Se não é um hex válido, usa texto preto
  if (hex.length !== 3 && hex.length !== 6) return false
  
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16) 
  const b = parseInt(hex.substring(4, 6), 16)
  
  // Calcula a luminância relativa (WCAG)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  
  // Para cores escuras (luminância baixa), usa texto branco
  // Ajustei o threshold para 0.6 para ser mais sensível
  return luminance < 0.6
}

export function ColorsGrid() {
  return (
    <div>
      {colorTokens.map((tokenName) => {
        const colorValue = getCSSVariableValue(tokenName)
        
        // Lógica especial para determinar cor do texto
        let textColor = '#000' // padrão: texto preto
        
        if (colorValue) {
          // Para cores específicas, força texto branco
          if (tokenName === 'black' || colorValue === '#000') {
            textColor = '#FFF'
          } else if (shouldUseWhiteText(colorValue)) {
            textColor = '#FFF'
          }
        }
        
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
                color: textColor,
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