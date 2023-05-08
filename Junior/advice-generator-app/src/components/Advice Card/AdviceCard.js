import React from "react";
import { Card, CardButton, CardNumber, CardQuote } from "./AdviceCard.styles";
import MobileDivider from "./pattern-divider-mobile.svg";
import DiceButton from "./icon-dice.svg";

const AdviceCard = (quote) => {
  console.log(quote);
  return (
    <Card>
      <CardNumber>ADVICE #117</CardNumber>
      <CardQuote>
        "It is easy to sit up and take notice, what's difficult is getting up
        and taking action."
        <div style={{ paddingBottom: 32, paddingTop: 24 }}>
          <img alt="" src={MobileDivider} />
        </div>
      </CardQuote>
      <CardButton>
        <img alt="" src={DiceButton} />
      </CardButton>
    </Card>
  );
};

export default AdviceCard;
