import { WheelChair } from "@/assets/icons";
import ToggleButton from "./ToggleButton";
import { montserrat400 } from "@/util/fonts";
import Map from "./Map";

function StepOneContent({ activeTab }) {
  return (
    <div
      className={`${
        activeTab === 1 ? "py-5" : "h-0"
      } grid w-full grid-cols-1 gap-5 overflow-hidden bg-[#383B42E5] px-3  transition-all duration-1000 ease-out md:grid-cols-2`}
    >
      <div className="col-span-1  p-4">
        <div className="mb-3">
          <h1 className={`text-sm text-white ${montserrat400}`}>
            Select Service Type
          </h1>
          <select
            name=""
            id=""
            className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          >
            <option value="" className="text-sm">
              Airport Arrival
            </option>
          </select>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>
              Select Date
            </h1>
            <input
              type="date"
              name=""
              id=""
              className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
            />
          </div>
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>
              Select Time
            </h1>
            <input
              type="time"
              name=""
              id=""
              className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
            />
          </div>
        </div>
        <div className="my-3">
          <h1 className={`text-sm text-white ${montserrat400}`}>
            Pick-Up Location
          </h1>
          <input
            type="text"
            placeholder="Your pick up location"
            className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <div>
          <h1 className={`text-sm text-white ${montserrat400}`}>
            Drop-Off Location
          </h1>
          <input
            type="text"
            placeholder="Your Drop-Off Location"
            className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-sm text-white ${montserrat400}`}
          />
        </div>
        <div className="my-3 flex flex-col justify-between md:flex-row">
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>
              Number of Passenger
            </h1>
            <input
              type="number"
              defaultValue={0}
              className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-center text-sm text-white outline-none ${montserrat400}`}
            />
          </div>
          <div className="w-[100%] md:w-[48%]">
            <h1 className={`text-sm text-white ${montserrat400}`}>
              Luggage Count
            </h1>
            <input
              type="number"
              defaultValue={0}
              className={`my-2 w-full border-0 bg-[#0e0e0e] p-2 text-center text-sm text-white outline-none ${montserrat400}`}
            />
          </div>
        </div>
        <div className="my-4 flex justify-between">
          <div className="flex items-center">
            <WheelChair />
            <h1 className={`mx-2 text-white ${montserrat400}`}>Accessbile</h1>
          </div>
          <ToggleButton />
        </div>
        <div className="mt-6 flex w-full items-center justify-center">
          <button
            className={`bg-crimson p-3 px-10 text-white text-sm${montserrat400}`}
          >
            Select Vehicle
          </button>
        </div>
      </div>

      <div className="col-span-1 h-full md:py-10  md:pb-36 md:pe-3">
        <Map />
      </div>
    </div>
  );
}

export default StepOneContent;
