import React from "react";

export default function Footer() {
  return (
    <>
      <div class="flex flex-col bg-red-500">
        <hr class="border-white" />
        <div class="flex mt-6 mb-6 flex-row justify-center">
          <div class="">
            <img
              src="/xplore-low-resolution-logo-white-on-transparent-background.png"
              alt="test"
              style={{ width: "80px", height: "auto" }}
            />
          </div>
          <div class="flex flex-row space-x-8 items-center justify-between">
            <p class="w-full text-center ml-12 text-white">
              Created by Mohamed Faris
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
