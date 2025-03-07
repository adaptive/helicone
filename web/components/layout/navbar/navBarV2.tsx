/* eslint-disable @next/next/no-img-element */
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import SolutionsButton from "./solutionsButton";
import DeveloperButton from "./developerButton";

interface NavBarV2Props {}

const NavBarV2 = (props: NavBarV2Props) => {
  const {} = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const user = useUser();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  return (
    <header className="bg-white top-0 sticky z-30 border-b border-gray-200">
      {!mobileMenuOpen && (
        <nav
          className="mx-auto flex max-w-5xl items-center md:gap-x-8 gap-x-16 py-2"
          aria-label="Global"
        >
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Helicone</span>
              <div>
                <svg
                  width="120"
                  height="20"
                  viewBox="0 0 447 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M140.48 72.897H130.265V49.7126H115.127V72.897H104.877V19.4003H115.127V41.3354H130.265V19.4003H140.48V72.897ZM168.365 73.6319C165.304 73.6319 162.523 73.1297 160.024 72.1255C157.526 71.1212 155.383 69.7494 153.594 68.0104C151.807 66.2956 150.423 64.2749 149.443 61.9478C148.488 59.5963 148.009 57.0856 148.009 54.4156V52.9459C148.009 49.9086 148.488 47.1408 149.443 44.6423C150.399 42.1192 151.733 39.9515 153.447 38.1389C155.163 36.3262 157.196 34.9178 159.547 33.9136C161.899 32.9092 164.458 32.4071 167.226 32.4071C170.092 32.4071 172.639 32.8848 174.868 33.84C177.122 34.7708 179.033 36.0935 180.6 37.8081C182.144 39.5228 183.32 41.5926 184.127 44.0176C184.936 46.4181 185.34 49.0758 185.34 51.9907V56.3262H158.371V56.4365C158.715 58.0287 159.156 59.3146 159.694 60.2944C160.233 61.2498 160.956 62.1192 161.862 62.9031C162.792 63.7114 163.859 64.3361 165.058 64.777C166.258 65.2179 167.569 65.4383 168.99 65.4383C170.999 65.4383 172.946 65.0586 174.832 64.2993C176.718 63.54 178.249 62.401 179.424 60.8822L184.532 66.3937C183.234 68.2307 181.176 69.8964 178.359 71.3906C175.542 72.8848 172.211 73.6319 168.365 73.6319ZM167.153 40.6741C166.002 40.6741 164.948 40.8822 163.993 41.2987C163.038 41.6906 162.204 42.2662 161.494 43.0256C160.759 43.7849 160.147 44.6912 159.658 45.7444C159.167 46.7978 158.8 47.9735 158.555 49.2717H175.309V48.4635C175.309 47.3857 175.114 46.3691 174.721 45.4138C174.33 44.4585 173.791 43.6257 173.105 42.9153C172.419 42.2295 171.574 41.6906 170.57 41.2987C169.59 40.8822 168.451 40.6741 167.153 40.6741ZM194.744 16.4609H216.973V64.5933H228.363V72.897H194.744V64.5933H206.649V24.8015H194.744V16.4609ZM238.869 33.1419H260.51V64.5933H271.276V72.897H238.869V64.5933H250.186V41.4823H238.869V33.1419ZM249.451 22.9643C249.451 22.1805 249.586 21.4579 249.855 20.7965C250.149 20.1107 250.554 19.5228 251.068 19.0329C251.583 18.5675 252.195 18.2001 252.905 17.9306C253.64 17.6611 254.448 17.5264 255.33 17.5264C257.143 17.5264 258.576 18.0409 259.628 19.0697C260.706 20.0739 261.245 21.3722 261.245 22.9643C261.245 24.5565 260.706 25.8669 259.628 26.8957C258.576 27.9001 257.143 28.4021 255.33 28.4021C254.448 28.4021 253.64 28.2675 252.905 27.998C252.195 27.7285 251.583 27.3489 251.068 26.859C250.554 26.3936 250.149 25.8303 249.855 25.1688C249.586 24.483 249.451 23.7481 249.451 22.9643ZM297.288 65.4751C298.292 65.4751 299.247 65.3281 300.153 65.0342C301.059 64.7402 301.855 64.3238 302.542 63.7849C303.227 63.2461 303.754 62.597 304.121 61.8377C304.514 61.0782 304.685 60.2332 304.636 59.3024H314.262C314.311 61.3599 313.883 63.2705 312.977 65.0342C312.095 66.7978 310.882 68.3165 309.339 69.5902C307.795 70.8639 305.995 71.8682 303.938 72.6031C301.905 73.3135 299.75 73.6685 297.471 73.6685C294.385 73.6685 291.678 73.1543 289.351 72.1255C287.024 71.0721 285.089 69.6392 283.545 67.8266C281.978 66.0139 280.791 63.8952 279.982 61.4701C279.199 59.0207 278.806 56.3998 278.806 53.6074V52.505C278.806 49.7126 279.199 47.104 279.982 44.679C280.766 42.2295 281.942 40.0985 283.509 38.2858C285.077 36.4732 287.011 35.0403 289.315 33.9869C291.642 32.9337 294.336 32.4071 297.398 32.4071C299.847 32.4071 302.113 32.7745 304.195 33.5093C306.277 34.2442 308.077 35.273 309.596 36.5957C311.091 37.9429 312.254 39.5717 313.086 41.4823C313.92 43.3685 314.311 45.4873 314.262 47.8388H304.636C304.685 46.8591 304.538 45.9282 304.195 45.0464C303.852 44.1646 303.35 43.4053 302.689 42.7684C302.027 42.1315 301.231 41.6293 300.3 41.262C299.37 40.87 298.353 40.6741 297.251 40.6741C295.634 40.6741 294.299 41.0047 293.245 41.6661C292.193 42.3275 291.359 43.2093 290.747 44.3115C290.111 45.4138 289.657 46.6753 289.388 48.0959C289.143 49.5167 289.021 50.9864 289.021 52.505V53.6074C289.021 55.1505 289.143 56.6447 289.388 58.0898C289.633 59.5106 290.074 60.7598 290.71 61.8377C291.323 62.9398 292.155 63.8216 293.209 64.4831C294.287 65.1443 295.646 65.4751 297.288 65.4751ZM321.829 52.652C321.829 49.7616 322.245 47.0917 323.079 44.6423C323.911 42.1683 325.136 40.025 326.753 38.2123C328.345 36.3997 330.292 34.979 332.594 33.9502C334.922 32.9215 337.579 32.4071 340.568 32.4071C343.556 32.4071 346.214 32.9215 348.541 33.9502C350.868 34.979 352.839 36.3997 354.456 38.2123C356.048 40.025 357.261 42.1683 358.094 44.6423C358.926 47.0917 359.342 49.7616 359.342 52.652V53.4236C359.342 56.3385 358.926 59.0329 358.094 61.5069C357.261 63.9564 356.048 66.0874 354.456 67.9001C352.864 69.7127 350.904 71.1334 348.577 72.1622C346.25 73.1665 343.605 73.6685 340.641 73.6685C337.653 73.6685 334.983 73.1665 332.632 72.1622C330.305 71.1334 328.345 69.7127 326.753 67.9001C325.136 66.0874 323.911 63.9564 323.079 61.5069C322.245 59.0329 321.829 56.3385 321.829 53.4236V52.652ZM332.044 53.4236C332.044 55.0893 332.203 56.6569 332.521 58.1266C332.84 59.5719 333.342 60.8333 334.027 61.911C334.714 63.0134 335.596 63.8829 336.673 64.5198C337.776 65.1567 339.098 65.4751 340.641 65.4751C342.135 65.4751 343.422 65.1567 344.499 64.5198C345.577 63.8829 346.459 63.0134 347.144 61.911C347.806 60.8333 348.296 59.5719 348.614 58.1266C348.932 56.6569 349.092 55.0893 349.092 53.4236V52.652C349.092 51.0353 348.932 49.5045 348.614 48.0593C348.296 46.614 347.806 45.3403 347.144 44.2381C346.459 43.1358 345.577 42.2662 344.499 41.6293C343.422 40.9925 342.111 40.6741 340.568 40.6741C339.049 40.6741 337.751 40.9925 336.673 41.6293C335.596 42.2662 334.714 43.1358 334.027 44.2381C333.342 45.3403 332.84 46.614 332.521 48.0593C332.203 49.5045 332.044 51.0353 332.044 52.652V53.4236ZM366.763 72.897V33.1419H376.022L376.646 38.6532C377.161 37.9184 377.724 37.2448 378.337 36.6324C378.949 36.02 379.598 35.469 380.284 34.979C381.46 34.1462 382.746 33.5093 384.141 33.0684C385.538 32.6275 387.02 32.4071 388.588 32.4071C390.596 32.4071 392.434 32.701 394.099 33.2889C395.765 33.8768 397.21 34.8076 398.435 36.0813C399.636 37.3796 400.566 39.0451 401.227 41.0782C401.913 43.0868 402.256 45.5363 402.256 48.4267V72.897H392.041V48.5736C392.041 47.006 391.858 45.72 391.49 44.7157C391.148 43.6869 390.646 42.8787 389.984 42.2908C389.323 41.7029 388.527 41.2987 387.596 41.0782C386.665 40.8333 385.611 40.7108 384.435 40.7108C383.456 40.7108 382.549 40.8211 381.717 41.0414C380.908 41.262 380.186 41.5926 379.549 42.0335C379.035 42.3519 378.57 42.7317 378.153 43.1726C377.737 43.6135 377.357 44.1033 377.014 44.6423V72.897H366.763ZM429.59 73.6319C426.528 73.6319 423.748 73.1297 421.249 72.1255C418.751 71.1212 416.607 69.7494 414.819 68.0104C413.032 66.2956 411.648 64.2749 410.668 61.9478C409.713 59.5963 409.234 57.0856 409.234 54.4156V52.9459C409.234 49.9086 409.713 47.1408 410.668 44.6423C411.623 42.1192 412.958 39.9515 414.673 38.1389C416.388 36.3262 418.42 34.9178 420.772 33.9136C423.123 32.9092 425.683 32.4071 428.451 32.4071C431.317 32.4071 433.864 32.8848 436.093 33.84C438.347 34.7708 440.258 36.0935 441.825 37.8081C443.369 39.5228 444.544 41.5926 445.352 44.0176C446.161 46.4181 446.564 49.0758 446.564 51.9907V56.3262H419.596V56.4365C419.94 58.0287 420.38 59.3146 420.919 60.2944C421.457 61.2498 422.181 62.1192 423.087 62.9031C424.017 63.7114 425.083 64.3361 426.283 64.777C427.483 65.2179 428.794 65.4383 430.214 65.4383C432.224 65.4383 434.171 65.0586 436.057 64.2993C437.943 63.54 439.473 62.401 440.649 60.8822L445.757 66.3937C444.459 68.2307 442.401 69.8964 439.584 71.3906C436.767 72.8848 433.436 73.6319 429.59 73.6319ZM428.378 40.6741C427.227 40.6741 426.173 40.8822 425.217 41.2987C424.263 41.6906 423.429 42.2662 422.719 43.0256C421.984 43.7849 421.372 44.6912 420.882 45.7444C420.392 46.7978 420.025 47.9735 419.78 49.2717H436.534V48.4635C436.534 47.3857 436.339 46.3691 435.946 45.4138C435.555 44.4585 435.016 43.6257 434.33 42.9153C433.644 42.2295 432.799 41.6906 431.795 41.2987C430.815 40.8822 429.676 40.6741 428.378 40.6741Z"
                    fill="#202020"
                  />
                  <path
                    d="M15.2848 66.293H3.52725C1.57921 66.293 0 67.8722 0 69.8202V82.4735C0 84.4216 1.57921 86.0008 3.52725 86.0008H15.2848C17.2328 86.0008 18.812 84.4216 18.812 82.4735V69.8202C18.812 67.8722 17.2328 66.293 15.2848 66.293Z"
                    fill="#202020"
                  />
                  <path
                    d="M38.7057 66.293H26.9482C25.0001 66.293 23.4209 67.8722 23.4209 69.8202V82.4735C23.4209 84.4216 25.0001 86.0008 26.9482 86.0008H38.7057C40.6537 86.0008 42.2329 84.4216 42.2329 82.4735V69.8202C42.2329 67.8722 40.6537 66.293 38.7057 66.293Z"
                    fill="#202020"
                  />
                  <path
                    d="M62.1275 66.293H50.37C48.422 66.293 46.8428 67.8722 46.8428 69.8202V82.4735C46.8428 84.4216 48.422 86.0008 50.37 86.0008H62.1275C64.0756 86.0008 65.6548 84.4216 65.6548 82.4735V69.8202C65.6548 67.8722 64.0756 66.293 62.1275 66.293Z"
                    fill="#202020"
                  />
                  <path
                    d="M15.2848 41.207H3.52725C1.57921 41.207 0 42.7862 0 44.7343V57.3876C0 59.3357 1.57921 60.9149 3.52725 60.9149H15.2848C17.2328 60.9149 18.812 59.3357 18.812 57.3876V44.7343C18.812 42.7862 17.2328 41.207 15.2848 41.207Z"
                    fill="#202020"
                  />
                  <path
                    d="M38.7057 41.207H26.9482C25.0001 41.207 23.4209 42.7862 23.4209 44.7343V57.3876C23.4209 59.3357 25.0001 60.9149 26.9482 60.9149H38.7057C40.6537 60.9149 42.2329 59.3357 42.2329 57.3876V44.7343C42.2329 42.7862 40.6537 41.207 38.7057 41.207Z"
                    fill="#202020"
                  />
                  <path
                    d="M64.5246 30.4307L54.4425 36.6646C52.7856 37.689 52.1918 39.9096 53.1162 41.6243L58.8252 52.2141C59.7497 53.9289 61.8422 54.4884 63.4991 53.4639L73.5813 47.2301C75.2382 46.2056 75.832 43.9851 74.9075 42.2703L69.1985 31.6805C68.2741 29.9658 66.1815 29.4062 64.5246 30.4307Z"
                    fill="#202020"
                  />
                  <path
                    d="M15.2848 16.125H3.52725C1.57921 16.125 0 17.7042 0 19.6523V32.3056C0 34.2536 1.57921 35.8328 3.52725 35.8328H15.2848C17.2328 35.8328 18.812 34.2536 18.812 32.3056V19.6523C18.812 17.7042 17.2328 16.125 15.2848 16.125Z"
                    fill="#202020"
                  />
                  <path
                    d="M48.3383 11.3873L37.0115 8.13697C35.139 7.59965 33.2378 8.69605 32.765 10.5858L29.7444 22.6584C29.2716 24.5482 30.4062 26.5158 32.2787 27.0531L43.6054 30.3034C45.4779 30.8407 47.3792 29.7444 47.852 27.8546L50.8725 15.782C51.3454 13.8922 50.2107 11.9246 48.3383 11.3873Z"
                    fill="#202020"
                  />
                  <path
                    d="M75.5113 0H63.7538C61.8058 0 60.2266 1.57921 60.2266 3.52725V16.1806C60.2266 18.1286 61.8058 19.7078 63.7538 19.7078H75.5113C77.4594 19.7078 79.0386 18.1286 79.0386 16.1806V3.52725C79.0386 1.57921 77.4594 0 75.5113 0Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex gap-x-1 lg:gap-x-2 items-center text-sm">
            <SolutionsButton />
            <DeveloperButton />
            <Link
              href="/pricing"
              className="flex flex-row items-center font-semibold hover:bg-gray-100 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              Pricing
            </Link>
            <Link
              href="https://blog.helicone.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center font-semibold hover:bg-gray-100 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              Blog
            </Link>
            <Link
              href="/sales"
              className="flex flex-row items-center font-semibold hover:bg-gray-100 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              Contact
            </Link>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-end gap-x-4">
            {user ? (
              <button
                onClick={() => {
                  supabaseClient.auth.signOut().then(() => {
                    router.push("/");
                  });
                }}
                className="bg-gray-900 hover:bg-gray-700 whitespace-nowrap rounded-lg px-4 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="bg-white hover:bg-gray-100 border border-black whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-gray-900 hover:bg-gray-700 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="flex flex-1 justify-end md:hidden">
            {mobileMenuOpen ? (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">close main menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>
        </nav>
      )}
      {/* MOBILE */}
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-50 px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-col gap-10 h-full">
            <div>
              <div className="flex items-center gap-x-6 justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Helicone</span>
                  <Image
                    className="block rounded-lg"
                    src="/assets/landing/helicone.webp"
                    width={150}
                    height={150 / (1876 / 528)}
                    alt="Helicone-full-logo"
                  />
                </a>

                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="py-6 flex flex-col space-y-8">
                    <Link
                      href="/pricing"
                      className="text-md font-semibold text-gray-900"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="https://docs.helicone.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-semibold text-gray-900"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/roadmap"
                      className="text-md font-semibold text-gray-900"
                    >
                      Roadmap
                    </Link>
                    <Link
                      href="https://github.com/Helicone/helicone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-semibold text-gray-900"
                    >
                      Github
                    </Link>
                    <Link
                      href="https://blog.helicone.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-md font-semibold text-gray-900"
                    >
                      Blog
                    </Link>
                  </div>
                  <div className="pt-16 w-full">
                    {user ? (
                      <button
                        onClick={() => {
                          supabaseClient.auth.signOut().then(() => {
                            router.push("/");
                          });
                        }}
                        className="bg-gray-900 hover:bg-gray-700 whitespace-nowrap flex w-full justify-center rounded-lg px-4 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      >
                        Sign Out
                      </button>
                    ) : (
                      <Link
                        href="/signin"
                        className="bg-gray-900 hover:bg-gray-700 whitespace-nowrap flex w-full justify-center rounded-lg px-4 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                      >
                        Sign In
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBarV2;
