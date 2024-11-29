import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';
import "../global.css";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    router.replace('(free)');
  }, [router]);

  return (
    <Stack initialRouteName='(free)'>
      <Stack.Screen name="(free)" options={{ headerShown: false }} />
      <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      <Stack.Screen
        name="patient_info/index"
        options={{
          title: null,
          presentation: 'fullScreenModal',
          headerLeft: () => (
            <View className="flex flex-row items-center mr-2">
              <TouchableOpacity className="flex flex-row items-center bg-primary rounded-md px-2 mr-1">
                <MaterialCommunityIcons
                  name="account-arrow-left"
                  size={30}
                  color="white"
                  className="border border-white rounded-full m-1"
                />
                <Text className="text-white text-lg">Voltar</Text>
              </TouchableOpacity>
              <HeaderLeftWithTitle />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
