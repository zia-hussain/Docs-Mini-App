function Card() {
  return (
    <div>
      <div className="w-60 h-72 rounded-[20px] bg-zinc-700 text-white px-8 py-10 overflow-hidden relative">
        <i className="fa-regular fa-file-lines"></i>
        <p className="text-sm leading-tight mt-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="footer absolute bottom-0 left-0 w-full py-3 px-8">
          <div className="w-full flex justify-between items-center mb-3">
            <h5>.4mb</h5>
            <span className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-black">
              <i className="fa-solid fa-chevron-down text-[.8em]"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
