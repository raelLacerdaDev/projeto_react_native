import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E51C44',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#DDE3F0',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});