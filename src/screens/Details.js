import { MaterialIcons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import DiscordButton from '../components/DiscordButton';
import Users from '../components/Users';

export default function Details({ onBack }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1D2766', '#171F52']} style={styles.headerGradient}>
        <SafeAreaView edges={['top']}>
          <View style={styles.header}>
            <View style={styles.buttonLeft}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="Voltar para a página principal"
                style={styles.backButton}
                onPress={onBack}
              >
                <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}>Detalhes</Text>
            <View style={styles.headerRight}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="Compartilhar"
                style={styles.shareButton}
              >
                <MaterialIcons name="share" size={24} color="#E51C44" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
      
      <View style={styles.imageContent}>
        <Image
          source={require('../../assets/background.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        <View style={styles.imageTextContent}>
          <Text style={styles.imageTitle}>Lendários</Text>
          <Text style={styles.imageText}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
        </View>
      </View>

      <LinearGradient colors={['#0E1647', '#0A1033']} style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.label}>
            <Text style={styles.labelTitle}>Jogadores</Text>
            <Text style={styles.labelDescription}>Total 3</Text>
          </View>
          
          <View style={styles.GamersList}>
            <Users label="Tiago Luchtenberg" status="Disponível" iconSource={require('../../assets/user1.png')} />
            <Users label="Rodrigo Gonçalves" status="Ocupado" iconSource={require('../../assets/user2.png')} />
            <Users label="Diego Fernandes" status="Ocupado" iconSource={require('../../assets/user3.png')} />
          </View>
        </ScrollView>

        <View style={styles.btn}>
          <DiscordButton label="Entrar na partida" onPress={onBack} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 24,
  },
  buttonLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 48,
  },
  headerTitle: {
    color: '#DDE3F0',
    flex: 1,
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  headerRight: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
  },
  shareButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  imageContent: {
    height: 240,
    position: 'relative',
    width: '100%',
  },
  backgroundImage: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  imageTitle: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 28,
    marginBottom: 12,
  },
  imageText: {
    color: '#DDE3F0',
    fontSize: 13,
    lineHeight: 21,
  },
  imageTextContent: {
    paddingLeft: 24,
    paddingRight: 40,
    paddingTop: 120,
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  labelTitle: {
    fontSize: 18,
    fontFamily: 'Rajdhani_700Bold',
    color: '#DDE3F0',
  },
  labelDescription: {
    fontSize: 13,
    color: '#ABB1CC',
  },
  GamersList: {
    gap: 12,
  },
  btn: {
    paddingVertical: 16,
  },
});