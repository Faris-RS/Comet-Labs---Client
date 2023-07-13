import React from "react";

export default function Example() {
  return (
    <>
      <section className="mt-20">
        <div className="flex flex-col items-center">
          <div className="text-4xl bg-white mb-4 cursor-default">
            Here is a sneak peek of what our journeys are like
          </div>
          <div className="mt-16 mb-28">
            <div className="videoWrapper ">
              <iframe
                src="https://www.youtube.com/embed/1kGTCEuX3PE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
