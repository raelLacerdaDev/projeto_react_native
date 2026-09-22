import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardSelect({ label, iconComponent: Icon, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <LinearGradient 
        colors={['#1D2766', '#171F52']} 
        style={styles.gradient}
      >
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
  gradient: {
    flex: 1,
    borderRadius: 8, 
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#243189',
    justifyContent: 'center',
    alignItems: 'center',
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