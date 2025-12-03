import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ScheduleDialog from "../ScheduleForm/LeRemDailogForm";

const GetStarted = ({ tag, heading, subtitleOne, subtitleTwo, buttonText, buttonLink }) => {
    return (
        <div className="bg-[#22277A] text-white py-16 md:py-24">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="text-center">
                    {/* <div className="inline-block uppercase text-white bg-[#0049BA] px-4 py-2 rounded-lg text-md font-semibold mb-4">
                        {tag}
                    </div> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">{heading}</h2>
                </div>
                <p className="text-lg md:text-2xl mt-6">
                    <span className="block mb-2">{subtitleOne}</span>
                    <span className="block mb-2">{subtitleTwo}</span>
                </p>

                <ScheduleDialog showProductOptions={true}>
                    <Button className="mt-6 flex items-center gap-4 bg-white text-blue-700 font-semibold p-6 rounded-lg hover:bg-white/95 transition">
                        <span className="text-lg">{buttonText}</span>
                        <MoveRight className="w-5 h-5" />
                    </Button>
                </ScheduleDialog>

                <Image src="/images/GetStarted.webp" alt="Export Business" width={1000} height={400} priority />
            </div>
        </div>
    );
};

export default GetStarted;
