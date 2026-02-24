import Container from "../layout/Container";
import Reveal from "../ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-neutral-800">
      <Container>
        <Reveal>
          <h3 className="text-3xl font-semibold mb-10">Contact</h3>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-neutral-400">
                If you want to work together, send me a message.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <p className="text-neutral-300">
                  Email:{" "}
                  <a
                    className="underline hover:text-white"
                    href="mailto:your@email.com"
                  >
                    your@email.com
                  </a>
                </p>

                <p className="text-neutral-300">
                  LinkedIn:{" "}
                  <a
                    className="underline hover:text-white"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    profile
                  </a>
                </p>

                <p className="text-neutral-300">
                  GitHub:{" "}
                  <a
                    className="underline hover:text-white"
                    href="https://github.com/galileo73"
                    target="_blank"
                    rel="noreferrer"
                  >
                    galileo73
                  </a>
                </p>
              </div>
            </div>

            <form
              className="border border-neutral-800 rounded-xl p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="block text-sm text-neutral-300">Name</label>
              <input
                className="mt-2 w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white"
                placeholder="Your name"
              />

              <label className="block text-sm text-neutral-300 mt-5">Email</label>
              <input
                type="email"
                className="mt-2 w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white"
                placeholder="you@email.com"
              />

              <label className="block text-sm text-neutral-300 mt-5">
                Message
              </label>
              <textarea
                className="mt-2 w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 outline-none focus:border-white min-h-[140px]"
                placeholder="Write your message..."
              />

              <button
                className="mt-6 w-full px-5 py-3 rounded-lg bg-white text-black font-medium hover:opacity-90"
                type="submit"
              >
                Send Message
              </button>

              <p className="mt-3 text-xs text-neutral-500">
                Next step: connect to Netlify Forms.
              </p>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}