"use client";

import type { FC } from "react";
import { z } from "zod";
import {
  taskFormSchema,
  type TaskFormSchemaType,
} from "~/app/lib/validation/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";

interface TaskFormProps {}

const TaskForm: FC<TaskFormProps> = () => {
  const {
    handleSubmit,
    register,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormSchemaType>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "low",
      completed: false,
    },
  });

  const utils = api.useUtils();

  const create = api.task.create.useMutation({
    onSuccess: async (data) => {
      utils.task.invalidate();

      console.log("Task created successfully", data[0]?.title);
      reset();
    },
    onError: (error) => {
      console.log("Error creating task:", error);
    },
  });

  const onsubmit = async function (formData: TaskFormSchemaType) {
    const data = await create
      .mutateAsync(formData)
      .catch((error) => console.log(error));
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="max-w-6xl space-y-4">
      <div>
        <label
          htmlFor="title"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter task title..."
          required
        />
      </div>
      {errors?.title ? (
        <p className="text-destructive h-4 px-1 text-xs">
          {errors.title.message}
        </p>
      ) : (
        <p className="h-4"></p>
      )}
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register("description")}
          rows={3}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Enter task description..."
        />
      </div>
      {errors?.description ? (
        <p className="text-destructive h-4 px-1 text-xs">
          {errors.description.message}
        </p>
      ) : (
        <p className="h-4"></p>
      )}
      <div>
        <label
          htmlFor="priority"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <select
          id="priority"
          {...register("priority")}
          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      {errors?.priority ? (
        <p className="text-destructive h-4 px-1 text-xs">
          {errors.priority.message}
        </p>
      ) : (
        <p className="h-4"></p>
      )}

      <button
        type="submit"
        // disabled={createTask.isLoading || !formData.title.trim()}
        className="flex w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {create.isPending ? (
          <>
            <svg
              className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating...
          </>
        ) : (
          "Create Task"
        )}
      </button>
    </form>
  );
};

export default TaskForm;
