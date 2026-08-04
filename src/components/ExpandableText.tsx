import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 20 }: Props) => {
  const [isExpandable, setExpandable] = useState(true);

  const handleClickEvent = () => {
    setExpandable(!isExpandable);
  };

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpandable
    ? children.substring(0, maxChars) + " " + "..."
    : children;

  return (
    <div>
      {text}
      <button onClick={handleClickEvent}>
        {isExpandable ? "more" : "less"}
      </button>
    </div>
  );
};

export default ExpandableText;
