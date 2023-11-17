import styled from "styled-components";

const GuideStyle = styled.div`
  flex: 50% 1 1;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f6f6f6;
  border: 1px solid;
  border-color: #cbcbcb;
  position: relative;

  .titleWrapper {
    display: flex;
    gap: 5px;
    align-items: center;
    .title {
      margin: 0;
    }
    img {
      height: 16px;
      width: 16px;
    }
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 10px;
    height: 40px;
    width: 40px;
  }
`;

export default GuideStyle;
