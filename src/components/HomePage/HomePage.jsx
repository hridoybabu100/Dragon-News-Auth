import Image from "next/image";
import Logo from "../../assets/logo.png";
import { format } from "date-fns";

const HomePage = () => {
  return (
    <div className="text-center space-y-3 my-6">
      <div>
        <Image
          src={Logo}
          width={300}
          height={300}
          alt="Logo "
          className="mx-auto"
        ></Image>
      </div>
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "EEEE, MMM dd, ")}</p>
    </div>
  );
};

export default HomePage;
