import { leagueSpartan700, libre400 } from "@/util/fonts";
import React from "react";

function Contact() {
  return (
    <div class="w-full">
      <section class="mb-32 flex w-full flex-col items-center justify-center">
        <div class="relative -z-10 h-[300px] w-full overflow-hidden bg-[url('https://res.cloudinary.com/dyjirwjvp/image/upload/q_100/v1700916363/ourfleet/bannner/fleet-banner_eccy2x.webp')] bg-cover bg-[50%] bg-no-repeat blur-sm sm:h-[400px]"></div>
        <div class="container">
          <div class="-mt-[100px] block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 md:py-16">
            <div class="mb-12 grid gap-x-3  sm:grid-cols-3">
              <div class="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="dark:text-primary-400 mx-auto mb-6 h-12 w-12 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
                <h6 class={`font-medium uppercase text-white`}>
                  Unites States
                </h6>
              </div>
              <div class="mx-auto mb-12 text-center lg:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="dark:text-primary-400 mx-auto mb-6 h-12 w-12 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h6 class={`font-medium uppercase text-white`}>
                  New York, 94126
                </h6>
              </div>
              <div class="mx-auto mb-6 text-center md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="dark:text-primary-400 mx-auto mb-6 h-12 w-12 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <h6 class={`font-medium uppercase text-white`}>
                  + 01 234 567 89
                </h6>
              </div>
            </div>
            <div class="mx-auto px-0 md:px-14 lg:px-36">
              <form>
                <div class="relative mb-6 flex flex-col">
                  <label class="mb-2 text-white" for="exampleInput90">
                    Topic *
                  </label>

                  <input
                    type="text"
                    class="border-1 rounded border border-zinc-500 bg-transparent p-3"
                    id="exampleInput90"
                    placeholder="Topic"
                  />
                </div>
                <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
                  <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
                    <label class="mb-2 text-white" for="exampleInput90">
                      First Name *
                    </label>

                    <input
                      type="text"
                      class="border-1 w-full rounded border border-zinc-500 bg-transparent p-3"
                      id="exampleInput90"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
                    <label class="mb-2 text-white" for="exampleInput90">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      class="border-1 w-full rounded border border-zinc-500 bg-transparent p-3"
                      id="exampleInput90"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="relative mb-6 flex flex-col justify-between xs:flex-row">
                  <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
                    <label class="mb-2 text-white" for="exampleInput90">
                      Phone *
                    </label>

                    <input
                      type="text"
                      class="border-1 w-full rounded border border-zinc-500 bg-transparent p-3"
                      id="exampleInput90"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="mb-3 flex flex-col xs:mb-0 xs:w-[48%]">
                    <label class="mb-2 text-white" for="exampleInput90">
                      Email *
                    </label>

                    <input
                      type="text"
                      class="border-1 w-full rounded border border-zinc-500 bg-transparent p-3"
                      id="exampleInput90"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="relative mb-6 flex">
                  <div className="flex w-full flex-col">
                    <label class="mb-2 w-full text-white" for="exampleInput90">
                      Message
                    </label>

                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="border-1 rounded border border-zinc-500 bg-transparent p-3"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-10 inline-block w-full rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
