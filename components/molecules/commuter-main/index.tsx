import React, {useEffect} from 'react';
import {Dimensions, ScrollView} from 'react-native';

import {StyledSafeAreaView} from '../../../styles/container';

import HomeHeader from '../../atoms/home-header';
import MainMap from '../../atoms/main-map';
import MainRideCommuter from '../../atoms/main-ride-commuter';

// @ts-ignore
function CommuterMain({
  navigation,
  userUID,
  redirect,
  setRedirect,
  profile,
  setProfile,
  riderProfile,
  setRiderProfile,
  position,
}: any) {
  useEffect(() => {
    if (redirect) {
      // Scroll to the bottom when redirect is true
      scrollViewRef.current.scrollToEnd({animated: true});
      // Reset the redirect state to false after scrolling
      setRedirect(false);
    }
  }, [redirect]);

  const scrollViewRef = React.createRef();

  return (
    <StyledSafeAreaView
      style={{
        justifyContent: 'flex-start',
        backgroundColor: '#042F40',
      }}>
      <HomeHeader
        navigation={navigation}
        title={'Journey'}
        main={true}
        fromProfile={false}
      />
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: Dimensions.get('window').height * 0.9,
          backgroundColor: '#e7e7e7',
        }}>
        <MainMap position={position} />
        <MainRideCommuter
          navigation={navigation}
          userUID={userUID}
          profile={profile}
          setProfile={setProfile}
          riderProfile={riderProfile}
          setRiderProfile={setRiderProfile}
        />
      </ScrollView>
    </StyledSafeAreaView>
  );
}

export default CommuterMain;
