import { Text, View, StyleSheet, ScrollView, SafeAreaView, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Home screen</Text>
          <Link href="/about" style={styles.button}>
            Go to About screen
          </Link>
        </View>

        <View>
          <Text>Go to</Text>
        </View>
      </View>

      <ScrollView>
        <SafeAreaView>
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24 }}>Hello React Native!</Text>
            <Image source={{ uri: 'https://placekitten.com/200/300' }} style={{ width: 200, height: 300 }} />
            <TextInput placeholder="이름을 입력하세요" style={{ borderWidth: 1, marginVertical: 10 }} />
            <Button title="눌러보세요" onPress={() => alert('눌렀다!')} />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
