"use client";

import type { inferRouterOutputs } from "@trpc/server";

import { api } from "~/trpc/react";
import type { AppRouter } from "~/server/api/root";
import Link from "next/link";

type RouterOutput = inferRouterOutputs<AppRouter>;
type Task = RouterOutput["task"]["getAll"][number];

interface TaskListProps {
  //   data: Task[] | undefined;
}

const TaskList = ({}: TaskListProps) => {
  const result = api.task.getAll.useQuery();
  if (!result.data) return <div>Loading...</div>;

  return (
    <ul>
      {result.data
        ? result.data.map((task: Task) => (
            <Link href={`/task/${task.id}`} key={task.id}>
              <li>{task.title}</li>
            </Link>
          ))
        : null}
    </ul>
  );
};

export default TaskList;
