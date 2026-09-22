import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardTag({ label, iconComponent: Icon, selected = false, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      style={[styles.buttonContainer, !selected && styles.unselectedOpacity]}
    >
      <LinearGradient
        colors={['#1D2766', '#171F52']}
        style={[styles.gradient, selected && styles.selectedBorder]}
      >
        <View style={styles.selectionIndicator}>
          {selected && (
            <View style={styles.indicatorDot} />
          )}
        </View>
        
        <View style={styles.iconWrapper}>
          {Icon ? <Icon width={48} height={48} /> : null}
        </View>
        
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    height: 120,
    width: 104,
    marginBottom: 40,
  },
  unselectedOpacity: {
    opacity: 0.5,
  },
  gradient: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#243189',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedBorder: {
    borderColor: '#E51C44', // Opcional: destaca a borda quando selecionado
  },
  selectionIndicator: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  indicatorDot: {
    width: 8,
    height: 8,
    backgroundColor: '#E51C44',
    borderRadius: 2,
  },
  iconWrapper: {      
    marginBottom: 16,
  },
  label: {
    textAlign: 'center',
    color: '#DDE3F0',
    fontSize: 15,
    fontFamily: 'Rajdhani_700Bold',
  },
});