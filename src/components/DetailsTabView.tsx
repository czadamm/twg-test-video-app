import React, { useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet, ScrollView, TextInput, Platform } from 'react-native';
import { TabView, TabBar, SceneRendererProps } from 'react-native-tab-view';
import Card from '@/src/components/ui/Card';
import { ViewsIcon, LikesIcon } from '@/src/components/icons'; // dopasuj ścieżkę
import { Colors } from '@/src/constants/Colors';
import Button from '@/src/components/ui/Button';
import { DetailsTabProps, DetailsTabRoute } from '@/src/components/types';

const DescriptionTab = ({ description, statistics }: DetailsTabProps) => (
  <ScrollView>
    <View style={styles.videoInfo}>
      <View style={styles.description}>
        <Text>Description</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.statistics}>
        <Text>Statistics</Text>
        <View style={styles.statisticsRow}>
          <Card
            icon={<ViewsIcon width={20} height={20} color={Colors.light.onPrimary} />}
            compact
            style={styles.customCard}
          >
            {`${statistics?.viewCount || '0'} views`}
          </Card>
          <Card
            icon={<LikesIcon width={20} height={20} color={Colors.light.onPrimary} />}
            compact
            style={styles.customCard}
          >
            {`${statistics?.likeCount || '0'} likes`}
          </Card>
        </View>
      </View>
    </View>
  </ScrollView>
);

const NotesTab = ({ notes }: DetailsTabProps) => {
  return (
    <View style={styles.notesContainer}>
      <ScrollView>
        <View style={styles.videoInfo}>
          {notes?.map((note, index) => (
            <View key={index} style={styles.noteContainer}>
              <Text style={styles.note}>{note.note}</Text>
              <Text style={styles.timeStamp}>{note.timeStamp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.addNoteContainer}>
        <View style={[styles.noteContainer, styles.addNoteInputContainer]}>
          <TextInput style={styles.addNoteInput} multiline={true} placeholder={'Enter notes...'} />
        </View>
        <Button onPress={() => console.log('pressed add notes')}>Add note</Button>
      </View>
    </View>
  );
};

export const DetailsTabView = ({ description, statistics, notes }: DetailsTabProps) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState<DetailsTabRoute[]>([
    { key: 'description', title: 'Details' },
    { key: 'notes', title: 'Notes' },
  ]);

  const renderScene = ({ route }: SceneRendererProps & { route: DetailsTabRoute }) => {
    switch (route.key) {
      case 'description':
        return <DescriptionTab description={description} statistics={statistics} />;
      case 'notes':
        return <NotesTab notes={notes} />;
      default:
        return null;
    }
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{ backgroundColor: Colors.light.background }}
          activeColor={Colors.light.primary}
          inactiveColor={Colors.light.primary}
          indicatorStyle={{ backgroundColor: Colors.light.primary }}
          tabStyle={{ height: 40 }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  videoInfo: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 16,
    gap: 24,
  },
  description: {
    gap: 8,
  },
  statistics: {
    gap: 8,
  },
  statisticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customCard: {
    minWidth: 136,
    width: 'auto',
  },
  notesContainer: {
    flex: 1,
  },
  noteContainer: {
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: `rgba(200, 200, 200, 1)`,
  },
  note: {
    fontSize: 12,
    lineHeight: 12,
  },
  timeStamp: {
    fontSize: 10,
    lineHeight: 18,
    textAlignVertical: 'center',
    alignSelf: 'flex-end',
  },
  addNoteContainer: {
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 16,
  },
  addNoteInputContainer: {
    height: 60,
    width: '100%',
    paddingVertical: 2,
  },
  addNoteInput: {
    height: '100%',
    fontSize: 12,
    lineHeight: Platform.OS !== 'ios' ? 12 : 14, // fox for iOS
    textAlignVertical: 'top',
  },
});
