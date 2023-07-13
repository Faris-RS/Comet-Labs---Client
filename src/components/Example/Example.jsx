import React from "react";

export default function Example() {
  return (
    <>
      <section className="mt-20 cursor-default">
        <div className="flex flex-col items-center">
          <div className="text-4xl bg-white mb-4 cursor-default">
            Here is a sneak peek of what our journeys are like
          </div>
          <div className="mt-16 mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
              <iframe
                src="https://www.youtube.com/embed/1kGTCEuX3PE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/ocenlwAm0wk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/c65Xdio8in0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/Zal6D0sG-q4"
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
