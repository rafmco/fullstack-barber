"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

export const cancelBooking = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  });

  // Remove caching da página e recarrega
  revalidatePath("/");
  revalidatePath("/bookings");
};