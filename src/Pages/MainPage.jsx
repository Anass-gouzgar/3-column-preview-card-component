import Card from "../components/Card";

import Icon_sedans_svg from "../components/icon-sedans";
import Icon_suvs_svg from "../components/icon-suvs";
import Icon_luxury_svg from "../components/icon-luxury";

// Colors
// const Bright_orange = "hsl(31, 77%, 52%)";
// const Dark_cyan = "hsl(184, 100%, 22%)";
// const Very_dark_cyan = "hsl(179, 100%, 13%)";

const data = [
  {
    heading: "Sedans",
    icon: <Icon_sedans_svg />,
    para: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    bg: "hsl(31, 77%, 52%)",
  },
  {
    heading: "SUVs",
    icon: <Icon_suvs_svg />,
    para: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    bg: "hsl(184, 100%, 22%)",
  },
  {
    heading: "Luxury",
    icon: <Icon_luxury_svg />,
    para: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    bg: "hsl(179, 100%, 13%)",
  },
];
const MainPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-around md:flex-row md:justify-center">
      <div className="flex flex-col justify-center items-center w-full md:w-auto md:flex-row h-auto md:justify-center border rounded-md overflow-hidden">
        {data.map((data, index) => (
          <Card
            key={index}
            icon={data.icon}
            para={data.para}
            heading={data.heading}
            color={data.bg}
            bg={data.bg}
          />
        ))}
      </div>
    </div>
  );
};


export default MainPage;
