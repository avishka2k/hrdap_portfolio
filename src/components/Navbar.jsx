import React from "react";
import { Basic } from "../util/User";
import { FiDownload } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav class="">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-28">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap">
            {Basic.full_name}
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium gap-6 flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a href="#" class="">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="">
                About Me
              </a>
            </li>
            <li>
              <a href="#" class="">
                Experience
              </a>
            </li>
            <li>
              <button class="text-white bg-primary gap-2 items-center py-3 px-4 flex flex-row rounded-full">
               <FiDownload className="text-primary bg-white text-xl rounded-full w-[30px] p-1 h-[30px]"/> Download CV
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
