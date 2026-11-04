// useState: "memória" do componente. Quando o valor muda, a tela é redesenhada.
import { useState } from 'react';
// Componentes básicos do React Native
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  // Estado da lâmpada: false = apagada, true = acesa
  const [acesa, setAcesa] = useState(false);

  // Estado do contador: quantas vezes a lâmpada foi acesa
  const [contador, setContador] = useState(0);

  // Função chamada toda vez que o usuário mexe na chave
  function alternarLuz(novoValor) {
    // Guarda o novo estado (ligado/desligado)
    setAcesa(novoValor);

    // Se a chave foi ligada, soma 1 no contador
    if (novoValor) {
      setContador(contador + 1);
    }
  }

  return (
    // Fundo da tela: claro se a luz está acesa, escuro se apagada
    <View style={[styles.tela, acesa ? styles.telaAcesa : styles.telaApagada]}>
      {/* Lâmpada: mostra uma imagem diferente conforme o estado */}
      <Text style={styles.lampada}>{acesa ? '💡' : '🌑'}</Text>

      {/* Texto que informa o estado atual */}
      <Text style={[styles.texto, acesa && styles.textoEscuro]}>
        {acesa ? 'Luz acesa' : 'Luz apagada'}
      </Text>

      {/* Chave liga/desliga: value é o estado atual, onValueChange é chamado ao tocar */}
      <Switch value={acesa} onValueChange={alternarLuz} />

      {/* Contador de quantas vezes a luz foi acesa */}
      <Text style={[styles.texto, acesa && styles.textoEscuro]}>
        Acendeu {contador} {contador === 1 ? 'vez' : 'vezes'}
      </Text>
    </View>
  );
}

// Estilos (aparência) dos componentes
const styles = StyleSheet.create({
  tela: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 24 },
  telaApagada: { backgroundColor: '#111827' },
  telaAcesa: { backgroundColor: '#FFF8E7' },
  lampada: { fontSize: 120 },
  texto: { fontSize: 22, fontWeight: '600', color: '#F8FAFC' },
  textoEscuro: { color: '#111827' },
});
