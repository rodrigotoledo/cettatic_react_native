import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView  } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
const randomLock = Math.floor(Math.random() * 10000)
function generateRandomPosts(count) {
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return Array.from({ length: count }, (_, index) => ({
    id: `${index + 1}`,
    title: `Dorama Título ${index + 1} - Algum conteúdo aleatório`,
    subtitle: `Subtítulo aleatório ${index + 1}`,
    type: Math.random() > 0.5 ? 'image' : 'video', // Escolhe entre 'image' e 'video'
    imageUrl: `https://loremflickr.com/640/480?lock=${randomInt(1, 1000)}`, // Gera uma URL aleatória
    likes: randomInt(10, 100), // Número aleatório entre 10 e 100
    reposts: randomInt(5, 50), // Número aleatório entre 5 e 50
    shares: randomInt(1, 20), // Número aleatório entre 1 e 20
    comments: Array.from({ length: randomInt(0, 5) }, (_, idx) => `Comentário ${idx + 1}`), // Comentários aleatórios
  }))
}

export default function DoramasAuth() {
  const [posts, setPosts] = useState([]);
  const [focusedId, setFocusedId] = useState(null);
  const [commentText, setCommentText] = useState('');
   useEffect(() => {
    // Gera 10 posts aleatórios e define no estado
    const generatedPosts = generateRandomPosts(20);
    setPosts(generatedPosts);
  }, []);

  const handleFocus = (id) => {
    setFocusedId(id);
  };

  const handleBlur = () => {
    setFocusedId(null);
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity activeOpacity={1} onPress={() => handleFocus(item.id)}>
      <View className="mb-6 bg-white p-4 rounded-lg shadow-lg">
        <Text className="text-lg font-bold mb-1">{item.title}</Text>
        <Text className="text-sm text-gray-500 mb-3">{item.subtitle}</Text>

        <TouchableOpacity
          onPress={() => handleFocus(item.id)}
          className="relative"
        >
          <Image
            source={{ uri: item.imageUrl }}
            className={`w-full h-64 rounded-lg ${focusedId === item.id ? 'opacity-100' : 'opacity-60'}`}
          />
          {item.type === 'video' && (
            <View className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full">
              <Ionicons name="play-circle" size={36} color="white" />
            </View>
          )}
        </TouchableOpacity>

        <View className="flex-row justify-between mt-4 px-2">
          <TouchableOpacity className="flex-row items-center space-x-1">
            <FontAwesome name="heart" size={20} color="red" />
            <Text className="text-gray-700">({item.likes})</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <MaterialIcons name="repeat" size={20} color="gray" />
            <Text className="text-gray-700">({item.reposts})</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <Ionicons name="share-social" size={20} color="gray" />
            <Text className="text-gray-700">({item.shares})</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <Ionicons name="chatbubble-outline" size={20} color="gray" />
            <Text className="text-gray-700">({item.comments.length})</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center space-x-1">
            <Ionicons name="send" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center mt-3">
          <TextInput
            placeholder="Escreva um comentário..."
            value={commentText}
            onChangeText={(text) => setCommentText(text)}
            className="flex-1 border border-gray-300 rounded-lg p-2 text-sm text-gray-600"
          />
          <TouchableOpacity
            onPress={() => {
              console.log('Comentário enviado:', commentText);
              setCommentText(''); // Limpa o campo de texto
            }}
            className="ml-2 bg-secondary p-2 rounded-full"
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='mt-2'>
      <TouchableOpacity activeOpacity={1} onPress={handleBlur}>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          className="bg-gray-100 p-4"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
