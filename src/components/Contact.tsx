import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import config from "../configuration/config.json";

function Contact() {
  const [processing, setProcessing] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [event.currentTarget.id]: event.currentTarget.value });
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setProcessing(true);

    axios
      .post<typeof formData>(config.FormspreeURL, { ...formData })
      .then(() => {
        setFormData({
          name: "",
          email: "",
          telephone: "",
          message: "",
        });

        toast.success("Thank you for contacting me.", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error(`An error [${error.message}] occured`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => setProcessing(false));
  }

  return (
    <>
      <section id="contact" className="section-container section-spacing">
        <div className="surface-card grid gap-10 p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div>
            <p className="eyebrow mb-3">Say hello</p>
            <h2 className="section-title">Have a good problem to solve?</h2>
            <p className="muted-copy mt-5">
              If you’re building something useful and need an engineering partner, I’d be glad to hear about it.
            </p>
            <a href="mailto:hassaanarif.ha@gmail.com" className="teal-link mt-6 inline-block font-medium">
              hassaanarif.ha@gmail.com ↗
            </a>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="w-full">
              <label className="mb-2 block text-xs font-bold" htmlFor="name">
                NAME <span className="accent-text"> *</span>
              </label>
              <input
                id="name"
                required
                type="text"
                autoComplete="off"
                className="input-surface w-full rounded-xl border border-white/10 px-4 py-3 text-[#eef1ec] placeholder:text-[#778078] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block text-xs font-bold" htmlFor="email">
                EMAIL <span className="accent-text"> *</span>
              </label>
              <input
                id="email"
                required
                autoComplete="off"
                type="email"
                className="input-surface w-full rounded-xl border border-white/10 px-4 py-3 text-[#eef1ec] placeholder:text-[#778078] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block text-xs font-bold" htmlFor="telephone">
                TELEPHONE
              </label>
              <input
                id="telephone"
                required
                autoComplete="off"
                type="tel"
                className="input-surface w-full rounded-xl border border-white/10 px-4 py-3 text-[#eef1ec] placeholder:text-[#778078] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Telephone"
                value={formData.telephone}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <label className="mb-2 block text-xs font-bold" htmlFor="message">
                MESSAGE <span className="accent-text"> *</span>
              </label>
              <textarea
                id="message"
                required
                autoComplete="off"
                maxLength={2000}
                rows={6}
                className="input-surface w-full resize-none rounded-xl border border-white/10 px-4 py-3 text-[#eef1ec] placeholder:text-[#778078] focus:border-[var(--accent)] focus:outline-none"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <button
                type="submit"
                disabled={processing}
                className="accent-bg accent-contrast-text w-full rounded-full px-6 py-3 font-bold transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                {processing ? (
                  <div className="loading-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer />
    </>
  );
}

export default Contact;
