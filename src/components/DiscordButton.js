import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DiscordButton({ label, onPress }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={styles.button}
      onPress={onPress}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={require('../../assets/Discord-Logo-White 1.png')}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
      
      <View style={styles.divider} />
      
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E51C44',
    borderRadius: 8,
    height: 56,
    width: '100%',
    overflow: 'hidden',
  },
  iconWrapper: {
    width: 64,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 18,
    width: 24,
  },
  divider: {
    width: 1,
    height: '100%',
    backgroundColor: '#991F36',
  },
  label: {
    flex: 1,
    textAlign: 'center',
    color: '#DDE3F0',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25,
  },
});