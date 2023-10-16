import React from 'react';

import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';

import {ReposList} from './components';
import {useHome} from './hooks/useHome';
import {styles} from './styles';

export const Home = () => {
  const {
    handleLogout,
    handleSearchGithubUserRepos,
    githubUser,
    setGithubUser,
    repos,
    loading,
    t,
  } = useHome();

  return (
    <View style={styles.container}>
      <Text onPress={handleLogout} style={styles.logOutButton}>
        {t('exit')}
      </Text>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={images.smilesLogo}
          resizeMode="contain"
        />
        <Separator vertical size={11} />
        <Input
          value={githubUser}
          onChangeText={setGithubUser}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={t('home_input_search')}
          style={styles.headerInput}
        />
        <Button
          onPress={() => handleSearchGithubUserRepos()}
          text={loading ? `${t('loading')}...` : t('search')}
          disabled={loading}
          style={styles.headerButton}
        />
      </View>
      <SafeAreaView edges={['bottom']} style={styles.content}>
        <Text style={styles.contentTitle}>{t('results')}</Text>
        <Separator vertical size={16} />
        <ReposList repos={repos} />
      </SafeAreaView>
    </View>
  );
};
