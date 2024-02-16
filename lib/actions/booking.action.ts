"use server";

import { NextResponse } from "next/server";
import { GetTimeSlotsParams } from "./shared.types";

export async function getTimeSlots(params: GetTimeSlotsParams) {
  const { service, duration, persons, startDate } = params;
  try {
    const timeSlotsResponse = await fetch(
      `https://shop.rumehealth.com/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/slots&serviceId=${service}&serviceDuration=${duration}&persons=${persons}&startDateTime=${startDate}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Amelia: `${process.env.AMELIA_API_KEY}`,
        },
      }
    );
    const timeSlots = await timeSlotsResponse.json();
    console.log(timeSlots);
    return timeSlots;
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
