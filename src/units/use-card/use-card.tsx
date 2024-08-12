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
  ({ imgUrl, header, article }: cardUserProps) => {
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
            <div className="group/item">
              <TextInfo
                title="Add to Cart"
                className="invisible bg-dark p-2 font-thin text-sm  group-hover/item:visible -mb-8 mr-2 mt-2 group-hover:animate-fadeindown"
              />
              <Button className=" flex place-items-center bg-white mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-lg hover:animate-jiggle">
                <Icon name={icon.ShoppingCart} />
              </Button>
            </div>

            <div className="group/item">
              <TextInfo
                title="Add to Wishlist"
                className="invisible bg-dark p-2 font-thin text-sm  group-hover/item:visible -mb-8 mr-2 mt-2 group-hover:animate-fadeindown"
              />
              <Button className="flex place-items-center bg-white mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-lg hover:animate-jiggle ">
                <Icon name={icon.ThumbsUp} />
              </Button>
            </div>
          </section>
        </div>
      </main>
    );
  }
);
