import Marquee from "react-fast-marquee";

const Breaking = () => {
  return (
    <div className="bg-gray-200 flex py-5 px-3 w-[85%] mx-auto">
      <div>
        <button className="btn bg-purple-500 text-white">LatesNews</button>
      </div>
      <Marquee>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, dicta.
        </p>
      </Marquee>
    </div>
  );
};

export default Breaking;
