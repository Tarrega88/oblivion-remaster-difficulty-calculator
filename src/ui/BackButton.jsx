import { IoCaretBack } from "react-icons/io5";

function BackButton({ onClick }) {
  return (
    <div
      className="hover:text-emeraldshade-400 absolute cursor-pointer text-4xl duration-200"
      onClick={onClick}
    >
      <IoCaretBack />
    </div>
  );
}

export default BackButton;
