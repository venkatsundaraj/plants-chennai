import { Button } from "~/app/_components/ui/button";
import type React from "react";

import Link from "next/link";

// Mock data for demonstration
const indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
];

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log({
      name: formData.get("name"),
      username: formData.get("username"),
    });
  };

  return (
    <section className="flex min-h-screen w-screen items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-8">
        <h1 className="font-heading text-primary w-full text-center text-4xl md:text-5xl">
          Snap. Suggest. Buy.
        </h1>
        <ul className="flex max-w-6xl flex-wrap items-center justify-center gap-3">
          {indianCities.map((item, i) => (
            <li
              key={i}
              className="text-paragraph-heading text-foreground/50 border-foreground/50 hover:bg-foreground/5 flex items-center justify-center rounded-full border px-4 py-2"
            >
              <Link href={"/"}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
