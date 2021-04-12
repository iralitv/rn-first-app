import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  console.log(courseGoals)

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.key !== goalId));
  };

  const showAddModeHandler = () => {
    setIsAddMode(true);
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={showAddModeHandler} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData =>
          <GoalItem 
            onDelete={removeGoalHandler} 
            id={itemData.item.key} 
            title={itemData.item.value} 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
