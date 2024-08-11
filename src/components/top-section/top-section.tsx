import { ChevronRight } from "react-feather";
import { default as ambassador } from "../../assets/images/topsection.jpg";
import { Button, Icon } from "../index";

const TopSection = () => {
  console.log("hello");
  return (
    <main className="relative">
      <section className="z-[-99]">
        <img src={ambassador} alt="" className="" />
      </section>

      <section className="absolute flex flex-col gap-4 top-32 right-16">
        <header className="text-brand font-semibold text-6xl leading-[5rem] w-96 capitalize">
          Glamourous Collection
        </header>
        <article className="text-brand font-[500] mt-2 text-lg">
          From Classic to Stylish, We've got you covered
        </article>

        <Button className="flex place-items-center bg-brand mt-10 outline-none font-[500] p-4 max-w-56 gap-2 rounded-3xl place-content-center">
          <article className="text-lg font-[500] text-black">
            Shop Collection
          </article>
          <Icon name={ChevronRight} color="black" />
        </Button>
      </section>
    </main>
  );
};

export default TopSection;
