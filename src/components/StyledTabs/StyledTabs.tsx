import styled from 'styled-components';

type TabProps = {
  selectedTab: boolean;
};

type TabsProps = {
  defaultValue: string;
  selectedTab: string;
  onClick: (value: string) => void;
};

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabContainer = styled.div<TabProps>`
  height: 32px;
  padding: 7px 18px;
  background-color: ${(props) => (props.selectedTab ? '#0e7ee4' : '#E1E6F0')};
  cursor: pointer;
  :first-child {
    border-radius: 8px 0px 0px 8px;
  }
  :last-child {
    border-radius: 0px 8px 8px 0px;
  }
`;

const TabText = styled.p<TabProps>`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.selectedTab ? 'white' : '#788796')};
`;

export const Tab = ({ defaultValue, selectedTab, onClick }: TabsProps) => {
  return (
    <>
      <TabContainer
        selectedTab={defaultValue === selectedTab}
        onClick={() => onClick(defaultValue)}
      >
        <TabText selectedTab={defaultValue === selectedTab}>{defaultValue}</TabText>
      </TabContainer>
    </>
  );
};
