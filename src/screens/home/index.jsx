import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDTASK} from '../../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCard from './taskCard';
import HeaderComponent from './headerComponent';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(0);

  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
      let ongoingCount = 0;
      let pendingCount = 0;
      let completedCount = 0;
      let cancelCount = 0;
      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1) {
          ongoingCount++;
        }
        if (task.status === 2) {
          pendingCount++;
        }
        if (task.status === 3) {
          completedCount++;
        }
        if (task.status === 4) {
          cancelCount++;
        }
        setOngoing(ongoingCount);
        setPending(pendingCount);
        setCompleted(completedCount);
        setCancel(cancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tasks}
        ListHeaderComponent={
          <HeaderComponent
            ongoing={ongoing}
            pending={pending}
            completed={completed}
            cancel={cancel}
          />
        }
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
