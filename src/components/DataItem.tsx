import React, { FunctionComponent, ReactNode } from "react";

type Props = {
  title?: string;
  attribute: string | number;
};

const DataItem: FunctionComponent<Props> = ({ title, attribute }) => {
  return (
    <li>
      <p className="capitalize">
        {title ? <strong>{title.replace(/-/g, " ")}:</strong> : null}{" "}
        {attribute}
      </p>
    </li>
  );
};

export default DataItem;
