import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-10">Contact</h3>

        {/* ICON ROW */}
        <div className="flex justify-center gap-8 mb-8">

          {/* Email */}
          <a
            href="mailto:karthikeyan32547@email.com"
            className="group flex flex-col items-center text-muted hover:text-primary transition"
          >
            <MdEmail size={32} />
            <span className="text-sm mt-2">Email</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919025451884"
            className="group flex flex-col items-center text-muted hover:text-primary transition"
          >
            <MdPhone size={32} />
            <span className="text-sm mt-2">Call</span>
          </a>


          {/* GitHub */}
          <a
            href="https://github.com/Karthikeyan2503"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-muted hover:text-primary transition"
          >
            <FaGithub size={32} />
            <span className="text-sm mt-2">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/karthikeyandev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-muted hover:text-primary transition"
          >
            <FaLinkedin size={32} />
            <span className="text-sm mt-2">LinkedIn</span>
          </a>

        </div>

        {/* Optional footer text */}
        <p className="text-muted text-sm">
          Feel free to reach out for opportunities or collaboration
        </p>
      </div>
    </section>
  );
}
