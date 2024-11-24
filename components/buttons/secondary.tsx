type Props = {
  title: string;
};
const SecondaryButton = ({ title }: Props) => {
  return (
    <a
      href="#"
      title=""
      className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 button font-bold text-gray-900 transition-all duration-200 ease-linear border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900 group"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2 group-active:scale-150 transition-transform duration-200 ease-in"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
      {title}
    </a>
  );
};

export default SecondaryButton;
