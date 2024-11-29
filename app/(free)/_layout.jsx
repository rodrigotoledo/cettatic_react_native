import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import "../../global.css";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#DBD03B', // Cor ativa
        tabBarInactiveTintColor: '#B39DDB', // Cor inativa
        headerShown: false, // Remove o cabeçalho
        tabBarStyle: {
          backgroundColor: '#2A2E3E', // Cor de fundo da barra de navegação
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Information',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'tv' : 'tv-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="follow_process"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'information' : 'information-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
