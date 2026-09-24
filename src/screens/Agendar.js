import { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardTag from '../components/CardTag';
import DiversaoIcon from '../../assets/Diversao.svg';
import DueloIcon from '../../assets/Duelo.svg';
import RanqueadaIcon from '../../assets/Ranqueada.svg';
import { useFonts, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import Button from '../components/Button';

export default function Agendar({ onBack }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const scrollViewRef = useRef(null);
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
  });

  return (
    <>
      <LinearGradient colors={['#1D2766', '#171F52']}>
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
            <Text style={styles.headerTitle}>Agendar partida</Text>
            <View style={styles.headerRight} />
          </View>
        </SafeAreaView>
      </LinearGradient>
      <LinearGradient colors={['#0E1647', '#0A1033']} style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardContainer}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.content}>
              <Text style={styles.title}>Categoria</Text>

              <ScrollView
                horizontal
                style={styles.categoryList}
                contentContainerStyle={styles.categoryContent}
                showsHorizontalScrollIndicator={false}
              >
                <CardTag
                  label="Ranqueada"
                  iconComponent={RanqueadaIcon}
                  selected={selectedCategory === 'ranqueada'}
                  onPress={() => setSelectedCategory('ranqueada')}
                />
                <CardTag
                  label="Duelo 1x1"
                  iconComponent={DueloIcon}
                  selected={selectedCategory === 'duelo'}
                  onPress={() => setSelectedCategory('duelo')}
                />
                <CardTag
                  label="Diversão"
                  iconComponent={DiversaoIcon}
                  selected={selectedCategory === 'diversao'}
                  onPress={() => setSelectedCategory('diversao')}
                />
                <CardTag
                  label="Outros"
                  iconComponent={DiversaoIcon}
                  selected={selectedCategory === 'outros'}
                  onPress={() => setSelectedCategory('outros')}
                />
              </ScrollView>
              <View style={styles.select}>
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityLabel="Selecionar servidor"
                  style={styles.selectButton}
                >
                  <View style={styles.imageContainer} />
                  <Text style={styles.buttonText}>Selecione um servidor</Text>
                  <View style={styles.buttonRight}>
                    <MaterialIcons name="chevron-right" size={24} color="#ABB1CC" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.form}>
                <View style={styles.formLabel}>
                  <Text style={styles.title}>Dia e mês</Text>
                  <Text style={styles.title}>Hora e minuto</Text>
                </View>
                <View style={styles.formRow}>
                  <View style={styles.inputGroup}>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="DD"
                      keyboardType="numeric"
                    />
                    <Text style={styles.dateDescription}>/</Text>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="MM"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputGroup}>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="HH"
                      keyboardType="numeric"
                    />
                    <Text style={styles.dateDescription}>:</Text>
                    <TextInput
                      style={styles.dateInput}
                      placeholder="MM"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.formLabel}>
                  <Text style={styles.title}>Descrição</Text>
                  <Text style={styles.description}>Max 100 caracteres</Text>
                </View>
                <TextInput
                  multiline
                  onFocus={() => {
                    setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
                  }}
                  style={styles.descriptionInput}
                  textAlignVertical="top"
                />
                <Button label="Agendar" onPress={onBack} />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 64,
    paddingHorizontal: 24,
  },
  headerRight: {
    width: 48,
  },
  backButton: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  headerTitle: {
    color: '#DDE3F0',
    flex: 1,
    fontSize: 20,
    fontFamily: 'Rajdhani_700Bold',
    textAlign: 'center',
  },
  content: {
    marginTop: 32,
  },
  title: {
    color: '#DDE3F0',
    fontSize: 18,
    fontFamily: 'Rajdhani_700Bold',
    marginBottom: 15,
  },
  categoryContent: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 40,
  },
  dateDescription: {
    color: '#ABB1CC',
    fontSize: 13,
    marginHorizontal: 5,
  },
    description: {
    color: '#ABB1CC',
    fontSize: 13,
  },
  selectButton: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: '#243189',
    borderRadius: 8,
    flexDirection: 'row',
    height: 68,
    marginBottom: 28,
  },
  imageContainer: {
    backgroundColor: '#1D2766',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#243189',
    height: 68,
    width: 64,
  },
  buttonText: {
    color: '#DDE3F0',
    flex: 1,
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonRight: {
    alignItems: 'center',
    width: 56,
  },
  formLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    },
  descriptionInput: {
    backgroundColor: '#1D2766',
    height: 95,
    borderRadius: 8,  
    borderWidth: 1,
    borderColor: '#243189',
    color: '#DDE3F0', 
    padding: 16,
    marginBottom: 56,
      },
    dateInput: {
      backgroundColor: '#1D2766',
      height: 48,  
      width: 48,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#243189',
      color: '#DDE3F0', 
      textAlign: 'center',
      fontSize: 13,
       }, 
    formRow: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
    },
    inputGroup: {
      alignItems: 'center',
      flexDirection: 'row',
    },
});