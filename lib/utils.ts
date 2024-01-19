import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimeStamp = (createdAt: Date): string => {
  const now: Date = new Date();
  const timeDifference: number = now.getTime() - createdAt.getTime();

  // Define time intervals in milliseconds
  const minute: number = 60 * 1000;
  const hour: number = 60 * minute;
  const day: number = 24 * hour;
  const week: number = 7 * day;
  const month: number = 30 * day;
  const year: number = 365 * day;

  if (timeDifference < minute) {
    const seconds: number = Math.floor(timeDifference / 1000);
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  } else if (timeDifference < hour) {
    const minutes: number = Math.floor(timeDifference / minute);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (timeDifference < day) {
    const hours: number = Math.floor(timeDifference / hour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (timeDifference < week) {
    const days: number = Math.floor(timeDifference / day);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (timeDifference < month) {
    const weeks: number = Math.floor(timeDifference / week);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  } else if (timeDifference < year) {
    const months: number = Math.floor(timeDifference / month);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years: number = Math.floor(timeDifference / year);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};
export const formatAndDivideNumber = (inputNumber: number): string => {
  if (Math.abs(inputNumber) >= 1e6) {
    const millions = inputNumber / 1e6;
    return millions.toFixed(2) + "M";
  } else if (Math.abs(inputNumber) >= 1e3) {
    const thousands = inputNumber / 1e3;
    return thousands.toFixed(2) + "K";
  } else {
    return inputNumber.toString();
  }
};

export function getMonthYear(date: Date): string {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const removeKeysFromQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
