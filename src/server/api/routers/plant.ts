import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";
import { env } from "~/env";

export const plantRouter = createTRPCRouter({
  getAllPlants: publicProcedure.query(async ({ ctx }) => {
    try {
      const response = await axios.get(
        `https://trefle.io/api/v1/plants?token=${env.TREFFLE_KEY}`,
      );
      const result: any[] = response.data;

      return result;
    } catch (err) {
      console.log(err);
    }
  }),
});
