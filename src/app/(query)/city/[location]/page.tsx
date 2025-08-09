import { type FC } from "react";

interface PageProps {
  params: Promise<{ location: string }>;
}

const page = async ({ params }: PageProps) => {
  const res = await params;
  return <div>{res.location}</div>;
};

export default page;
