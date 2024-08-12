import React from "react";
import { BigTextInfo, Button, TextInfo, Icon, Card } from "../index";
import * as icon from "react-feather";

interface cardUserProps {
  imgUrl: string;
  header: string;
  article: string;
  icon: icon.Icon;
}

export const CardUse = React.memo(
  ({ imgUrl, header, article, icon }: cardUserProps) => {
    return (
      <main>
        <Card
          className="hover:animate-pulsing hover:cursor-pointer z-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <div className="flex flex-col  place-items-start p-3   absolute bottom-16  z-10 ">
          <BigTextInfo
            title={header}
            textColor="#111111"
            textDecoration="uppercase"
            textSize="text-5xl"
          />

          <TextInfo title={article} textColor="#111111" />

          <Button className="flex place-items-center bg-white mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-3xl hover:animate-jiggle">
            <TextInfo title="Shop Now" textColor="black" />
            <Icon name={icon} />
          </Button>
        </div>
      </main>
    );
  }
);
