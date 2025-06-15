import TaskForm from "~/app/_components/task-form";
import TaskList from "~/app/_components/task-list";
import { api } from "~/trpc/react";

export default async function Home() {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center">
      <div className="container">
        <h1 className="font-heading text-primary w-full text-center text-4xl md:text-9xl">
          Snap. Suggest. Buy.
        </h1>
      </div>
    </section>
  );
}
