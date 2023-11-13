function ButtonsRow() {
  return (
    <div className="z-50 flex flex-col items-center sm:flex-row sm:justify-between">
      <button className="mb-3 w-full bg-black bg-opacity-70 py-3 text-white sm:mb-0 sm:w-[200px]">
        New Reservation
      </button>
      <button className="w-full bg-black bg-opacity-70 py-3 text-white sm:w-[200px]">
        Login
      </button>
    </div>
  );
}

export default ButtonsRow;
