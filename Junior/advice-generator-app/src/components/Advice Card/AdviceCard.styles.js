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
  height: 315px;
  justify-content: space-between;
  padding: 40px 24px 0px 24px;
  position: absolute;
  text-align: center;
  top: calc(50% - 18px/2 - 125px);
  max-width: 343px;
`;

const CardNumber = style.h4`
  color: hsl(150, 100%, 66%);
  line-height: 18px;
  font-size: 13px;
  letter-spacing: 4.08571px;
`;

const CardQuote = style.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 33px;
  letter-spacing: -0.3px;
  max-width: 295px;
  padding-bottom: 24px;
`;

const CardButton = style.button`
  align-items: center;
  background: hsl(150, 100%, 66%);
  border: 0px;
  border-radius: 50%;
  display: flex;
  max-height: 128px;
  justify-content: center;
  max-width: 128px;
  padding: 20px;
  position: absolute;
  top: 323px;
`;

export { Card, CardButton, CardNumber, CardQuote };
