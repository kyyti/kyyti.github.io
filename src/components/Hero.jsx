import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="bg-[var(--primary-color)] text-[var(--text-color)]">
      <div className="container flex flex-col justify-center p-2 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:gap-60">
        <div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl whitespace-pre-line">
            Löydä matkasi. {"\n"}Jaa kyyti. {"\n"}Säästä.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />turpis pulvinar, est
            scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <SmartAppDownloadPopup />
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={hero}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const SmartAppDownloadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [deviceType, setDeviceType] = useState("desktop");
  const [operatingSystem, setOperatingSystem] = useState("");

  // App store URLs
  const appStoreUrl = "https://apps.apple.com/app/yourapp";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.yourapp";

  useEffect(() => {
    // Detect device type and OS
    const detectDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Check if mobile
      if (/android/i.test(userAgent)) {
        setDeviceType("mobile");
        setOperatingSystem("android");
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setDeviceType("mobile");
        setOperatingSystem("ios");
      } else {
        setDeviceType("desktop");
        // Detect desktop OS for analytics
        if (navigator.platform.indexOf("Mac") > -1) setOperatingSystem("mac");
        else if (navigator.platform.indexOf("Win") > -1) {
          setOperatingSystem("windows");
        } else if (navigator.platform.indexOf("Linux") > -1) {
          setOperatingSystem("linux");
        }
      }
    };

    detectDevice();
  }, []);

  const handleButtonClick = () => {
    if (deviceType === "mobile") {
      window.location.href =
        operatingSystem === "ios" ? appStoreUrl : playStoreUrl;
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="py-4">
      <button
        onClick={handleButtonClick}
        className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer"
      >
        Lataa Kyyti.app
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[var(--primary-color)] rounded-lg shadow-xl p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-[var(--button-color)] hover:text-gray-700 cursor-pointer"
            >
              <X size={30} />
            </button>

            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Lataa Sovellus</h2>
              <p className="text-gray-600 mt-1">
                Download our all-in-one mobility app
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-lg">
                <img
                  src="/api/placeholder/150/150"
                  alt="QR Code to download app"
                  className="w-36 h-36"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Scan this QR code with your phone
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Available on iOS and Android
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
