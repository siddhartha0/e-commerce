import React from "react";
import { BigTextInfo, TextInfo, Card, ButtonToolTip } from "../../units/index";
import { ShoppingCart, ThumbsUp } from "react-feather";

interface cardUserProps {
  imgUrl: string;
  header: string;
  article: string;
}

export const CardUse = React.memo((props: cardUserProps) => {
  const { article, header, imgUrl } = props;

  return (
    <main>
      <Card
        className="hover:animate-pulsing hover:cursor-pointer z-0 "
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className=" group flex flex-col  place-items-start p-3   absolute bottom-4 hover:bottom-16 hover:animate-float z-10  ">
        <BigTextInfo
          title={header}
          textColor="#111111"
          textDecoration="uppercase"
          textSize="text-5xl"
        />

        <TextInfo title={article} textColor="#111111" />

        <section className="flex gap-4 invisible group-hover:visible group-hover:animate-jiggle">
          <ButtonToolTip tipInfo="Add to cart" icon={ShoppingCart} />
          <ButtonToolTip tipInfo="Mark as fav" icon={ThumbsUp} />
        </section>
      </div>
    </main>
  );
});
