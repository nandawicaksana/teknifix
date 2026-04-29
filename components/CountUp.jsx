"use client";
import { useEffect, useState } from "react";

export default function CountUp({ end = 100, duration = 1200, suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(16, duration / end);
    const timer = setInterval(() => {
      start += 1;
      setValue(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{value}{suffix}</>;
}