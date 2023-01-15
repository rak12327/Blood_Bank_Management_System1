import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestFormListNotComplete } from "../../../Redux/Request/RequestFromThunk";

const NotComplete = () => {
  const list = useSelector((state) => state.requestList);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (token) {
    // }
    dispatch(RequestFormListNotComplete({ token }));
  }, []);

  // console.log(list.error);

  if (list.error === "No Data found") {
    return (
      <div>
        <h1>No Data found</h1>
      </div>
    );
  }

  return (
    <div className="h-[100%] max-h-[28rem] overflow-y-auto">
      {list.notCompleteList.map((state, index) => (
        <div
          key={index}
          className="flex flex-row gap-[1rem] w-[100%] px-[.5rem] py-[1rem]"
          onClick={() => console.log(state.id)}
        >
          <p>{index + 1}</p>
          <p>{state.patientName}</p>
        </div>
      ))}
    </div>
  );
};

export default NotComplete;
