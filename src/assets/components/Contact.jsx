export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out via email.</p>
        <a
          href="mailto:your@email.com"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
