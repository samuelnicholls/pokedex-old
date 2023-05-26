import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  noBorderTop?: boolean;
};

const DataRow: FunctionComponent<Props> = ({
  title,
  children,
  noBorderTop,
}) => {
  return (
    <div
      className={`flex flex-col items-center pt-3 ${
        noBorderTop
          ? ""
          : "border-solid border-0 border-t border-white lg:border-0"
      }`}
    >
      <h2 className="text-xl mb-6">{title}</h2>
      <ul className="flex flex-col items-center">{children}</ul>
    </div>
  );
};

export default DataRow;
