import { Activity } from "../types";

type ActivityListProps = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProps) {
  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Foods and Exercises
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-5 py-10 bg-white mt-5 flex justify-between"
        >
          <div></div>

          <div></div>
        </div>
      ))}
    </>
  );
}
