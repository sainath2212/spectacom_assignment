function Contact() {
  return (
    <div className="bg-[#FAFAFA] py-10 px-5 sm:py-20 sm:px-20">
      <h1 className="text-center text-[20px] sm:text-[28px] font-semibold">
        Stay up to date, join our newsletter
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-5">
        <input
          className="w-full sm:w-1/2 p-3 sm:p-5 border border-[#CCCCCC] rounded-md"
          placeholder="ENTER YOUR EMAIL"
          type="email"
        />
        <button className="bg-[#b89840] w-full sm:w-auto rounded-md py-3 sm:py-5 px-10 text-white font-medium">
          LET'S TALK
        </button>
      </div>
    </div>
  );
}

export default Contact;
