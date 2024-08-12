import { ChevronRight } from "react-feather";
import { default as ambassador } from "../../assets/images/topsection.jpg";
import { BigTextInfo, Button, Icon, TextInfo } from "../../units/index";
import React from "react";

const TopSection = React.memo(() => {
  return (
    <main className="relative">
      <section className="z-[-99]">
        <img src={ambassador} alt="img" />
      </section>

      <section className="absolute flex flex-col gap-4 top-32 right-20">
        <BigTextInfo title="Glamourous Collection" />
        <TextInfo
          title="From Classic to Stylish, We've got you covered"
          marginTop="mt-2"
        />
        <Button className="flex place-items-center bg-brand mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-3xl place-content-center hover:animate-jiggle">
          <TextInfo title="Shop Collection" textColor="black" />
          <Icon name={ChevronRight} />
        </Button>
      </section>
    </main>
  );
});

export default TopSection;
