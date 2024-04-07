import { Phone } from "./Phone";
import ScrollToUpper from "./ScrollToUpper";

const RightBottom = () => {
  return (
    <div className=" flex flex-row gap-4">
      <Phone />
      <ScrollToUpper />
    </div>
  );
};
export default RightBottom;
