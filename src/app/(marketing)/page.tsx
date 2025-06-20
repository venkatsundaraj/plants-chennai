"use client";
import { Button } from "~/app/_components/ui/button";
import type React from "react";
import { DialogDemo } from "~/app/_components/dialog-duplicate";
import Link from "next/link";
import { slugify } from "~/lib/utils";
import { api } from "~/trpc/react";

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
  const { data, isLoading, error } = api.plant.getAllPlants.useQuery();
  console.log(data);

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
              <Link href={`/city/${slugify(item)}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
