import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Light/dark mode detection

  return (
    <SafeAreaProvider>
      {/* Status bar style based on theme */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      {/* Stack navigator config */}
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right", // You can change this to 'fade', 'none', etc.
        }}
      />
    </SafeAreaProvider>
  );
}
