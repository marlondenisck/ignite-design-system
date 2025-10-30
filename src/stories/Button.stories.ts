// Importações necessárias do Storybook
import type { Meta, StoryObj } from '@storybook/react';
// Importa nosso componente Button personalizado
import { Button } from '../components/Button';

// Configuração principal do componente no Storybook
const meta: Meta<typeof Button> = {
  // Título que aparece na barra lateral do Storybook (categoria/nome)
  title: 'Components/Button',
  // O componente que será documentado
  component: Button,
  // Parâmetros de configuração
  parameters: {
    // Layout centralizado na tela do Storybook
    layout: 'centered',
  },
  // Tags especiais - 'autodocs' gera documentação automática
  tags: ['autodocs'],
};

// Exporta a configuração padrão
export default meta;
// Define o tipo das stories baseado na configuração
type Story = StoryObj<typeof meta>;

// Story padrão - mostra o botão básico
export const Default: Story = {
  // Args são as propriedades passadas para o componente
  args: {
    children: 'Button', // Texto que aparece dentro do botão
  },
};

// Story com texto personalizado
export const WithText: Story = {
  args: {
    children: 'Click me', // Texto diferente para demonstrar flexibilidade
  },
};

// Story mostrando o estado desabilitado
export const Disabled: Story = {
  args: {
    children: 'Disabled', // Texto do botão
    disabled: true, // Propriedade HTML que desabilita o botão
  },
};


// Story mostrando o botão secundário
export const Secondary: Story = {
  args: {
    children: 'Secondary Button', // Texto do botão
    variant: 'secondary', // Propriedade customizada para estilo secundário
  },
};
