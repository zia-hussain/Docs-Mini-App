import { motion } from "framer-motion";

function Card({ data, refrernce }) {
  return (
    <motion.div
      drag
      dragConstraints={refrernce}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
      className="w-60 h-72 flex-shrink-0 rounded-[45px] bg-zinc-700 text-white px-8 py-10 overflow-hidden relative"
    >
      <i className="fa-regular fa-file-lines"></i>
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="w-full flex justify-between items-center  px-8 py-1 mb-3">
          <h5>{data?.fileSize}</h5>
          <span className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-black">
            <span>
              {data.close ? (
                <i className="fa-solid fa-xmark text-[.8em]"></i>
              ) : (
                <i className="fa-solid fa-chevron-down text-[.8em]"></i>
              )}
            </span>
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data?.tagDetails?.tagColor === "blue"
                ? "bg-blue-600"
                : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
