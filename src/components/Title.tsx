import { FC } from 'react';

export type TitleProps = {
  text: string;
};

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
      {text}
    </h1>
  );
};

export default Title;