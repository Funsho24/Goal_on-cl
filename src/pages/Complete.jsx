import React, { useState, useEffect } from "react";
import goals from "../data/goals";
import Completed from "../components/Completed";
import GoalHeader from "../components/GoalHeader";
import Loading from '../components/Loading';
import { useFetch } from "../hooks/useFetch";

const Complete = () => {
  // const [Goals, setGoals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //  const getGoals = async () => {
  //    try {
  //      const res = await fetch("https://goalonserver-jdzu.onrender.com/api/goals");
  //      const data = await res.json();
  //      setIsLoading(false);
  //      const completeGoals = data.goals.filter((g)=> g.progress === 100)
  //      setGoals(completeGoals);

  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };
  //  useEffect(() => {
  //    getGoals();
  //  }, []);

  const {
    isLoading,
    data: { goals },
  } = useFetch("https://goalonserver-jdzu.onrender.com/api/goals");
  const Goals = isLoading ? [] : goals.filter((g) => g.progress === 100);

  return (
    <div className="container mt-2">
      <GoalHeader heading="Completed " />
      {isLoading && <Loading />}
      <div>
        {Goals &&
          Goals.map((g) => {
            return <Completed key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Complete;
