import React, { useState, useEffect } from "react";
import Goal from "../components/Goal";
import goals from "../data/goals";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const Ongoing = () => {
  // const [Goals, setGoals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const getGoals = async () => {
  //   try {
  //     const res = await fetch("https://goalonserver-jdzu.onrender.com/api/goals");
  //     const data = await res.json();
  //     setIsLoading(false);
  //     const ongoingGoals= data.goals.filter((g) => g.progress < 100);
  //     setGoals(ongoingGoals);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getGoals();
  // }, []);

  const {
    isLoading,
    data: { goals },
  } = useFetch("https://goalonserver-jdzu.onrender.com/api/goals");
  const Goals = isLoading ? [] : goals.filter((g) => g.progress < 100);

  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      {isLoading && <Loading />}
      <div>
        {Goals &&
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Ongoing;
