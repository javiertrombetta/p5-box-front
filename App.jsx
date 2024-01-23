import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)


const App =()=> {
  return (
    <StyledView className='flex-1 items-center justify-center'>
      <StyledText>Javicee</StyledText>
      <StyledText>Borisneeta</StyledText>
    </StyledView>
  );
}

export default withExpoSnack(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ff5',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });