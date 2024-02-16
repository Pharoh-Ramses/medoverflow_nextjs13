"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { getTimeSlots } from "../../../lib/actions/booking.action";

const page = () => {
  const service = "1";
  const duration = "3600";
  const persons = "1";
  const startDate = "2022-02-20";

  const handleGetTimeSlots = async () => {
    try {
      const timeSlots = await getTimeSlots({
        service,
        duration,
        persons,
        startDate,
      });
      console.log(timeSlots);
    } catch {
      console.log("error");
    }
  };
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900 flex">Coming Soon...</h1>
      <Button onClick={handleGetTimeSlots}>Get Time Slots</Button>
    </div>
  );
};

export default page;
