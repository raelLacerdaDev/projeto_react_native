import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Users({ label, iconSource, status, onPress }) {
  const isAvailable = status === 'Disponível';

  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        {iconSource ? (
          <Image source={iconSource} style={styles.userIcon} resizeMode="contain" />
        ) : null}
      </View>
      
      <TouchableOpacity
        style={styles.cardInfo}
        accessibilityRole="button"
        onPress={onPress}
      >
        <View>
          <Text style={styles.title}>{label}</Text>
          <View style={styles.statusRow}>
            <View
              style={[
                styles.circle,
                isAvailable ? styles.availableCircle : styles.unavailableCircle,
              ]}
            />
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  cardInfo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#1D2766',
    flex: 1,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    marginLeft: 16,
    overflow: 'hidden',
  },
  iconWrapper: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  title: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    marginBottom: 4, 
  },
  status: {
    color: '#ABB1CC',
    fontSize: 13,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4, 
    marginRight: 6,
  },
  availableCircle: {
    backgroundColor: '#32BD50',
  },
  unavailableCircle: {
    backgroundColor: '#E51C44',
  },
  userIcon: {
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
  },
});