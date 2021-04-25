import styled from "styled-components";

export const SummaryBox = styled.div`
  width: 100%;
  height: 144px;
  padding: 17px;
  background-color: #f7f9fc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

export const SummaryBoxHeader = styled.p`
  font-size: 15px;
  color: #212529;
`;

export const SummaryBoxValue = styled.p`
  font-size: 32px;
  color: #212529;
  font-weight: 500;
`;

export const SummaryBoxUnit = styled.p`
  font-size: 32px;
  color: #212529;
  margin-left: 8px;
`;

export const PersonSummaryBox = styled.div`
  width: 100%;
  height: 110px;
  padding: 10px;
  background-color: #f7f9fc;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
`;

export const PersonDetail = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: black;
  margin-top: 12px;
  margin: 0px;
  padding: 0px;
  width: 50%;
`;

export const EnergySummaryBox = styled.div`
  width: 100%;
  padding: 17px;
  background-color: #f7f9fc;
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeaderText = styled.h3`
  color: black;
`;

export const HeaderTextFloor = styled.h3`
  color: black;
  font-weight: 400;
  margin-left: 5px;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 15px;
  height: 15px;
  margin: 5px;
  cursor: pointer;
`;

export const CalendarIconBox = styled.div`
  width: 27px;
  height: 27px;
  padding: 4px;
  background-color: #eff2f7;
  border-radius: 5px 0px 0px 5px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const PercentChange = styled.p`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
  margin-left: 5px;
`;

export const Comparative = styled.p`
  font-size: 16px;
  color: #838383;
  font-weight: 400;
  margin-left: 5px;
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "60%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "0.5px solid #f3f3f3",
    padding: "25px",
    maxHeight: "90%",
  },
  overlay: {
    backgroundColor: "rgba(119, 119, 119, 0.75)",
    zIndex: 999,
  },
};

export const ShortNameBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FullWidthIcon = styled.img`
  height: 100%;
  position: absolute;
  padding: 10px;
`;

export const ShortNameText = styled.p`
  font-size: 25px;
  font-weight: 500;
  z-index: 9999;
  color: black;
`;

export const InvoiceImage = styled.img`
  width: 100%;
`;
