import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";
import goals from "../data/goals";
import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";

const Allgoals = () => {
  const {
    isLoading,
    data: { goals: Goals },
  } = useFetch("https://goalonserver-jdzu.onrender.com/api/goals");

  // const [Goals, setGoals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true)
  // const getGoals = async () => {
  //   try {
  //     const res = await fetch("https://goalonserver-jdzu.onrender.com/api/goals");
  //     const data = await res.json ()
  //     setIsLoading(false)
  //   setGoals(data.goals);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  //    useEffect(() => {
  //      getGoals();
  //    }, []);
  // loading state
  // when the goal empty

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading />}
      <div>
        <div>
          {Goals &&
            Goals.map((g) => {
              return <Goal key={g._id} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
