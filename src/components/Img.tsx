import { ImageProps } from "next/image";

const Img = (props: ImageProps) => {
  const { src, width, height, alt, title } = props
  return <img
    {
    ...{
      src: (src as string),
      width,
      height,
      alt,
      title
    }
    }
  />
};
export { Img };
