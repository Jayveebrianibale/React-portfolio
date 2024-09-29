import Logo from "../assets/D.png";

function Contact() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl first-letter: space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-black dark:text-white">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-10" alt="Jeibii Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Jeibii</span>
              </a>
            </div>

            <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              {["Facebook", "Instagram", "Twitter", "GitHub"].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-300"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* SVG paths for each platform */}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {[
              { title: "Services", links: ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimisation"] },
              { title: "Company", links: ["About", "Meet the Team", "Accounts Review"] },
              { title: "Helpful Links", links: ["Contact", "FAQs", "Live Chat"] },
              { title: "Legal", links: ["Accessibility", "Returns Policy", "Refund Policy", "Hiring Statistics"] },
            ].map((section) => (
              <div key={section.title}>
                <p className="font-medium text-gray-900 dark:text-white">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-300">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2022. Jeibii Brian Ibale. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
