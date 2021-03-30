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

      <div className="w-64 h-auto bg-gray-200 ">
        <Contact
          title="Address"
          detail="Phahon Yothin47, Ladyao, 
        Chatuchak, Bangkok 10900"
        ></Contact>
        <Contact title="Email" detail="Sirirak.b5963898@gmail.com"></Contact>
        <Contacts title="Phone" detail="092-7225330"></Contacts>
      </div>
    </div>
  );
};
export default Contacts;
const Contact = ({ title, detail }) => {
  return (
    <div>
      <h1 className="font-bold">{title}</h1>
      <h1>{detail}</h1>
      <div className="w-64 h-0.5 bg-gray-400"></div>
    </div>
  );
};
