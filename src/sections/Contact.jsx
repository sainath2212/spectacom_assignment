function Contact() {
  return (
    <div className="bg-[#FAFAFA] py-20 px-20">
      <h1 className="text-center">Stay upto date, join our newsletter</h1>
      <div className="flex justify-center items-center gap-2 mt-5 flex-wrap">
        <input
          className="w-full sm:w-1/2 p-5 border border-[#CCCCCC] rounded-md"
          placeholder="ENTER YOUR EMAIL"
        ></input>
        <button className="bg-[#b89840] rounded-md py-5 px-10 text-white mt-5 sm:mt-0 sm:ml-5">
          LET'S TALK
        </button>
      </div>
    </div>
  );
}
export default Contact;
