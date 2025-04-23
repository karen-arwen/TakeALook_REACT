import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  //imagens dos cards
  const cards = [
    { image: require('./imagens/img_ex1.jpg') },
    { image: require('./imagens/img_ex2.jpg') },
    { image: require('./imagens/img_ex3.jpg') },
    { image: require('./imagens/img_ex4.jpg') },
    { image: require('./imagens/img_ex5.jpg') },
    { image: require('./imagens/img_ex6.jpg') },
    { image: require('./imagens/img_ex7.jpg') },
    { image: require('./imagens/img_ex8.jpg') },
    { image: require('./imagens/img_ex9.jpg') },
    { image: require('./imagens/img_ex10.jpg') },
    { image: require('./imagens/img_ex11.jpg') },
    { image: require('./imagens/img_ex12.jpg') },
  ];

  //estado dos likes
  const [likes, setLikes] = useState(
    new Array(cards.length).fill({ liked: false, count: 0 })
  );

  //botao curte descurte
  const toggleLike = (index) => {
    const newLikes = [...likes]; //copia a lista atual
    const current = newLikes[index]; //pega o card que foi criado

    if (current.liked) {
      newLikes[index] = { liked: false, count: current.count - 1 }; //se falso - deslike
    } else {
      newLikes[index] = { liked: true, count: current.count + 1 }; //se verdadeiro - like
    }

    setLikes(newLikes);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./imagens/logo.png')}
        />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {cards.map((card, index) => (
          <View style={styles.card} key={index}>
            <Image style={styles.cardImage} source={card.image} />
            <View style={styles.infoCard}>
              <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeButton}>
                <AntDesign
                  name="heart"
                  size={24}
                  color={likes[index].liked ? '#ff5e5e' : '#888'}
                  style={{ opacity: likes[index].liked ? 1 : 0.5 }}
                />
              </TouchableOpacity>
              <Text style={styles.likes}>{likes[index].count} likes</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1e1e1e',
  },
  logo: {
    height: 40,
    width: 40,
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '45%',
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  infoCard: {
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    color: '#ff5e5e',
    fontWeight: '600',
    marginLeft: 8,
  },
});
