import { useMemo } from "react";
import { Activity } from "../types";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  // Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Calories Resume
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <p className="text-gray-300 font-bold rounded-full grid grid-cols-1 gap-3 text-center p-5">
          <span className="font-black text-6xl text-orange">
            {caloriesConsumed}
          </span>
          Consumed
        </p>
      </div>
    </>
  );
}
