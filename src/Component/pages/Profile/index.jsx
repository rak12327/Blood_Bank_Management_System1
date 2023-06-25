import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import DeleteConformation from "../../Export/DeleteConformation";
import NavBar from "../Home/NavBar";
import { AiOutlineCloudUpload, AiOutlineUser, AiOutlineLoading } from "react-icons/ai";
import { BsBucket } from "react-icons/bs";
import imageCompression from "browser-image-compression";
import { useState } from "react";
import { toast } from "react-toastify";


const Profile = () => {
  const [isload, setIsLoad] = useState(false)
  const [isShown, setIsShown] = useState(false);
  const [profile, setProfile] = useState(null);
  const profileImageHandlerRef = useRef(null);

  const open = useSelector((state) => state.dailog.openDailog);

  const imgClickHandler = (e) => {
    profileImageHandlerRef.current.click();
  };

  const imageChangeHandler = async (e) => {
    setIsLoad(true)
    const imageFile = e.target.files;
    if (
      imageFile.length > 0 &&
      (imageFile[0].type === "image/jpeg" || imageFile[0].type === "image/png")
    ) {
      const option = {
        maxSizeMB: 1,
        useWebWorker: true,
      };

      const imageComp = await imageCompression(imageFile[0], option);
      setProfile(URL.createObjectURL(imageComp));
    } else if (imageFile.length === 0 && profile === null) {
      toast("Please upload image", {
        type: "error",
        theme: "colored",
      });
    } else if (
      imageFile.length > 0 &&
      (imageFile[0].type !== "image/jpeg" || imageFile[0].type !== "image/png")
    ) {
      toast("Please Upload image in PNG or JPEG format", {
        type: "error",
        theme: "colored",
      });
    }
    setIsLoad(false)
  };


  return (
    <div className="bg-[red] min-h-[100vh] h-auto">
      {open && <DeleteConformation />}
      <NavBar />
      <div className="mainDiv">
        {/* max-h-[32rem] */}
        <div className="bg-[#fff] max-w-[1000px] m-auto rounded lg:min-h-[32rem] h-auto p-4">
          <div className="flex items-start gap-4 flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-500">
            <div className="flex overflow-hidden rounded-lg bg-white w-full lg:w-auto">
              <div className="flex w-full">
                <div className="flex flex-col lg:w-80 w-full">
                  <div className="flex flex-col gap-4 pt-5">
                    <div className="center px-4">
                      <div
                        className="hover:opacity-60 rounded-full relative"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                      >
                        <img
                          className="rounded-full h-40 w-40 object-cover hover:-z-50"
                          src={profile ? profile : "/assets/ContactUs.jpg"}
                          alt=""
                        />
                        {isShown && (
                          <div
                            className="hover:z-50 rounded-full h-40 w-40 absolute top-0 flex justify-center items-center flex-col"
                            onClick={imgClickHandler}
                          >
                            {isload ? <AiOutlineLoading className="w-full h-full p-12 text-black animate-spin"/> :
                            <>
                            <AiOutlineCloudUpload className="w-full h-full p-4 text-black" />
                            <h5 className="text-black">Upload</h5>
                            </>}
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        hidden
                        ref={profileImageHandlerRef}
                        onChange={imageChangeHandler}
                      />
                    </div>
                    {/* lg:h-[10rem] */}
                    <div className="flex items-center h-full mt-5">
                      <nav className="flex-1 bg-neutral-800">
                        <ul className="grid  grid-cols-2 lg:grid-cols-none divide-x divide-black lg:divide-none lg:gap-4">
                          <li className="flex justify-center">
                            <Link
                              to="/profile/user"
                              className="navbarLink text-neutral-200"
                            >
                              <AiOutlineUser />
                              <span className="">User</span>
                            </Link>
                          </li>
                          <li className="flex justify-center">
                            <Link
                              to="/profile/request-order-list/request-list"
                              className="navbarLink text-neutral-200"
                            >
                              <BsBucket />
                              <span className="">Order</span>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
