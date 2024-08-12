import { default as companyLogo } from "../../assets/images/2.png";
import { useScrollBarContent } from "../../constant/context-hooks/ScrollBarContext";
import { HeaderIconPath, HeaderPath } from "../../constant/index";
import { Guider, Icon, Navbar } from "../../units/index";
import { useEffect, useState } from "react";

const Header = () => {
  const scrollContext = useScrollBarContent();

  const [shouldRender, setShouldRender] = useState(true); // Controls whether to render the component
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (scrollContext?.upMotionScrolledStatus) {
      // Fade in when showing
      setShouldRender(true);

      setAnimationClass("animate-fadeindown");
    } else {
      // Fade out when hiding
      setAnimationClass("animate-fadeoutup");

      // After the animation ends, hide the component
      const timeout = setTimeout(() => {
        setShouldRender(false);
      }, 1000); // Match the animation duration

      return () => clearTimeout(timeout);
    }
  }, [scrollContext?.upMotionScrolledStatus]);

  if (!shouldRender) return null;

  return (
    <Navbar animationClass={animationClass}>
      <section className="w-44 -mt-[4.1rem] h-6">
        <img src={companyLogo} alt="img" />
      </section>

      <section className="flex gap-12 font-[500] text-lg ">
        {HeaderPath.map((path) => (
          <Guider
            key={path.id + path.title}
            path={path.path}
            title={path.title}
            textSize="text-lg"
          />
        ))}
      </section>

      <section className="flex gap-6">
        {HeaderIconPath.map((icon) => (
          <Icon key={icon.id + icon.path} name={icon.title} />
        ))}
      </section>
    </Navbar>
  );
};

export default Header;
