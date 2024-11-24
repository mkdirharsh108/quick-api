const Pricing = () => {
  return (
    <div className="xl:container m-auto px-6 py-20 md:px-12 xl:px-20">
      <div className="m-auto text-center xl:w-7/12">
        <h2 className="text-2xl font-bold text-gray-800 md:text-4xl">
          Pricing
        </h2>
      </div>
      <div className="mt-12 grid items-center gap-6 md:grid-cols-2 xl:flex xl:space-x-8">
        <div className="group relative md:col-span-1 xl:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 xl:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center priceHeading font-semibold text-gray-700">
              Monthly
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="-ml-6 mt-2 text-3xl font-bold text-blue-500">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800">
                  19
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="m-auto max-w-full space-y-4 pb-6 text-gray-600"
            >
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>5000 API Calls</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>Premium 24/7 support</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>Access To Premium API</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white text-dark">
                Start plan
              </span>
            </button>
          </div>
        </div>

        <div className="group relative row-start-1 md:col-span-2 xl:w-[36%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100  bg-white  shadow-2xl shadow-gray-600/10  transition duration-500 group-hover:scale-105 xl:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center priceHeading font-semibold text-gray-700 ">
              Annual
            </h3>
            <div className="overflow-hidden">
              <div className="flex items-center flex-col">
                <div className="flex">
                  <span className="mt-2 text-3xl font-bold text-blue-500">
                    $
                  </span>
                  <span className="leading-0 text-8xl font-bold text-gray-800">
                    15
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-xl font-bold text-blue-500">
                    Per Month
                  </span>
                </div>
              </div>
              <div className="text-center text-2xl font-medium">
                <span className="text-gray-400 line-through">$228</span>
                <span className="font-semibold text-gray-700">$180</span>
              </div>
              <span className="block text-center text-xs uppercase text-blue-500">
                BILLED YEARLY
              </span>
              <span className="m-auto text-center mt-4 block max-w-full rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 px-4 py-1 text-lg font-medium text-rose-900">
                Exclusive deal
              </span>
            </div>
            <ul
              role="list"
              className="m-auto max-w-full space-y-4 pb-6 text-gray-600 "
            >
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>10000 API Calls</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>Enterprise Special Support</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>Acces to Enterprise API</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>2 API Keys</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-white text-dark">
                Start plan
              </span>
            </button>
          </div>
        </div>

        <div className="group relative md:col-span-1 xl:w-[32%]">
          <div
            aria-hidden="true"
            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 xl:group-hover:scale-110"
          ></div>
          <div className="relative space-y-8 p-8">
            <h3 className="text-center priceHeading font-semibold text-gray-700">
              Free
            </h3>
            <div className="relative flex justify-around">
              <div className="flex">
                <span className="-ml-2 mt-2 text-3xl font-bold text-blue-500">
                  $
                </span>
                <span className="leading-0 text-8xl font-bold text-gray-800">
                  0
                </span>
              </div>
            </div>
            <ul
              role="list"
              className="m-auto max-w-full space-y-4 pb-6 text-gray-600"
            >
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>1000 API Calls</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>24/7 Support</span>
              </li>
              <li className="space-x-2">
                <span className="font-semibold text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </span>
                <span>Access To Basic API</span>
              </li>
            </ul>
            <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-gray-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
              <span className="relative text-base font-semibold text-sky-600 ">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
