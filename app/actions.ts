"use server";

import { revalidatePath } from "next/cache";

export const resetCache = async () => {
  revalidatePath("/", "layout");
};
