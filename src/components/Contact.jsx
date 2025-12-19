export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0f0f14] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-sm uppercase tracking-widest text-indigo-400 mb-3">
          Contact
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s build something together
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Have a project in mind? Reach out via email or WhatsApp and I’ll get
          back to you within 24 hours.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Email */}
          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-2">Email</p>
            <a
              href="mailto:ashish.dypcoe@gmail.com"
              className="text-lg font-medium text-indigo-400 hover:text-indigo-300 transition"
            >
              ashish.dypcoe@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-2">Phone</p>
            <a
              href="tel:8123897887"
              className="text-lg font-medium text-indigo-400 hover:text-indigo-300 transition"
            >
              +91 81238 97887
            </a>
          </div>

          {/* WhatsApp */}
          {/* <div className="bg-[#14141d] border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-gray-400 mb-2">WhatsApp</p>
            <a
              href="https://wa.me/918123897887?text=Hi%20Ashish,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-green-400 hover:text-green-300 transition"
            >
              Chat on WhatsApp
            </a>
          </div> */}

        </div>

        {/* Primary CTA */}
        <a
          href="https://wa.me/918123897887?text=Hi%20Ashish,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 px-8 py-4 rounded-lg font-medium transition text-black"
        >
          Start WhatsApp Chat
        </a>

        {/* Availability */}
        <p className="text-sm text-gray-500 mt-6">
          Available Mon–Fri • 10 AM – 7 PM IST
        </p>

      </div>
    </section>
  );
}
