import {StyleSheet} from 'react-native';
import {COLORS} from '../Utils/Colors';
import {screenDimensions} from './Screen';

export const authScreen_styles = StyleSheet.create({
  container: {position: 'relative', flex: 1, width: screenDimensions.width},
  bgImage: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    color: COLORS.primaryColor,
    fontWeight: '900',
  },
  contentContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: COLORS.screenBackgroundColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    alignItems: 'center',
  },

  topContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 70,
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
  },
  linkContainer: {flexDirection: 'row', marginVertical: 10},
  emailInput: {
    marginBottom: 14,
  },

  link: {
    color: COLORS.primaryColor,
    fontWeight: '800',
  },
  simpleText: {
    fontWeight: '800',
  },
});

export const allUser_styles = StyleSheet.create({
  container: {
    // position: 'relative',
    flex: 1,
    width: screenDimensions.width,
    padding: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
  },

  contentContainer: {
    alignItems: 'center',
  },
});
