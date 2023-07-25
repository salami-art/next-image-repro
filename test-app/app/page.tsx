import { draftMode } from 'next/dist/client/components/headers';
import { Media } from '../../dist';
export const dynamic = 'force-static';
export const revalidate = 60;
const mainPic = {
  alt: "Id nesciunt labore amet.",
  id: "b162665e-616f-4386-a39b-76b5d590f075",
  href: {
    name: "href",
    url: "https://picsum.photos/seed/b162665e-616f-4386-a39b-76b5d590f075/640/360",
    contentType: "image/jpeg",
    width: "640",
    height: "360",
  }
}
export default async function Home() {
  const { isEnabled } = draftMode()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Media media={mainPic} preview={isEnabled}></Media>
    </main>
  );
}
