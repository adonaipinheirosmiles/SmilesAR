import React, {memo} from 'react';

import {type GithubUserReposType} from '@smiles-ar/services/src/modules/github/types';
import {useTranslation} from 'react-i18next';
import {FlatList, Text, View} from 'react-native';
import {Separator} from 'react-native-smiles-ar-uikit';

import {ReposListItem} from './ReposListItem';

interface ReposListProps {
  repos: GithubUserReposType[];
}

export const ReposList = memo(({repos}: ReposListProps) => {
  const {t} = useTranslation();

  function renderSeparator() {
    return <Separator vertical size={10} />;
  }

  function renderEmptyComponent() {
    return (
      <View>
        <Text>{t('empty_results')}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={repos}
      scrollEnabled
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={renderEmptyComponent}
      renderItem={({item}) => <ReposListItem item={item} />}
    />
  );
});
