import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = `${form.firstName} ${form.lastName}`;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-6 md:px-16 py-12">
      <form onSubmit={sendEmail} className="max-w-4xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C] py-2"
            />
          </div>

          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C] py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">
              Email Id
            </label>
            <input
              type="email"
              name="email"
              placeholder="johnDoe@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C] py-2"
            />
          </div>

          <div>
            <label className="label text-sm font-medium label-text mb-2 text-left">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Query Request"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full input input-bordered border-0 border-b rounded-none focus:outline-none focus:border-[#F2C94C] py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1">
          <label className="label">
            <span className="label-text text-sm font-medium">Message</span>
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="input input-bordered focus:outline-none focus:border-[#F2C94C] py-2 rounded-md h-32 w-full"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="btn bg-yellow-400 text-black hover:bg-yellow-500 px-8 font-semibold flex items-center justify-center gap-2"
          >
            {loading ? <Loader className="animate-spin w-4 h-4" /> : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;