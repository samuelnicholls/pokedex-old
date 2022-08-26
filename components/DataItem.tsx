import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  title?: string;
  attribute: string | number;
  index: any;
};

const DataItem: FunctionComponent<Props> = ({ title, attribute, index }) => {
  return (
    <li className="sdsds" key={index}>
      <p className="capitalize">
        {title ? <strong>{title.replace(/-/g, " ")}:</strong> : null}{" "}
        {attribute}
      </p>
    </li>
  );
};

export default DataItem;
