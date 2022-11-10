import {
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../theme/appTheme';
import PressableScale from '../PressableScale';

const ActionButton = ({component}) => {
  return (
    <PressableScale style={styles.button}>
      <View style={styles.item}>{component}</View>
    </PressableScale>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.gray400,
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent: 'center',
    marginTop: 12,
    marginRight: 12,
  },
  item: {
    alignSelf: 'center',
  },
});
