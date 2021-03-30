const Contacts = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/image/background_resume.png') `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen px-8"
    >
      <div className="self-center pt-40">
        <div className="pl-28 divide-y divide-gray-400 w-10">
          <h1 className="text-7xl ">Contacts</h1>
          <h1 className="text-2xl pl-48 text-yellow-500 font-medium">
            Information
          </h1>
        </div>
      </div>
      <div className="pl-60 pt-12">
        <div className="w-72 h-auto bg-gray-200 shadow-2xl rounded-lg bg-gradient-to-t from-gray-300 ">
          <div className="flex pl-5">
            <div className="w-10 pt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Contact
              title="Address"
              detail="Phahon Yothin47, Ladyao, 
        Chatuchak, Bangkok 10900"
            ></Contact>
          </div>
          <div className="w-72 h-0.5 bg-gray-400 opacity-30"></div>
          <div className="flex pl-5">
            <div className="w-5 pt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Contact
              title="Email"
              detail="Sirirak.b5963898@gmail.com"
            ></Contact>
          </div>
          <div className="w-72 h-0.5 bg-gray-400 opacity-30 "></div>
          <div className="flex px-5">
          <div className="w-5 pt-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          </div>
          <Contact title="Phone" detail="092-7225330"></Contact>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Contacts;
const Contact = ({ title, detail }) => {
  return (
    <div className="">
      <h1 className="font-bold pt-5 ">{title}</h1>
      <h1 className="pb-5 text-gray-500">{detail}</h1>
    </div>
  );
};
