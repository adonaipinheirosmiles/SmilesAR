import React, {memo} from 'react';

import {type GithubUserReposType} from '@smiles-ar/services/src/modules/github/types';
import {Image, Linking, Text, View} from 'react-native';
import {Separator} from 'react-native-smiles-ar-uikit';

import {styles} from './styles';

interface ReposListItemProps {
  item: GithubUserReposType;
}

export const ReposListItem = memo(({item}: ReposListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.owner.avatar_url}} style={styles.img} />
      <Separator horizontal size={10} />
      <View style={styles.infoArea}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {item.name}
        </Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
          {item.full_name}
        </Text>
        <Text
          onPress={() => {
            Linking.canOpenURL(item.html_url).then(() => {
              Linking.openURL(item.html_url);
            });
          }}
          style={styles.link}>
          {item.url}
        </Text>
      </View>
    </View>
  );
});
