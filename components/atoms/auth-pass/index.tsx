import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import {StyledCol} from '../../../styles/container';
import {styledText, StyledText12, StyledText16} from '../../../styles/text';
import {FormTextInput} from '../../../styles/input';

// @ts-ignore
import ShowLogo from '../../../assets/icons/show.svg';
// @ts-ignore
import HideLogo from '../../../assets/icons/hide.svg';

// @ts-ignore
function AuthPassword({password, setPassword}) {
  const sans = styledText();

  // Regular expression for password validation
  const isLengthValid = password.length >= 8;
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const [isMasked, setIsMasked] = useState(true);

  const handleShowHide = () => {
    setIsMasked(prevState => !prevState);
  };

  return (
    <>
      <StyledCol style={{width: '100%'}}>
        <StyledText16
          style={[sans.bold, {alignSelf: 'flex-start', textAlign: 'left'}]}>
          Password
        </StyledText16>
        {!isLengthValid && (
          <StyledText12
            style={[
              sans.regular,
              {position: 'absolute', right: 0, color: '#FF5656'},
            ]}>
            Must be at least 8 characters
          </StyledText12>
        )}
        {isLengthValid && !hasCapitalLetter && (
          <StyledText12
            style={[
              sans.regular,
              {position: 'absolute', right: 0, color: '#FF5656'},
            ]}>
            Must have 1 Capital letter
          </StyledText12>
        )}
        {isLengthValid && hasCapitalLetter && !hasNumber && (
          <StyledText12
            style={[
              sans.regular,
              {position: 'absolute', right: 0, color: '#FF5656'},
            ]}>
            Must have 1 Number
          </StyledText12>
        )}
      </StyledCol>
      <StyledCol
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginTop: 5,
          marginBottom: 5,
        }}>
        <FormTextInput
          secureTextEntry={isMasked}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="•••••••••••"
          placeholderTextColor="#042F40"
          autoCapitalize="none"
        />
        <TouchableOpacity
          onPress={handleShowHide}
          style={{position: 'absolute', right: 15}}>
          {isMasked ? (
            <ShowLogo width={25} height={25} />
          ) : (
            <HideLogo width={25} height={25} />
          )}
        </TouchableOpacity>
      </StyledCol>
    </>
  );
}

export default AuthPassword;
