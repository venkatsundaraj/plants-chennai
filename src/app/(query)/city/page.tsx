"use client";

import { useRouter } from "next/navigation";
import { useEffect, type FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/city/chennai");
  }, []);
  return <></>;
};

export default page;
