import { NativeSyntheticEvent, SafeAreaView, ScrollView, StyleSheet, TextInputFocusEventData, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import PopularRecipes from '../../components/PopularRecipes';
import { Text, View } from '../../components/Themed';
import { SetStateAction, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import Search from '../../components/Search';
// import { SearchBar } from 'react-native-screens';

export default function CookBookScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const colorScheme = useColorScheme();

  const updateSearch = (search: any) => {
    setSearch(search.nativeEvent.text);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Search
        search={search}
        setSearch={setSearch}
        colorScheme={colorScheme}
      />
      <PopularRecipes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
