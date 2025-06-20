import { type FC } from "react";

interface pageProps {
  params: { location: string };
}

const page: FC<pageProps> = ({ params }) => {
  return <div>{params.location}</div>;
};

export default page;
