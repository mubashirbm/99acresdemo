import React from "react";

export default function ContactUs() {
  return (
    <>
      <div className="p-4 w-64 rounded-lg bg-white h-60">
        <h1>CONTACT US</h1>
        <div className="p-2">
          <div className="flex  mt-4">
            <div className="items-center mt-2">
              <img
                src="https://cdn1.iconfinder.com/data/icons/material-communication/18/phone-512.png"
                className="w-4"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="text-xs text-gray-500">
                Toll Free | 9 AM - 8 PM IST{" "}
              </p>
              <h3 className="font-semibold">1800-41-99099</h3>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="mt-2 items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/material-communication/18/phone-512.png"
                className="w-4"
                alt=""
              />
            </div>
            <div className="ml-4">
              <p className="text-xs text-gray-500">For Internayional Users </p>
              <h3 className="font-semibold">+91-120-6637501</h3>
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className="items-center py-2  justify-center flex  border border-blue-500 rounded-md">
          <span className="bg-black">
            <img
              src="https://img.freepik.com/premium-photo/phone-call-icon-contact-concept-3d-illustration-minimal-3d-render_255268-1415.jpg"
              className="w-6"
              alt=""
            />
          </span>
          <button className="text-blue-500   hover:bg-blue-300  ">
            Request a Call Back
          </button>
        </div>
        <span className="text-xs">To Check all the FAQ <span className="text-blue-400">click here</span></span>
      </div>
    </>
  );
}
