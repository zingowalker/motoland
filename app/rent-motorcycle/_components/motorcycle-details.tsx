import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { MotorcycleProps } from "@/types";

interface MotorcycleDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  motorcycle: MotorcycleProps;
}

const MotorcycleDetails = ({
  isOpen,
  closeModal,
  motorcycle,
}: MotorcycleDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[68vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-red-100 rounded-full"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-red-500 bg-cover bg-center rounded-lg">
                    <Image
                      // src="/him.png"
                      src={`/images/${motorcycle.model
                        .toLowerCase()
                        .replace(/\s+/g, "")}.jpg`}
                      alt="bike model"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  {/* <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image
                        src={generateBikeImageUrl(motorcycle, "29")}
                        // src={`/images/${motorcycle.model
                        //   .toLowerCase()
                        //   .replace(/\s+/g, "")}.jpg`}
                        // src="/him.png"
                        alt="bike model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image
                        src={generateBikeImageUrl(motorcycle, "33")}
                        // src={`/images/${motorcycle.model
                        //   .toLowerCase()
                        //   .replace(/\s+/g, "")}.jpg`}
                        // src="/him.png"
                        alt="bike model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg">
                      <Image
                        src={generateBikeImageUrl(motorcycle, "13")}
                        // src={`/images/${motorcycle.model
                        //   .toLowerCase()
                        //   .replace(/\s+/g, "")}.jpg`}
                        // src="/him.png"
                        alt="bike model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div> */}
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {motorcycle.make} {motorcycle.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(motorcycle).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-grey capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default MotorcycleDetails;
