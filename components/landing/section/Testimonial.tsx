const Testimonial = () => {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600  md:px-12 xl:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-800  md:text-4xl">
          What&apos;s our customers say
        </h2>
        <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
          <div className="row-span-2 rounded-3xl border border-gray-100  bg-white p-8 text-center shadow-lg shadow-gray-600/10 hover:shadow-cyan-300/20 ease-in transition-all duration-200 cursor-pointer">
            <div className="flex h-full flex-col justify-center space-y-4">
              <img
                className="mx-auto h-20 w-20 lg:w-24 lg:h-24 rounded-full"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <p className="md:text-xl">
                <span>&quot;</span>I have been using the API from this website
                for the past six months and I am extremely satisfied with the
                results. The API is easy to use and the documentation is clear
                and thorough. It has greatly improved the efficiency of my
                business and I would highly recommend it to anyone in need of a
                reliable and powerful API.
                <span>&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Alexander Jane
                </h6>
                <span className="text-xs text-gray-500">
                  Enterprise Customer
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 bg-white  p-8 text-center shadow-lg shadow-gray-600/10 hover:shadow-cyan-300/20 ease-in transition-all duration-200 cursor-pointer">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span>&quot;</span> As a developer, I am always on the lookout
                for top-quality APIs that can help me build better products. The
                API on this website has been a game changer for me. It is
                well-maintained, constantly updated, and the customer support is
                excellent. I have never experienced any downtime or issues while
                using it and I would highly recommend it to any developer.
                <span>&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">
                  Jane Farry
                </h6>
                <span className="text-xs text-gray-500">
                  Full stack developer
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100  bg-white p-8 text-center shadow-lg shadow-gray-600/10 hover:shadow-cyan-300/20 ease-in transition-all duration-200 cursor-pointer">
            <img
              className="mx-auto h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="user avatar"
              height="220"
              width="220"
              loading="lazy"
            />
            <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
              <p>
                <span>&quot;</span> I was skeptical at first about using this
                website&apos;s API, but I am glad I gave it a try. It has
                exceeded my expectations in every way. The API is fast,
                reliable, and easy to use. The customer support team is also
                very helpful and responsive. I have already recommended this API
                to my colleagues and I will continue to use it for all my
                projects.
                <span>&quot;</span>
              </p>
              <div>
                <h6 className="text-lg font-semibold leading-none">Sane Doe</h6>
                <span className="text-xs text-gray-500">Buisness Owner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
