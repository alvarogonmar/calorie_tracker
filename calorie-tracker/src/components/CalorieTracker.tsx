import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline"; // Example import from Heroicons

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
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [activities]
  );
  const excessCalories = useMemo(() => netCalories > 0, [netCalories]);

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Calories Resume
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumed" />
        <CalorieDisplay calories={caloriesBurned} text="Burned" />
        <CalorieDisplay calories={netCalories} text="Net" />
      </div>
      {excessCalories && (
        <div className="flex items-center justify-center mt-5">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-500 inline-block mr-2" />
          <span className="text-red-500 font-bold">Excess Calories!</span>
        </div>
      )}
    </>
  );
}
