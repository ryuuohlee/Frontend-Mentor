import style from "styled-components";

const Card = style.div`
  align-items: center;
  background: hsl(217, 19%, 24%);
  border-radius: 15px;
  box-shadow: 30px 50px 80px rgba(0, 0, 0, 0.100202);
  color: hsl(193, 38%, 86%);
  display: flex;
  flex-direction: column;
  font-size: 28px;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: calc(50% - 18px/2 - 125px);
  width: 540px;
`;

const CardNumber = style.h1`
  color: hsl(150, 100%, 66%);
`;

export { Card, CardNumber };
