import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import {
  Button,
  Icon,
  Grid,
  Row,
  Col,
} from 'native-base';
import {useNavigation} from 'react-navigation-hooks';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import MyText from '../../../components/MyText';
import styles from './styles';
import theme from '../../../styles/theme.style.js';
import NoResults from '../../../components/NoResults/index.js';
import FloatingUserSelect
  from '../../../components/FloatingUserSelect/index.js';

const HeaderComponent = ({group, taskName, description, goBack}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInnerContainer}>
        <View style={styles.groupInfoContainer}>
          <Image
            resizeMode="cover"
            style={styles.imageGroup}
            source={
              group.groupPicture
                ? {uri: `${group.groupPicture.uri}`}
                : images['logo']
            }
          />
          <View>
            <MyText style={{color: theme.DARK_COLOR}} fontStyle="bold">
              {group.groupName}
            </MyText>
            <MyText
              style={{color: theme.GRAY_LIGHT_COLOR}}
              fontStyle="semibold"
            >
              Mi Tarea
            </MyText>
          </View>
        </View>
        <View>
          <Button onPress={() => goBack ()} light rounded>
            <Icon
              type="AntDesign"
              name="arrowup"
              style={{fontSize: theme.ICON_SIZE_SMALL, color: '#000'}}
            />
          </Button>
        </View>
      </View>
      <MyText
        style={{
          textAlign: 'center',
          marginVertical: hp (2),
          fontSize: theme.FONT_SIZE_EXTRA_EXTRA_LARGE,
        }}
        //  autoFocus
        fontStyle="bold"
      >
        {taskName}
      </MyText>
      <MyText
        style={[styles.centerText, styles.groupDescriptionText]}
        fontStyle="semibold"
      >
        {description}
      </MyText>
    </View>
  );
};

const MyTask = () => {
  const {current_user: user} = useSelector (state => state.session);
  const {current_group: group} = useSelector (state => state.groups);
  const {current_event_task: task} = useSelector (state => state.events);
  // const {current_event: event} = useSelector (state => state.events);
  const dispatch = useDispatch ();
  const {navigate, goBack} = useNavigation ();
  /* 
  useEffect (
    () => {
      if (task.responsibles) {
        _setGroupMembers0(task.responsibles.slice(0, Math.ceil(task.responsibles.length / 2)))
        _setGroupMembers1(task.responsibles.slice(Math.ceil(task.responsibles.length / 2), task.responsibles.length))
      }
    },
    [task] 
  ); */

  /*  useEffect (
    () => {
      dispatch ({
        type: 'events/GET_EVENT_TASK',
        payload: {id: task.id},
      });
    },
    [dispatch]
  ); */

  const FloatingUsers = () => {
    return (
      <Row style={styles.userRow}>
        <Col>
          <FloatingUserSelect key={user.id} {...user} />
        </Col>
      </Row>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        group={group}
        taskName={task.taskName}
        description={task.description}
        goBack={goBack}
      />
      {task.responsibles.length > 0
        ? <ScrollView
            style={styles.bodyContainer}
            keyboardShouldPersistTaps="always"
          >
            <Grid style={styles.usersContainer}>
              <FloatingUsers />
            </Grid>
          </ScrollView>
        : <View style={styles.bodyContainer}>
            <NoResults
              lottieProps={{autoSize: true, style: {width: wp (30)}}}
              animationName="user-scanning"
              primaryText="¡No se ha encontrado ningún usuario!"
              primaryTextStyles={{color: 'white'}}
            />
          </View>}
      <Button
        primary
        full
        onPress={() => {
          dispatch ({
            type: 'events/COMPLETE_TASK',
            payload: {task, goBack, navigate},
          });
          // navigate ('Groups');
        }}
        // onPress={() => navigate('EditProfile')}
        style={styles.actionBottomButton}
      >
        <MyText
          style={{fontSize: theme.FONT_SIZE_LARGE}}
          fontStyle="bold"
          color={theme.HEADER_MENU_TITLE_COLOR}
        >
          COMPLETAR
        </MyText>
      </Button>
    </View>
  );
};

export default MyTask;
