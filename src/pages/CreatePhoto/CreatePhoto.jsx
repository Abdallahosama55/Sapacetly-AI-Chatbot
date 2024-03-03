import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
// import text1 from "../../../assets/images/CreatePhoto/text1.png";
import text1 from "../../assets/Images/createphoto/text1.png";
// import rocket from "../../assets/images/createPhoto/rocket.png";
import rocket from "../../assets/Images/createphoto/rocket.png";
// import photo from "../../assets/images/createPhoto/photo.png";
import photo from "../../assets/Images/createphoto/photo.png";
import photo2 from "../../assets/Images/createphoto/photo2.png";
import { HiPlusSmall } from "react-icons/hi2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./createphoto.css";
import { LuSettings2 } from "react-icons/lu";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CreatePhoto = () => {
  const [Open, setOpen] = useState(false);
  const [InputOpen, setInputOpen] = useState(false);
  const [Counter, setCounter] = useState(1);
  const [resolution, setresolution] = useState("");
  const [Patch, setPatch] = useState("");

  const handleChange = (event) => {
    setresolution(event.target.value);
  };
  const handleChangePatch = (event) => {
    setPatch(event.target.value);
  };
  return (
    <div className="  ">
      {Open && (
        <div
          className={`col-lg-3 col-8 
        d-flex position-fixed  flex-column   overflow-y-scroll    p-3 align-items-center menu-items  bg-white z-3`}>
          <div className="  ms-auto ">
            <IoIosCloseCircleOutline
              onClick={() => setOpen(!Open)}
              className=" fs-2 primary  fw-bolder "
            />
          </div>
          <p className="mt-3 fs-mid-h1 primary  fw-bolder ">عدد الصور </p>

          <div className="col-8  mt-2 d-flex gap-2  align-items-center justify-content-center shadow-lg rounded-3">
            <HiPlusSmall
              onClick={() => setCounter(Counter + 1)}
              className=" fs-2 primary  fw-bolder "
            />
            <span className=" fs-2 primary  fw-bolder ">{Counter}</span>
            <HiMiniMinusSmall
              onClick={() => setCounter(Counter > 1 ? Counter - 1 : Counter)}
              className=" fs-2 primary  fw-bolder "
            />
          </div>

          <label
            htmlFor="email"
            className=" mt-5 fs_auth fw-bold text-lg-end  primary ms-auto">
            دقة الصورة
          </label>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">الدقة</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={resolution}
              label="الدقة"
              onChange={handleChange}>
              <MenuItem value={10}>1536 X 640</MenuItem>
              <MenuItem value={20}>640 X 1536</MenuItem>
              <MenuItem value={30}>832 X 1216</MenuItem>
              <MenuItem value={30}>640 X 1536</MenuItem>
              <MenuItem value={30}> 896 X 1152</MenuItem>
              <MenuItem value={30}>1152 X 896</MenuItem>
              <MenuItem value={30}>1152 X 896</MenuItem>
              <div>
                {!InputOpen && (
                  <span
                    onClick={() => {
                      setInputOpen(!InputOpen);
                    }}>
                    تحديد
                  </span>
                )}
                {InputOpen && (
                  <input
                    type="text"
                    class="form-control "
                    placeholder="ادخل الدقه  "
                  />
                )}
              </div>
            </Select>
          </FormControl>

          <label
            htmlFor="email"
            className=" mt-5 fs_auth fw-bold text-lg-end  primary ms-auto">
            نمط الصورة
          </label>
          <FormControl
            fullWidth
            className=" d-flex gap-2">
            <InputLabel id="demo-simple-select-label">النمط</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={resolution}
              label="النمط"
              onChange={handleChangePatch}>
              <MenuItem
                value={10}
                className="">
                <div className=" overflow-hidden rounded-3 col-12 justify-content-center d-flex ">
                  <LazyLoadImage
                    alt={"hi"}
                    effect="blur"
                    src={photo}
                    className="h-auto  w-100  "
                    opacity="true"
                    placeholderSrc={photo}
                  />
                </div>
              </MenuItem>
              <MenuItem
                value={11}
                className="">
                <div className=" overflow-hidden rounded-3 col-12 justify-content-center d-flex ">
                  <LazyLoadImage
                    alt={"hi"}
                    effect="blur"
                    src={photo2}
                    className="h-auto  w-100  "
                    opacity="true"
                    placeholderSrc={photo2}
                  />
                </div>
              </MenuItem>
              <MenuItem
                value={17}
                className="">
                <div className=" overflow-hidden rounded-3 col-12 ">
                  <LazyLoadImage
                    alt={"hi"}
                    effect="blur"
                    src={photo2}
                    className="h-auto  w-100  "
                    opacity="true"
                    placeholderSrc={photo2}
                  />
                </div>
              </MenuItem>
              <MenuItem
                value={90}
                className="">
                <div className=" overflow-hidden rounded-3 col-12 ">
                  <LazyLoadImage
                    alt={"hi"}
                    effect="blur"
                    src={photo}
                    className="h-auto  w-100  "
                    opacity="true"
                    placeholderSrc={photo}
                  />
                </div>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      )}

      <div className=" d-flex flex-column justify-content-center align-items-center p-5 col-12">
        <div className=" d-flex gap-3 justify-content-center">
          <p className=" fs-mid-h1 primary  fw-bolder ">
            انشاء الصور بالذكاء الاصطناعي
          </p>
          <FaWandMagicSparkles className=" fs-mid-h1 primary  fw-bolder " />
        </div>
        <div className=" col-lg-8 col-12 ">
          <LazyLoadImage
            alt={"hi"}
            effect="blur"
            src={text1}
            className="h-auto  w-100  "
            opacity="true"
            placeholderSrc={text1}
          />
        </div>
        <div className=" mt-4 d-flex gap-2 col-12 align-items-center justify-content-center">
          <div className=" d-flex gap-2 col-10 ">
            <input
              type="text"
              className="input_photo w-100  shadow"
              placeholder="حول افكارك الي تصاميم ابداعية"
            />
          </div>
          <LuSettings2
            onClick={() => setOpen(!Open)}
            className=" fs-1 primary  fw-bolder "
          />
        </div>
        <span className="col-12 d-flex justify-content-center align-items-center mt-3 ">
          <button className=" button_Photo py-2 px-5 d-flex justify-content-center gap-2 shadow-sm ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={rocket}
              width={30}
              height={30}
              opacity="true"
              placeholderSrc={rocket}
            />
            إنشاء{" "}
          </button>
        </span>
        <div className=" mt-3 d-flex flex-wrap justify-content-center align-items-center gap-2 col-12">
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>

          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
          <div className=" overflow-hidden rounded-3 col-lg-3 col-5 ">
            <LazyLoadImage
              alt={"hi"}
              effect="blur"
              src={photo}
              className="h-auto  w-100  "
              opacity="true"
              placeholderSrc={photo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePhoto;
