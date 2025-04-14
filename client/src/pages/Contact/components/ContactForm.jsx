const ContactForm = () => {
    return (
      <section className="bg-white px-6 md:px-16 py-12">
        <form className="max-w-4xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C]  py-2"
            />
          </div>
  
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className=" w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C]  py-2"
            />
          </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">Email Id</label>
            <input
              type="text"
              placeholder="johnDoe@gmail.com"
              className=" w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C]  py-2"
            />
          </div>
  
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">Subject</label>
            <input
              type="text"
              placeholder="Query Request"
              className=" w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C]  py-2"
            />
          </div>
          </div>
  
          <div className="grid md:grid-cols-1">
            <label className="label">
              <span className="label-text text-sm font-medium">Message</span>
            </label>
            <textarea
              className="input input-bordered focus:outline-none focus:border-[#F2C94C]  py-2 rounded-md h-32 w-full"
              placeholder="Type your Message"
            ></textarea>
          </div>
  
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-yellow-400 text-black hover:bg-yellow-500 px-8 font-semibold"
            >
              Send message
            </button>
          </div>
        </form>
      </section>
    );
  };
  
  export default ContactForm;
  