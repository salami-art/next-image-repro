import { Img } from "./Img";
import NextImage, { ImageProps } from "next/image";
type SafeNumber = number | `${number}`;
interface MediaProps {
  media: { [key: string]: any };
  size?: string;
  imageProps?: ImageProps;
  link?: string | boolean;
  title?: string
  preview: boolean
}

const getMediaSrc = ({ media, size }: {
  media: { [key: string]: any },
  size?: string,
}): { [key: string]: any } => {
  return media[size]
};

const shouldUseImg = ({ preview, src }) => {
  return preview && typeof src === 'string';
}

export const Media = ({
  media,
  size = "href",
  imageProps,
  title,
  preview
}: MediaProps) => {
  if (!media) return <></>;
  const source = getMediaSrc({ media, size });
  const { alt } = media
  // @ts-ignore
  const { width, height }: { width: SafeNumber, height: SafeNumber } = source
  const nextImageProps = {
    alt,
    width,
    height,
    ...imageProps,
  }
  return <>
    {!source ? <></> : <>
      {shouldUseImg({ preview, src: source.url }) ?
        <Img src={source.url} title={title || alt} {...nextImageProps} />
        :
        <NextImage src={source.url} title={title || alt} {...nextImageProps} />
      }
    </>
    }
  </>

};