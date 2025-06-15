import { z } from "zod";
import { taskFormSchema } from "~/lib/validation/validation";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { taskTable } from "~/server/db/schema";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(taskFormSchema)
    .mutation(async ({ ctx, input }) => {
      const inserted = ctx.db.insert(taskTable).values(input).returning();
      return inserted;
    }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    const tasks = await ctx.db.select().from(taskTable);
    return tasks;
  }),
});
