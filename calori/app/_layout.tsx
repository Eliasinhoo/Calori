
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { setFoodList } from './store/store';
import { loadFoodList } from './utils/asyncStorageHelpers';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon': require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../assets/fonts/Montserrat-Bold.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  useEffect(() => {
    const initializeData = async () => {
      const storedFoodList = await loadFoodList(); // Load data from AsyncStorage
      store.dispatch(setFoodList(storedFoodList)); // Send to Redux
    };

    initializeData();
  }, []);


  return (
    <Provider store={store}>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerTransparent: true,
          // headerTitle: (props) => <ModalHeaderText />,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: '#fff',
                borderColor: colors.lightGray,
                borderRadius: 20,
                borderWidth: 1,
                padding: 4,
              }}>
              <Ionicons name="close-outline" size={22} />
            </TouchableOpacity>
          ),
        }}
      />
      </Stack>
    </ThemeProvider>
    </Provider>
  );
}
