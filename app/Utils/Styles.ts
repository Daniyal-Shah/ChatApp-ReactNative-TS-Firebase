import {StyleSheet} from 'react-native';
import {COLORS} from '../Utils/Colors';
import {screenDimensions} from './Screen';

export const authScreen_styles = StyleSheet.create({
  container: {position: 'relative', flex: 1, width: screenDimensions.width},
  bgImage: {
    width: screenDimensions.width,
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
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    height: 70,
    marginBottom: 10,
  },

  contentContainer: {
    alignItems: 'center',
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginHorizontal: 10,
  },

  messageContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,

    backgroundColor: 'white',
    borderRadius: 30,
    margin: 20,
    // marginBottom: 0,
  },
  innerMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {width: 30, height: 30, marginHorizontal: 10},
  message: {fontWeight: '400', color: 'black', fontSize: 16},
  shadow: {
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    elevation: 7,
    // background color must be set
  },
  hideMessage: {
    display: 'none',
  },
});

export const chat_styles = StyleSheet.create({
  container: {
    // position: 'relative',
    flex: 1,
    width: screenDimensions.width,
    paddingHorizontal: 8,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
    padding: 0,
  },
  messageContainer: {
    width: '100%',
    paddingHorizontal: 5,
  },
  scroller: {
    width: '100%',
  },
});
