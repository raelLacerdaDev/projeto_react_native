import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { MaterialIcons } from '@expo/vector-icons';

import LoginScreen from './src/screens/LoginScreen';
import Agendar from './src/screens/Agendar';
import Details from './src/screens/Details';
import CardSelect from './src/components/CardSelect';
import Matches from './src/components/Matches';

import DiversaoIcon from './assets/Diversao.svg';
import DueloIcon from './assets/Duelo.svg';
import RanqueadaIcon from './assets/Ranqueada.svg';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');
  
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <>
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
        <StatusBar style="light" />
      </>
    );
  }

  if (currentScreen === 'agendar') {
    return <Agendar onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'details') {
    return <Details onBack={() => setCurrentScreen('home')} />;
  }

  return (
    <LinearGradient colors={['#0E1647', '#0A1033']} style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Image
            source={require('./assets/profile-pic.png')}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.title}>
              Olá, <Text style={styles.highlight}>Tiago</Text>
            </Text>
            <Text style={styles.description}>Hoje é dia de vitória</Text>
          </View>
          <TouchableOpacity 
            accessibilityRole="button"
            accessibilityLabel="Abrir tela de agendamento"
            style={styles.button}
            onPress={() => setCurrentScreen('agendar')}
          >
            <MaterialIcons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={styles.cardScroll}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardContent}
        >
          <CardSelect label="Ranqueada" iconComponent={RanqueadaIcon} />
          <CardSelect label="Duelo 1x1" iconComponent={DueloIcon} />
          <CardSelect label="Diversão" iconComponent={DiversaoIcon} />
          <CardSelect label="Outros" iconComponent={DiversaoIcon} />
        </ScrollView>

        <View style={styles.titleContainer}>
          <Text style={styles.titleContent}>Partidas agendadas</Text>
          <Text style={styles.description}>Total 6</Text>
        </View>

        <ScrollView
          style={styles.listContent}
          contentContainerStyle={styles.listContentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Matches onPress={() => setCurrentScreen('details')} label="Lendários" date="18/06 às 21:00h" type="Ranqueada" member="Anfitrião" iconSource={require('./assets/LOL.png')} />
          <Matches onPress={() => setCurrentScreen('details')} label="Yeah, boy" date="23/06 às 19:00h" type="Diversão" member="Visitante" iconSource={require('./assets/RD2.png')} />
          <Matches onPress={() => setCurrentScreen('details')} label="Rumo ao topo" date="20/06 às 09:00h" type="1x1" member="Anfitrião" iconSource={require('./assets/CS.png')} />
          <Matches onPress={() => setCurrentScreen('details')} label="Bora queimar tudo" date="20/06 às 14:20h" type="Ranqueada" member="Anfitrião" iconSource={require('./assets/APEX.png')} />
          <Matches onPress={() => setCurrentScreen('details')} label="Valorosos" date="18/06 às 21:00h" type="Diversão" member="Anfitrião" iconSource={require('./assets/VALORANT.png')} />
          <Matches onPress={() => setCurrentScreen('details')} label="Rolezão Monstro" date="28/06 às 18:00h" type="Diversão" member="Visitante" iconSource={require('./assets/GTA.png')} />
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: '#DDE3F0',
    fontSize: 24,
    fontFamily: 'Rajdhani_500Medium',
    lineHeight: 24,
  },
  highlight: {
    fontFamily: 'Rajdhani_700Bold',
  },
  description: {
    color: '#ABB1CC',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 17,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 24, 
    marginBottom: 24,
    alignItems: 'center',
  },
  avatar: {
    marginRight: 24,
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: '#243189',
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: '#E51C44',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  cardContent: {
    flexDirection: 'row',
    gap: 8,
  },
  cardScroll: {
    flexGrow: 0,
    marginBottom: 20,
  },
  userInfo: {
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  listContent: {
    flex: 1,
  },
  listContentContainer: {
    paddingBottom: 24,
    gap: 16,
  },
  titleContent: {
    color: '#DDE3F0',
    fontSize: 18,
    fontFamily: 'Rajdhani_700Bold',
  },
});