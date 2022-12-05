import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Model } from "../../Export/Model";
import { openAlert } from "../../Redux/Model/AlertSlice";
import { openBloodDetailsModel } from "../../Redux/Model/RequestModel";
import { abNegativeBloodDetail, abPositiveBloodDetail, aNegativeBloodDetail, aPositiveBloodDetail, bNegativeBloodDetail, bPositiveBloodDetail, oNegativeBloodDetail, oPositiveBloodDetail } from "../../Redux/Request/ComopentNameSlice";
import { ComponentNameThunk } from "../../Redux/Request/RequestFromThunk";
import NavBar from "../Home/NavBar";
import "./index.css"

const Request = () => {
  const [input, setInput] = useState({ positiveA: "", negativeA: "", positiveB: "", negativeB: "", positiveAB: "", negativeAB: "", positiveO: "", negativeO: "" })
  const dispatch = useDispatch()
  const data = useSelector(state => state.componentName)


  useEffect(() => {
    //not showing alert
    dispatch(ComponentNameThunk(dispatch))
  }, [dispatch])



  useEffect(() => {
    if (input.positiveA) {
      dispatch(aPositiveBloodDetail(input.positiveA))
    }
  }, [input.positiveA])

  useEffect(() => {
    if (input.negativeA) {
      dispatch(aNegativeBloodDetail(input.negativeA))
    }
  }, [input.negativeA])

  useEffect(() => {
    if (input.positiveB) {
      dispatch(bPositiveBloodDetail(input.positiveB))
    }
  }, [input.positiveB])

  useEffect(() => {
    if (input.negativeB) {
      dispatch(bNegativeBloodDetail(input.negativeB))
    }
  }, [input.negativeB])

  useEffect(() => {
    if (input.positiveAB) {
      dispatch(abPositiveBloodDetail(input.positiveAB))
    }
  }, [input.positiveAB])

  useEffect(() => {
    if (input.negativeAB) {
      dispatch(abNegativeBloodDetail(input.negativeAB))
    }
  }, [input.negativeAB])

  useEffect(() => {
    if (input.positiveO) {
      dispatch(oPositiveBloodDetail(input.positiveO))
    }
  }, [input.positiveO])

  useEffect(() => {
    if (input.negativeO) {
      dispatch(oNegativeBloodDetail(input.negativeO))
    }
  }, [input.negativeO])

  return (
    <div className="">
      <NavBar />
      <div className="max-w-[1300px] mx-auto max-h-[90vh] h-[100%] px-[1rem] pt-[1rem]">
        <div className="text-center">
          <h1 className="text-[crimson] text-4xl font-bold">Check Blood Stock</h1>
        </div>
        <div className="w-[100%] flex items-start justify-around flex-wrap gap-[1rem] mt-[1%]">

          {/* ---------FOR A+--------- */}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%] h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b1.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The A-Listers</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option text-[.65rem]" onChange={(e) => setInput({ ...input, positiveA: e.target.value })}>
                    <option value="null">Select</option>
                    {
                      data.positiveA.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.aPositiveBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />

                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.aPositiveBlood ? data.aPositiveBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.aPositiveBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/* ---------FOR A- --------- */}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b2.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Comforter</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option" onChange={(e) => setInput({ ...input, negativeA: e.target.value })}>
                    <option value="null">Select</option>
                    {
                      data.negativeA.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.aNegativeBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.aNegativeBlood ? data.aNegativeBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.aNegativeBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/* ----- B+ --------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b4.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Bright Ones</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, positiveB: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.positiveB.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.bPositiveBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.bPositiveBlood ? data.bPositiveBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.bPositiveBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>


          {/*------- B- -------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b3.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Bee's Knees</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, negativeB: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.negativeB.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.bNegativeBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.bNegativeBlood ? data.bNegativeBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.bNegativeBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*-------AB+-------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b5.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Lucky Ones</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, positiveAB: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.positiveAB.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.abPositiveBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.abPositiveBlood ? data.abPositiveBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.abPositiveBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*--------AB----------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b6.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Rare One</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, negativeAB: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.negativeAB.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.abNegativeBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.abNegativeBlood ? data.abNegativeBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.abNegativeBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*--------O+--------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b8.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Secret Saver</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, positiveO: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.positiveO.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.oPositiveBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.oPositiveBlood ? data.oPositiveBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.oPositiveBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*------- O- ---------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b7.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Unlimite Giver</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] text-[.65rem] focus:rounded option"
                    onChange={(e) => setInput({ ...input, negativeO: e.target.value })}
                  >
                    <option value="null">Select</option>
                    {
                      data.negativeO.map((state, index) => (
                        <option value={state.componentName} className="text-[.65rem]" key={index}>{state.componentName}</option>
                      ))
                    }
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={data?.oNegativeBlood?.unit || 0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => {
                    data.oNegativeBlood ? data.oNegativeBlood.unit > 0 ?
                      dispatch(openBloodDetailsModel({ ...data.oNegativeBlood, unit: 1 })) : dispatch(openAlert({ message: "You can't order blood now, Please try again later", color: "red" })) : dispatch(openAlert({ message: "Select Blood Name", color: "yellow" }))
                  }}
                >Request Blood</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Model />
    </div>
  );
};

export default Request;
