import React from "react";
import { useDispatch } from "react-redux";
import { Model } from "../../Export/Model";
import { openABNegative, openABPositive, openANegative, openOPositive, openAPositive, openBNegative, openBPositive, openONegative } from "../../Redux/RequestModel";
import NavBar from "../Home/NavBar";
import "./index.css"

const Request = () => {
  // const [input, setInput] = useState({aPositive: "", aNegative: "", bPositive: "", bNegative: ""})
  const dispatch = useDispatch()
  const Data = { bloodName: "A positive", unit: "1", price: "1230" }



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
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                    <option value="ApositiveRH">ApositiveRH</option>
                    <option value="ApositiveWipro">ApositiveWipro</option>
                    <option value="ApositiveTCS">ApositiveTCS</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]" onClick={() => {
                  dispatch(openAPositive(Data))
                }}>Request Blood</button>
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
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                    <option value="ApositiveRH">ApositiveRH</option>
                    <option value="ApositiveWipro">ApositiveWipro</option>
                    <option value="ApositiveTCS">ApositiveTCS</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]" onClick={() => dispatch(openANegative(Data))}>Request Blood</button>
              </div>
            </div>
          </div>

          {/* ----- B+ --------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b3.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Bright Ones</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => dispatch(openBPositive(Data))}
                >Request Blood</button>
              </div>
            </div>
          </div>


          {/*------- B- -------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b4.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Bee's Knees</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => dispatch(openBNegative(Data))}
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
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => dispatch(openABPositive(Data))}
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
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => dispatch(openABNegative(Data))}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*--------O+--------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b7.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Secret Saver</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]"
                  onClick={() => dispatch(openOPositive(Data))}
                >Request Blood</button>
              </div>
            </div>
          </div>

          {/*------- O- ---------*/}
          <div className="w-[100%] sm:w-[49%] lg:w-[30%] xl:w-[24%]  h-[14.5rem] flex items-center justify-center">
            <div className="bg-[red] w-[100%] h-[100%] text-center flex items-center justify-between rounded-[.5rem]">
              <div className="flex justify-center w-[40%] basis-[40%]">
                <img src={"/assets/b8.png"} alt={"..."} className='w-[6rem] h-[8rem] duration-500' />
              </div>
              <div className="bg-[#fff] h-[80%] basis-[60%] rounded-lg mr-[1rem]">
                <div className="mt-[5%] border-b-2 border-solid border-[red]">
                  <h4 className="font-semibold">The Unlimite Giver</h4>
                </div>
                <div className="text-center my-[.5rem]">
                  <label htmlFor="option" className="block mb-[.2rem] text-left px-[.1rem]">Blood Component:</label>
                  <select name="option" id="option" className="w-[90%] px-[.5rem] py-[.3rem] focus:rounded option">
                    <option value="null">Select</option>
                  </select>
                </div>
                <div className="mb-[.5rem] w-[100%]">
                  <label htmlFor="price" className="text-sm w-[30%]">Unit </label>
                  <input type="text" disabled value={0} className='w-[70%] text-sm px-[.5rem] py-[.4rem] unitValue' />
                </div>
                <button className="px-[.5rem] py-[.1rem] bg-[black] rounded text-[#fff]" onClick={() => dispatch(openONegative(Data))}>Request Blood</button>
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
