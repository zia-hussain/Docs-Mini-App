import React, { useRef } from "react";
import Card from "./Card";

function ForGround() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      fileSize: "1.2mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Open File", tagColor: "blue" },
    },
    {
      desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      fileSize: "2.5mb",
      close: false,
      tagDetails: {
        isOpen: false,
        tagTitle: "View Details",
        tagColor: "green",
      },
    },
    {
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      fileSize: "3.3mb",
      close: false,
      tagDetails: {
        isOpen: false,
        tagTitle: "Save to Drive",
        tagColor: "blue",
      },
    },
    {
      desc: "Cillum dolore eu fugiat nulla pariatur.",
      fileSize: "4.7mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Excepteur sint occaecat cupidatat non proident.",
      fileSize: "1.0mb",
      close: false,
      tagDetails: { isOpen: false, tagTitle: "Share Link", tagColor: "blue" },
    },
    {
      desc: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      fileSize: "5.5mb",
      close: false,
      tagDetails: { isOpen: false, tagTitle: "Preview", tagColor: "green" },
    },
    {
      desc: "Curabitur pretium tincidunt lacus.",
      fileSize: "2.0mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Open File", tagColor: "blue" },
    },
    {
      desc: "Nulla gravida orci a odio.",
      fileSize: "1.8mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Nullam varius, turpis et commodo pharetra.",
      fileSize: "2.9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div>
      <div
        ref={ref}
        className="fixed z-[3] w-full h-full flex gap-7 flex-wrap p-5"
      >
        {data.map((item, index) => {
          return <Card data={item} key={index} refrernce={ref} />;
        })}
      </div>
    </div>
  );
}

export default ForGround;
