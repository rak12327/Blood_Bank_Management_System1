import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Data } from "../../../Export";
import { RequestFormListComplete } from "../../../Redux/Request/RequestFromThunk";

const Complete = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const completeList = useSelector((state) => state.requestList.completeList);
  const responseData = useSelector((state) => state.requestForm);

  console.log(completeList);

  useEffect(() => {
    if (token) {
      dispatch(RequestFormListComplete({ token, dispatch }));
    }
  }, [token, dispatch]);
  return (
    <div className="h-[100%] max-h-[28rem] overflow-y-auto">
      {completeList.map((state, index) => (
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

export default Complete;
