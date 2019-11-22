import {StyleSheet, Platform} from 'react-native';
import theme from '../../styles/theme.style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
    // backgroundColor: 'red',
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: hp(10)
  },
  headerContainer: {
    width: wp(100),
    paddingHorizontal: wp(5),
    paddingTop: Platform.OS === 'ios' ? 60 : 80,
    paddingBottom: 25,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
    backgroundColor: 'white',
  },
  headerInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupInfoContainer: {
    // flex: 1,
    flexDirection: 'row',
  },
  imageGroup: {
    width: 50,
    height: 50,
    borderRadius: 20
  },
  inputContainer: {
    marginTop: hp(5),
    textAlign: 'center'
  },
  userTextInputContainer: {
    marginTop: hp(5),
    textAlign: 'center',
  },
  dateTimeContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EFEFF4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: wp(5)
    // backgroundColor: '#E4E5E9',
    // opacity: 0.98,
    // backgroundColor: 'red',
  },
  footerContainer: {
    width: wp(100),
    padding: wp(5),
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#EFEFF4',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    // flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
    // alignSelf: ''
  },
  actionButtonContainer: {
    alignSelf: 'flex-end',
    padding: 5,
    // margin: 20,
    // flex: 0.5
  },
  headerInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionBottomButton: {
    position: 'absolute',
    bottom: 0,
    height: hp(10),
    width: wp(100)
  }
});
