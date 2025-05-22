import React from "react";
import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "w-full lg:hover:opacity-90 h-12 lg:hover:cursor-pointer lg:transition-opacity max-w-[480px] min-w-20 px-5 bg-slate-200 rounded-3xl flex justify-center items-center",
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export { Button };
