import { Link } from "react-router-dom";
import { default as companyLogo } from "../../assets/images/2.png";
import { HeaderIconPath, HeaderPath } from "../../constant/index";
import { Icon } from "../index";
import classnames from "classnames";
import { useEffect, useState } from "react";
type headerProps = {
  UpMotionScrolledStatus: boolean | null;
};

const Header = ({ UpMotionScrolledStatus }: headerProps) => {
  // const [UpMotionScrolledStatus, setUpMotionScrolledStatus] = useState(true);
  const [shouldRender, setShouldRender] = useState(true); // Controls whether to render the component
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (UpMotionScrolledStatus) {
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
  }, [UpMotionScrolledStatus]);

  if (!shouldRender) return null;

  return (
    <div
      className={classnames(
        "w-[100%] sticky flex top-0 justify-between p-8 bg-white z-10",
        animationClass
      )}
    >
      <section className="w-44 -mt-[4.1rem] h-6">
        <img src={companyLogo} alt="img" />
      </section>

      <section className="flex gap-12 font-[500] text-lg ">
        {HeaderPath.map((path) => (
          <Link
            key={path.id + path.title}
            to={path.title}
            className="hover:animate-jiggle"
          >
            {path.title}
          </Link>
        ))}
      </section>

      <section className="flex gap-6">
        {HeaderIconPath.map((icon) => (
          <Icon
            key={icon.id + icon.path}
            name={icon.title}
            size={26}
            color="#0c0c0c"
            className=" hover:animate-jiggle"
          />
        ))}
      </section>
    </div>
  );
};

export default Header;
