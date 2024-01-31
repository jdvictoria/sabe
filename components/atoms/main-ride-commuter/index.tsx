import React from 'react';

import {StyledCol, StyledRow} from '../../../styles/container';
import {styledText, StyledText18} from '../../../styles/text';

// @ts-ignore
import SabeLogo from '../../../assets/icons/home-dark.svg';

import ButtonNegative from '../button-negative';
import ButtonNeutral from '../button-neutral';

// @ts-ignore
import AnimatedEllipsis from 'react-native-animated-ellipsis';
// @ts-ignore
import StarRating from 'react-native-star-rating-widget';

// @ts-ignore
function MainRideCommuter({
  hasRequest,
  hasRide,
  hasDrop,
  hasApproved,
  handleCancel,
  handleDropoff,
  handleEnd,
  rating,
  setRating,
}: any) {
  const sans = styledText();

  return (
    <StyledCol
      style={{
        justifyContent: hasRequest ? 'space-between' : 'center',
        width: '85%',
        height: 'auto',
        minHeight: hasRequest ? 200 : 150,
        marginTop: 25,
        marginBottom: 110,
        paddingTop: 12.5,
        paddingBottom: 12.5,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}>
      <StyledCol style={{marginTop: hasRequest ? 15 : 0}}>
        <SabeLogo width={50} height={50} />
        {!hasRequest && !hasRide && (
          <StyledRow>
            <StyledText18 style={[sans.bold, {color: '#042F40', marginTop: 5}]}>
              You have no ongoing ride
            </StyledText18>
          </StyledRow>
        )}
        {!hasRequest && hasRide && (
          <StyledCol>
            {!hasDrop && !hasApproved && (
              <>
                <StyledText18
                  style={[sans.bold, {color: '#042F40', marginTop: 5}]}>
                  Ride Ongoing
                </StyledText18>
                <StyledRow style={{marginTop: 20}}>
                  <ButtonNegative
                    onClick={handleDropoff}
                    text={'Request Dropoff'}
                  />
                </StyledRow>
              </>
            )}
            {hasDrop && (
              <StyledRow style={{marginTop: 10}}>
                <ButtonNeutral text={'Reviewing Request'} />
              </StyledRow>
            )}
            {hasApproved && (
              <>
                <StyledText18
                  style={[
                    sans.bold,
                    {color: '#042F40', marginTop: 5, marginBottom: 10},
                  ]}>
                  Rate your driver!
                </StyledText18>
                <StarRating
                  onRatingEnd={handleEnd}
                  enableSwiping={true}
                  enableHalfStar={false}
                  rating={rating}
                  onChange={setRating}
                  color={'#FFB800'}
                />
              </>
            )}
          </StyledCol>
        )}
        {!hasRide && hasRequest && (
          <StyledCol>
            <StyledRow>
              <StyledText18
                style={[sans.bold, {color: '#042F40', marginTop: 5}]}>
                Waiting for driver to accept
              </StyledText18>
              <AnimatedEllipsis
                style={{
                  color: '#042F40',
                  fontSize: 26,
                  letterSpacing: -2.5,
                }}
              />
            </StyledRow>
            <StyledRow style={{marginTop: 20}}>
              <ButtonNegative onClick={handleCancel} text={'Cancel'} />
            </StyledRow>
          </StyledCol>
        )}
      </StyledCol>
    </StyledCol>
  );
}

export default MainRideCommuter;
