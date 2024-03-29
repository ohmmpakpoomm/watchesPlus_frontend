import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import brandAdmin from "../brands/hooks/brandAdmin";
import watchAdmin from "../products/hooks/watchAdmin";
import { Camera } from "lucide-react";

import { toast } from "react-toastify";

function CreateProductForm() {
  const [input, setInput] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputEl = useRef(null);
  const { brands } = brandAdmin();
  const { createWatch } = watchAdmin();
  //   try {
  //     e.preventDefault();
  //     setLoading(true);
  //     const formData = new FormData();
  //     for (let i in input) {
  //       formData.append(i, input[i]);
  //     }
  //     formData.append("watchImage", image);
  //     await createWatch(formData);

  //     const data = {};

  //     for (let i in input) {
  //       data[i] = "";
  //     }

  //     setInput(data);

  //     setImage(null);

  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);

  //     const data = {};

  //     for (let i in input) {
  //       data[i] = "";
  //     }
  //     setInput(data);

  //     setImage(null);

  //     setLoading(false);
  //   }
  // };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      // ตรวจสอบว่ามีรูปภาพถูกเลือกหรือไม่
      if (!image) {
        toast.error("Please select an image");
        setLoading(false);
        return;
      }

      // ตรวจสอบว่า input ทั้งหมดถูกกรอกครบหรือไม่
      if (
        !input.brandId ||
        !input.modelName ||
        !input.movement ||
        !input.gender ||
        !input.powerReserve ||
        !input.caseMaterial ||
        !input.caseDiameter ||
        !input.crystal ||
        !input.dial ||
        !input.braceletMaterial ||
        !input.braceletColor ||
        !input.description
      ) {
        toast.error("Please fill in all fields");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      for (let i in input) {
        formData.append(i, input[i]);
      }
      formData.append("watchImage", image);
      await createWatch(formData);

      const data = {};
      for (let i in input) {
        data[i] = "";
      }
      setInput(data);
      setImage(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
      const data = {};
      for (let i in input) {
        data[i] = "";
      }
      setInput(data);
      setImage(null);
      setLoading(false);
    }
  };

  const handleChangeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: +e.target.value ? +e.target.value : e.target.value,
    });
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-40">
          <span className="loading loading-ring w-[10rem] z-30 text-green-800"></span>
        </div>
      )}

      <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="flex justify-between items-center">
          <strong className="text-gray-700 font-medium">Create Product</strong>
        </div>
        <div className="grid grid-cols-2 mt-3.5">
          <form onSubmit={handleSubmitForm}>
            <div className="grid grid-cols-2 gap-1 items-center mt-2">
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Brand</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    name="brandId"
                    onChange={handleChangeInput}
                    value={input.brandId}
                  >
                    <option disabled selected>
                      Pick Brand
                    </option>
                    {brands?.map((el) => (
                      <option value={el.id}>{el.name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Model Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Submariner"
                    className="input input-bordered w-full"
                    name="modelName"
                    onChange={handleChangeInput}
                    value={input.modelName}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Movement</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    onChange={handleChangeInput}
                    name="movement"
                    value={input.movement}
                  >
                    <option disabled selected>
                      Pick Movement
                    </option>
                    <option>AUTOMATIC</option>
                    <option>QUARTZ</option>
                  </select>
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Gender</span>
                  </div>
                  <select
                    className="select w-full max-w-xs"
                    onChange={handleChangeInput}
                    name="gender"
                    value={input.gender}
                  >
                    <option disabled selected value="">
                      Pick Gender
                    </option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                    <option>UNISEX</option>
                  </select>
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">
                      Power reserve (HOUR)
                    </span>
                  </div>
                  <input
                    type="Number"
                    placeholder="120"
                    className="input input-bordered w-full"
                    name="powerReserve"
                    value={input.powerReserve}
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Case material</span>
                  </div>
                  <input
                    type="Number"
                    value={input.caseMaterial}
                    placeholder="Stainless Steel"
                    className="input input-bordered w-full"
                    name="caseMaterial"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">
                      Case diameter (MM)
                    </span>
                  </div>
                  <input
                    value={input.caseDiameter}
                    type="text"
                    placeholder="40"
                    className="input input-bordered w-full"
                    name="caseDiameter"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Crystal</span>
                  </div>
                  <input
                    value={input.crystal}
                    type="text"
                    placeholder="Sapphire"
                    className="input input-bordered w-full"
                    name="crystal"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Dial</span>
                  </div>
                  <input
                    value={input.dial}
                    type="text"
                    placeholder="Black"
                    className="input input-bordered w-full"
                    name="dial"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">
                      Bracelet material
                    </span>
                  </div>
                  <input
                    value={input.braceletMaterial}
                    type="text"
                    placeholder="Stainless Steel"
                    className="input input-bordered w-full"
                    name="braceletMaterial"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Bracelet color</span>
                  </div>
                  <input
                    value={input.braceletColor}
                    type="text"
                    placeholder="Silver"
                    className="input input-bordered w-full"
                    name="braceletColor"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>
              <div className="col-span-full">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-md">Description</span>
                  </div>
                  <textarea
                    value={input.description}
                    placeholder="The iconic dive watch from Rolex."
                    rows="3"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs resize-none"
                    name="description"
                    onChange={handleChangeInput}
                  />
                </label>
              </div>

              <div className="col-span-1/2 mt-5">
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setImage(e.target.files[0]);
                    }
                  }}
                />
                {image ? (
                  <div
                    className="relative"
                    onClick={() => fileInputEl.current.click()}
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt="post"
                      className="mx-auto max-h-[15rem]"
                    />
                    <button
                      className="absolute top-1 right-1 font-black text-white bg-red-500 rounded-full w-6 h-6 flex justify-center items-center hover:bg-red-600 transition duration-300"
                      onClick={(e) => {
                        e.stopPropagation(); // ให้มันหยุดทำงานซ้ำซ้อน
                        setImage(null);
                        fileInputEl.current.value = "";
                      }}
                    >
                      &#10005;
                    </button>
                  </div>
                ) : (
                  <div
                    className="bg-black hover:bg-gray-800 flex flex-col items-center py-12 rounded-lg cursor-pointer"
                    role="button"
                    onClick={() => fileInputEl.current.click()}
                  >
                    <span className="text-green-100 bg-gray-900 px-4 py-2 rounded-xl flex items-center">
                      <Camera className="mr-2" size={20} />
                      Add Photo Watches
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-10">
              <button className="btn bg-black text-egg  mt-5" type="submit">
                Create Product
              </button>
              <Link
                to="/admin/products"
                className="b text-black mt-5 flex items-center underline"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProductForm;
