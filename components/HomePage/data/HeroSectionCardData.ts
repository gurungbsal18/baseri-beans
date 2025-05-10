import { GiCoffeeBeans } from "react-icons/gi";
import { LiaRecycleSolid } from "react-icons/lia";
import { TbAwardFilled } from "react-icons/tb";

type HeroSectionCard = {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
};

export const HeroSectionCardData: HeroSectionCard[] = [
  {
    title: "Organic Beans",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id imperdiet arcu. Vestibulum placerat, urna sit amet elementum iaculis, tellus metus rutrum urna, vitae varius arcu tortor ut purus.",
    icon: GiCoffeeBeans,
    iconColor: "text-stone-600",
  },
  {
    title: "Perfect Processing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id imperdiet arcu. Vestibulum placerat, urna sit amet elementum iaculis, tellus metus rutrum urna, vitae varius arcu tortor ut purus.",
    icon: LiaRecycleSolid,
    iconColor: "text-rose-600",
  },
  {
    title: "Verified",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id imperdiet arcu. Vestibulum placerat, urna sit amet elementum iaculis, tellus metus rutrum urna, vitae varius arcu tortor ut purus.",
    icon: TbAwardFilled,
    iconColor: "text-yellow-500",
  },
];
