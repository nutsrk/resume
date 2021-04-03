const Footer = () => {
  return (
    <div className="pb-10 flex flex-row justify-between items-end pointer-events-auto">
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="font-bold">Email </h1>
          <h1 className="ml-2">Sirirak.b5963898@gmail.com</h1>
        </div>
        <div className="flex">
          <h1 className="font-bold">Phone </h1>
          <h1 className="ml-2">092-772-5330</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="transform rotate-90 mb-8 "> Follow me </h1>
        <div className="w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>

        <a
          href="https://github.com/nutsrk"
          target="_blank"
          className="w-6 pt-3"
        >
          <img src="/image/githup.png" className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
