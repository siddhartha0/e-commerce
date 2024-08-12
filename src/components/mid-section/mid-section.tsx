import React from "react";
import { BigTextInfo } from "../../units";
import { CardDatas } from "../../constant/index";
import { CardUse } from "../index";

export const MidSection = React.memo(() => {
  return (
    <div className="flex flex-col mt-4 gap-4 ">
      <section className="w-[80%] m-auto  flex ">
        <BigTextInfo
          title="Latest Arrival"
          textColor="#111111"
          textSize="text-3xl"
          className="w-[100%] flex place-content-center"
        />
      </section>

      <section className="flex justify-between p-6 relative">
        {CardDatas.map((data) => (
          <CardUse
            key={data.id + data.imgUrl}
            article={data.article}
            header={data.header}
            imgUrl={data.imgUrl}
          />
        ))}
      </section>
    </div>
  );
});
