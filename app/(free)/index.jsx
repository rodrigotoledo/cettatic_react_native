import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



export default function Welcome({ navigation }) {

  const router = useRouter();

  return (
    <SafeAreaView className="bg-background flex-1">
      
      {/* Logo no Topo */}
      <View className="items-center">
        <Image 
          source={require('../../assets/images/logo.png')} // Substitua pelo caminho da sua logo
          className="w-32 h-32" // Ajuste o tamanho da logo
          resizeMode="contain"
        />
      </View>

      {/* Divider */}
      <View className="border-b border-highlight my-4 w-full" />

      {/* Seções de Última Postagem e Links */}
      <View className="flex-row justify-between w-full mb-8">
        
        {/* Última Postagem */}
        <View className="flex-1 items-center">
          <Text className="text-textPrimary text-lg font-semibold mb-2">Latest posts</Text>
          <View className="flex-col items-center justify-center flex w-full space-x-4">
            <View className="items-center">
              <FontAwesome name="photo" size={48} color="#DBD03B" />
              <Text className="text-textSecondary mt-2">Foto</Text>
            </View>
            <View className="items-center">
              <FontAwesome name="photo" size={48} color="#DBD03B" />
              <Text className="text-textSecondary mt-2">Foto</Text>
            </View>
          </View>
        </View>

        <View className="border border-highlight h-full mx-2" />

        {/* Links de Matricula e Loja */}
        <View className="flex-1 items-center space-y-4 justify-center">
      
            {/* Matrícula e Pagamento */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('Matricula')}
              className="flex-row items-center space-x-2"
            >
              <MaterialIcons name="school" size={24} color="#4A90E2" />
              <Text className="text-textPrimary text-lg font-semibold ml-2">Registration</Text>
            </TouchableOpacity>

            {/* Torne-se um Sócio Torcedor */}
            <TouchableOpacity 
              onPress={() => navigation.navigate('SocioTorcedor')}
              className="flex-row items-center space-x-2"
            >
              <FontAwesome name="users" size={24} color="#D301C5" />
              <View>
                <Text className="text-accent text-lg font-semibold ml-2">
                  Sócio Torcedor!
                </Text>
              </View>
            </TouchableOpacity>

            <Text className="text-textSecondary">Support our team and earn exclusive benefits!</Text>
            
          </View>

      </View>

      <View className="border-b border-highlight mb-4 w-full" />
      
      <View className="flex-1 items-center space-y-4">
        <View className="items-center">
          <Text className="text-textPrimary text-lg font-semibold mb-2">Prominent bid</Text>
          <MaterialIcons name="videocam" size={48} color="#DBD03B" />
          <Text className="text-textSecondary mt-2">Video</Text>
        </View>
      </View>

      <View className="border-b border-highlight mb-4 w-full" />
      
      <View className="flex-1 items-center space-y-4">
        <View className="items-center">
          <Text className="text-textPrimary text-lg font-semibold mb-2">Store items</Text>
          <MaterialIcons name="videocam" size={48} color="#DBD03B" />
          <Text className="text-textSecondary mt-2">Vídeo</Text>
        </View>
      </View>

      <View className="flex-1 items-center">
        <TouchableOpacity 
          onPress={() => router.push('(authenticated)')} 
          className="bg-yellow-500 p-4 rounded-lg"
        >
          <Text className="text-white font-semibold">Ir para área autenticada</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé com Links para Redes Sociais */}
      <View className="absolute bottom-4 flex-row justify-center w-full">
        <TouchableOpacity onPress={() => {/* Link para o Instagram */}} className="mx-3">
          <FontAwesome name="instagram" size={32} color="#D301C5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Link para o YouTube */}} className="mx-3">
          <FontAwesome name="youtube" size={32} color="#D301C5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {/* Link para Patrocinadores */}} className="mx-3">
          <FontAwesome name="handshake-o" size={32} color="#D301C5" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
