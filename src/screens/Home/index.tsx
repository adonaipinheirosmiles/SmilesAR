import React, {useEffect} from 'react';

import {Services} from '@smiles-ar/services';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {$COLORS, Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';
import {coordinator} from '@routes';

export const Home = () => {
  function handleLogout() {
    coordinator.goToSignInWithOutRollback();
  }

  function renderSeparator() {
    return <Separator vertical size={10} />;
  }

  function handleGithubRepos() {
    Services.github.getUser('adonaipinheiro').then(r => {
      console.log(r);
    });
  }

  useEffect(() => {
    handleGithubRepos();
  }, []);

  return (
    <View style={styles.container}>
      <Text onPress={handleLogout} style={styles.logOutButton}>
        Sair
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={images.smilesLogo}
          resizeMode="contain"
        />
        <Separator vertical size={11} />
        <Input
          placeholder="Digite um usuário do Github"
          style={styles.headerInput}
        />
        <Button text="Buscar" style={styles.headerButton} />
      </View>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Resultados</Text>
        <FlatList
          data={['', '', '']}
          ItemSeparatorComponent={renderSeparator}
          renderItem={() => (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                height: 60,
                padding: 10,
                borderWidth: 1,
                borderColor: 'black',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: $COLORS.gray,
                  borderRadius: 20,
                }}
              />
              <Separator horizontal size={10} />
              <Text>Olá</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  logOutButton: {
    position: 'absolute',
    top: 56,
    right: 16,
    fontWeight: 'bold',
    zIndex: 1,
    color: $COLORS.primaryDark,
  },
  header: {
    backgroundColor: `${$COLORS.primary}50`,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingTop: 56,
  },
  headerImg: {
    height: 60,
  },
  headerInput: {
    backgroundColor: $COLORS.white,
    height: 40,
  },
  headerButton: {
    height: 40,
  },
  content: {
    padding: 16,
  },
  contentTitle: {
    fontWeight: 'bold',
  },
});
