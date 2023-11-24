import { WheelChair } from "@/assets/icons";
import ToggleButton from "./ToggleButton";
import {
  archivo300,
  montserrat400,
  montserrat500,
  montserrat600,
} from "@/util/fonts";
import Map from "./Map";

function StepThreeContent({ activeTab }) {
  return (
    <div
      className={`${
        activeTab === 3 ? "py-5" : "h-0"
      } grid w-full grid-cols-1 gap-5 overflow-hidden bg-[#383B42E5] px-3  transition-all duration-1000 ease-out md:grid-cols-2`}
    >
      <div className="col-span-1  p-4">
        <p className={`text-xs ${archivo300} text-white`}>
          Please Log In to your account or continue as guest to book your
          reservation.
        </p>
        <p
          className={`text-xs ${montserrat500} p-10 text-center uppercase text-white`}
        >
          Log In to your account
        </p>

        <div className="my-3">
          <h1 className={`text-sm text-white ${montserrat400}`}>
            Email Address or Username
          </h1>
          <input
            type="text"
            placeholder="Email Address or Username"
            className={`my-2 outline-none w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <div className="my-3">
          <h1 className={`text-sm text-white ${montserrat400}`}>Password</h1>
          <input
            type="text"
            placeholder="Password"
            className={`my-2 outline-none w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <p className={`${archivo300} text-sm text-[#FAC30F] `}>
          Forget Password?
        </p>
        <p className={`text-xs ${archivo300} p-10 text-center text-white`}>
          Don’t have an account?{" "}
          <strong className="text-[#FAC30F] ">Register now.</strong>
        </p>
        <div className="mt-6 flex w-full items-center justify-center">
          <button
            className={`bg-crimson px-14 py-3 text-xs text-white ${montserrat600}`}
          >
            LOGIN
          </button>
        </div>
      </div>

      <div className="col-span-1  p-4">
        <p
          className={`mt-4 text-xs ${montserrat500} p-10 text-center uppercase text-white`}
        >
          Log In to your account
        </p>

        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>
              First Name
            </h1>
            <input
              type="text"
              placeholder="First Name"
              className={`my-2 outline-none w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
            />
          </div>
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>Last Name</h1>
            <input
              type="text"
              placeholder="Last Name"
              className={`my-2 outline-none w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
            />
          </div>
        </div>
        <div className="my-3">
          <h1 className={`text-sm text-white ${montserrat400}`}>
            Phone Number
          </h1>
          <input
            type="text"
            placeholder="Phone Number"
            className={`my-2 w-full outline-none border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <div className="my-3">
          <h1 className={`text-sm outline-none text-white ${montserrat400}`}>Password</h1>
          <input
            type="text"
            placeholder="Email Address"
            className={`my-2 w-full outline-none border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <p className={`${archivo300} text-sm text-[#FAC30F] `}>
          Why do we need this data?
        </p>

        <div className="mt-6 flex w-full items-center justify-center">
          <button
            className={`bg-crimson px-10 py-4 text-xs text-white ${montserrat600}`}
          >
            CONTINUE AS GUEST
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepThreeContent;
