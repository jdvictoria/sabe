import React from 'react';

import {styledText, StyledText20} from '../../../styles/text';
import {StyledTouchableRow} from '../../../styles/container';

// @ts-ignore
function ButtonBooking({onClick, conditionOne, conditionTwo}) {
  const sans = styledText();

  let disabled = conditionOne || conditionTwo;

  let text;
  if (conditionOne) {
    text = 'Driver Busy';
  } else if (conditionOne) {
    text = 'Full Capacity';
  } else {
    text = 'Book Driver';
  }

  return (
    <StyledTouchableRow
      style={{
        width: '85%',
        height: 50,
        marginTop: 2.5,
        marginBottom: 5,
        backgroundColor: disabled ? '#c6c6c6' : '#1FBF83',
        borderRadius: 10,
      }}
      onPress={onClick}
      disabled={disabled}>
      <StyledText20 style={[sans.bold, {color: '#fff'}]}>{text}</StyledText20>
    </StyledTouchableRow>
  );
}

export default ButtonBooking;
