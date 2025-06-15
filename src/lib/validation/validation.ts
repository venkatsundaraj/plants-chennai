import { z } from "zod";

export const taskFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(2, "Description must be at least 2 characters"),

  completed: z.boolean(),
  priority: z.enum(["low", "medium", "high"], {
    description: "Task priority must be one of 'low', 'medium', or 'high'",
  }),
});

export type TaskFormSchemaType = z.infer<typeof taskFormSchema>;
