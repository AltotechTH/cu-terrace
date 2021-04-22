import styled from 'styled-components';

const Container = styled.div`
  width: 78px;
  height: 32px;
  display: flex;
  flex-direction: center;
`;

const Text = styled.p`
  font-size: 18;
`;

export const StyledButton = ({ text }: any) => {
  return (
    <>
      <Container>
        <Text>{text}</Text>
      </Container>
    </>
  );
};
