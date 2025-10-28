# 🎡 Jogo da Roleta

Um jogo de roleta europeia interativo desenvolvido com HTML5, CSS3 e JavaScript. Interface moderna com efeitos glassmorphism e design totalmente responsivo.

## 🎮 Funcionalidades

### 🎯 Jogo Completo

- **Roleta Europeia Oficial**: 37 números (0-36) na sequência correta
- **Animação Realista**: Rotação suave com 10-15 voltas completas
- **Sistema de Apostas**: Três tipos de apostas com multiplicadores corretos
- **Gestão de Saldo**: Sistema completo de créditos

### 📱 Responsividade

- **Desktop**: Layout otimizado para telas grandes (>900px)
- **Tablet**: Adaptação para telas médias (600px-900px)
- **Mobile**: Interface compacta para celulares (<600px)
- **Cálculo Dinâmico**: Tamanho da roleta ajustado automaticamente

## 🎲 Tipos de Apostas

| Tipo         | Descrição                          | Multiplicador | Probabilidade |
| ------------ | ---------------------------------- | ------------- | ------------- |
| **Número**   | Aposta em número específico (0-36) | 35:1          | 2.7%          |
| **Cor**      | Vermelho ou Preto                  | 1:1           | 48.6%         |
| **Paridade** | Par ou Ímpar                       | 1:1           | 48.6%         |

### 💰 Sistema de Pagamentos

- **Fórmula**: `Ganho Total = Valor Apostado + (Valor Apostado × Multiplicador)`
- **Número Exato**: Aposta R$ 10 → Ganha R$ 360 (R$ 10 + R$ 350)
- **Cor/Paridade**: Aposta R$ 10 → Ganha R$ 20 (R$ 10 + R$ 10)
- **Zero**: Não é par nem ímpar (casa sempre ganha)

### 2️⃣ Como Jogar

1. **Selecione o Tipo**: Escolha entre Número, Cor ou Par/Ímpar
2. **Faça sua Escolha**:
   - Número: Digite de 0 a 36
   - Cor: Selecione Vermelho ou Preto
   - Paridade: Selecione Par ou Ímpar
3. **Defina o Valor**: Insira o valor da aposta
4. **Gire a Roleta**: Clique em "Girar Roleta"
5. **Aguarde o Resultado**: Veja onde a bolinha para!

## 🔧 Tecnologias

### Frontend

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados com:

  - Glassmorphism effects
  - CSS Grid Layout
  - Media Queries responsivas
  - Conic-gradient para pizza chart
  - Animações CSS3

- **JavaScript ES6+**: Lógica do jogo com:
  - Manipulação DOM moderna
  - Event listeners
  - Cálculos matemáticos
  - Interface dinâmica

## 🚀 Possíveis Melhorias

### 🔮 Futuras Implementações

- [ ] Histórico de jogadas
- [ ] Estatísticas detalhadas
- [ ] Modo multiplayer
- [ ] Apostas combinadas
- [ ] Sons e efeitos
- [ ] Salvamento local
- [ ] Diferentes tipos de roleta
