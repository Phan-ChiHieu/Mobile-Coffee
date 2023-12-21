import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomIcon from '../components/CustomIcon';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <CustomIcon name="home" size={25} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
