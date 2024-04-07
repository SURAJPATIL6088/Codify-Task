import { FaPhoneAlt } from "react-icons/fa";

export const Phone = () => {
  return (
    <div className="rounded-full bg-yellow-400 p-4 fixed bottom-5 right-20 z-50">
      <a href="tel:+123456789">
        <FaPhoneAlt size={30} />
      </a>
    </div>
  );
};
