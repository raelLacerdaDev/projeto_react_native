import { Image, StyleSheet, Text, View } from 'react-native';
import DiscordButton from '../components/DiscordButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
        
export default function LoginScreen({ onLogin }) {
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={['#0E1647', '#0A1033']} style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/loginImage.png')}
          style={styles.loginImage}
          resizeMode="contain"
        />
        <View style={styles.loginInfo}>
          <Text style={styles.title}>Conecte-se e organize suas jogatinas</Text>
          <Text style={styles.description}>
            Crie grupos para jogar seus games favoritos com seus amigos
          </Text>
          <DiscordButton label="Entrar com Discord" onPress={onLogin} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  content: {
    alignItems: 'center',
  },
  loginInfo: {
    transform: [{ translateY: -65 }],
    width: '100%',
  },
  title: {
    fontFamily: 'Rajdhani_700Bold',
    color: '#DDE3F0',
    fontSize: 40,
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 16,
  },
    description: {
    color: '#DDE3F0',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 12,
    textAlign: 'center',
    marginBottom: 48,
  },
});