// import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChevronUp from "../../../Export/Icons/ChevronUp";
import { Data, formatDate } from "../../../Export";
import { RequestFormEdit } from "../../../Export/Dialog/RequestFormEdit";
import { openForm } from "../../../Redux/Model/DailogHandlerSlice";
import { RequestFormListBeforeDeliver } from "../../../Redux/Request/RequestFromThunk";

const RequestList = () => {
  const [open, setOpen] = useState(0);
  const listData = useSelector((state) => state.requestList?.requestList);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (token) {
    // }
    dispatch(RequestFormListBeforeDeliver({ dispatch }));
  }, []);

  // console.log(listData);

  if (listData) {
    return (
      <div>
        <h1>No Data found</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <RequestFormEdit />
      <div className="h-[100%] max-h-[28rem] overflow-y-auto">
        {listData?.requestList.map((state, index) => (
          <Accordion
            open={open === state._id}
            icon={<ChevronUp id={state._id} open={open} />}
            key={state._id}
          >
            <AccordionHeader
              onClick={() => handleOpen(state._id)}
              className="text-sm"
            >
              <p>
                <span className="mr-[.5rem]">{index + 1}</span>
                {state.patientName}
              </p>
            </AccordionHeader>
            <AccordionBody>
              <div className="">
                <p>{state.componentName}</p>
                <div className="flex items-center justify-between flex-col">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="mr-[.5rem]">Unit</label>
                      <input
                        className="border-b-2 border-b-[black] text-center outline-none w-[50%]"
                        defaultValue={state?.unit}
                      />
                    </div>
                    <div>
                      <label className="mr-[.5rem]">Price</label>
                      <input
                        className="border-b-2 border-b-[black] text-center outline-none w-[50%]"
                        defaultValue={`$ ` + state?.price}
                      />
                    </div>
                    <div>
                      <label className="mr-[.5rem]">Collecting Data</label>
                      <input
                        className="border-b-2 border-b-[black] text-center outline-none w-[50%]"
                        defaultValue={formatDate(state?.dateOfReceivingBlood)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-row w-[100%] py-[1rem]">
                    <button className="w-[5rem] py-[.5rem] bg-[#000] text-[#fff] text-sm rounded">
                      Delete
                    </button>
                    <button
                      className="w-[5rem] py-[.5rem] bg-[#000] text-[#fff] text-sm rounded"
                      onClick={() => dispatch(openForm(state._id))}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </Fragment>
  );
};

export default RequestList;
