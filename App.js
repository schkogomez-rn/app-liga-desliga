import { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const [lightsOn, setLightsOn] = useState(0);
  const [lightsOff, setLightsOff] = useState(0);

  function toggleLight() {
    if (isOn) {
      setLightsOff((count) => count + 1);
    } else {
      setLightsOn((count) => count + 1);
    }
    setIsOn((current) => !current);
  }

  function resetCounter() {
    setLightsOn(0);
    setLightsOff(0);
  }

  return (
    <View style={[styles.screen, isOn && styles.screenOn]}>
      <StatusBar barStyle={isOn ? 'dark-content' : 'light-content'} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>ATIVIDADE • CIÊNCIAS</Text>
            <Text style={styles.title}>Liga e{ '\n' }desliga</Text>
          </View>
          <View style={[styles.statusPill, isOn && styles.statusPillOn]}>
            <View style={[styles.statusDot, isOn && styles.statusDotOn]} />
            <Text style={[styles.statusText, isOn && styles.statusTextOn]}>
              {isOn ? 'ACESA' : 'APAGADA'}
            </Text>
          </View>
        </View>

        <View style={styles.lampArea}>
          <View style={[styles.glow, isOn && styles.glowOn]} />
          <Text style={[styles.bulb, isOn && styles.bulbOn]}>
            {isOn ? '💡' : '🔌'}
          </Text>
          <View style={[styles.lampBase, isOn && styles.lampBaseOn]} />
          <Text style={[styles.lampCaption, isOn && styles.lampCaptionOn]}>
            {isOn ? 'Tem luz por aqui!' : 'Está tudo escuro'}
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isOn ? 'Apagar lâmpada' : 'Acender lâmpada'}
          onPress={toggleLight}
          style={({ pressed }) => [styles.toggleButton, isOn && styles.toggleButtonOn, pressed && styles.pressed]}
        >
          <Text style={[styles.toggleIcon, isOn && styles.toggleIconOn]}>
            {isOn ? '⏻' : '✦'}
          </Text>
          <Text style={[styles.toggleText, isOn && styles.toggleTextOn]}>
            {isOn ? 'APAGAR LÂMPADA' : 'ACENDER LÂMPADA'}
          </Text>
        </Pressable>

        <View style={styles.counterCard}>
          <View style={styles.counterHeader}>
            <Text style={styles.counterTitle}>Minha contagem</Text>
            <Pressable onPress={resetCounter} hitSlop={10} accessibilityRole="button" accessibilityLabel="Zerar contagem">
              <Text style={styles.resetText}>Zerar</Text>
            </Pressable>
          </View>
          <View style={styles.counterRow}>
            <View style={styles.counterItem}>
              <Text style={styles.counterEmoji}>☀️</Text>
              <Text style={styles.counterNumber}>{lightsOn}</Text>
              <Text style={styles.counterLabel}>vezes acesa</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.counterItem}>
              <Text style={styles.counterEmoji}>🌙</Text>
              <Text style={styles.counterNumber}>{lightsOff}</Text>
              <Text style={styles.counterLabel}>vezes apagada</Text>
            </View>
          </View>
          <Text style={styles.hint}>Toque no botão para mudar o estado da lâmpada.</Text>
        </View>

        <Text style={[styles.footer, isOn && styles.footerOn]}>CADA TOQUE CONTA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#111827' },
  screenOn: { backgroundColor: '#FFF8E7' },
  content: { flex: 1, width: '100%', maxWidth: 520, alignSelf: 'center', paddingHorizontal: 26, paddingTop: 58, paddingBottom: 22 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  eyebrow: { color: '#A5ADBC', fontSize: 11, fontWeight: '700', letterSpacing: 2 },
  title: { color: '#F8FAFC', fontSize: 36, lineHeight: 40, fontWeight: '800', marginTop: 10, letterSpacing: -1 },
  statusPill: { flexDirection: 'row', alignItems: 'center', gap: 7, borderRadius: 20, backgroundColor: '#263244', paddingHorizontal: 12, paddingVertical: 9, marginTop: 7 },
  statusPillOn: { backgroundColor: '#FFE8A3' },
  statusDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: '#98A2B3' },
  statusDotOn: { backgroundColor: '#D18A00' },
  statusText: { fontSize: 10, fontWeight: '800', letterSpacing: 1, color: '#CBD5E1' },
  statusTextOn: { color: '#845400' },
  lampArea: { flex: 1, minHeight: 230, alignItems: 'center', justifyContent: 'center' },
  glow: { position: 'absolute', width: 210, height: 210, borderRadius: 110, backgroundColor: '#1C2636' },
  glowOn: { backgroundColor: '#FFE9A6', transform: [{ scale: 1.12 }] },
  bulb: { fontSize: 112, opacity: 0.58 },
  bulbOn: { opacity: 1 },
  lampBase: { width: 38, height: 8, borderRadius: 5, backgroundColor: '#626C7C', marginTop: -12 },
  lampBaseOn: { backgroundColor: '#D99B25' },
  lampCaption: { marginTop: 18, fontSize: 15, fontWeight: '600', color: '#A5ADBC' },
  lampCaptionOn: { color: '#8A6418' },
  toggleButton: { minHeight: 62, borderRadius: 18, backgroundColor: '#F6B93B', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, elevation: 3 },
  toggleButtonOn: { backgroundColor: '#273449' },
  pressed: { opacity: 0.82, transform: [{ scale: 0.985 }] },
  toggleIcon: { fontSize: 20, color: '#362400', fontWeight: '700' },
  toggleIconOn: { color: '#FFE29A' },
  toggleText: { fontSize: 13, color: '#362400', fontWeight: '800', letterSpacing: 1 },
  toggleTextOn: { color: '#FFF8E7' },
  counterCard: { backgroundColor: '#1B2535', borderRadius: 22, padding: 20, marginTop: 20 },
  counterHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 17 },
  counterTitle: { color: '#F8FAFC', fontSize: 16, fontWeight: '700' },
  resetText: { color: '#F6B93B', fontSize: 13, fontWeight: '700', padding: 4 },
  counterRow: { flexDirection: 'row', alignItems: 'center' },
  counterItem: { flex: 1, alignItems: 'center' },
  counterEmoji: { fontSize: 20, marginBottom: 5 },
  counterNumber: { color: '#FFFFFF', fontSize: 32, fontWeight: '800', fontVariant: ['tabular-nums'] },
  counterLabel: { color: '#A5ADBC', fontSize: 12, marginTop: 2 },
  divider: { width: 1, height: 64, backgroundColor: '#354153' },
  hint: { color: '#8490A2', fontSize: 11, textAlign: 'center', marginTop: 17 },
  footer: { textAlign: 'center', color: '#606D7F', fontSize: 10, fontWeight: '700', letterSpacing: 2, marginTop: 17 },
  footerOn: { color: '#A1864B' },
});
