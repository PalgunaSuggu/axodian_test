import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Register = ({ formType, formTitle, subtitleOne, subtitleTwo, subtitleThree, description, buttonText, defaultSelected, dialogComponent: DialogComponent, backgroundImage }) => {
    return (
        <div className="relative h-[58vh] lg:h-screen flex flex-col items-center justify-center text-center bg-[#663399]" style={{ backgroundImage: `url('${backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="leading-tight text-white mt-4">
                <span className="md:block mb-2">{subtitleOne}</span>
                <span className="md:block mb-2">{subtitleTwo}</span>
                <span className="md:block mb-2">{subtitleThree}</span>
            </h1>
            <p className="text-white text-md md:text-2xl mt-3 max-w-4xl">{description}</p>

            <DialogComponent showProductOptions={true} formTitle={formTitle} defaultSelected={defaultSelected} formType={formType}>
                <Button className="mt-6 flex text-lg items-center gap-4 bg-white text-blue-700 font-semibold p-6 rounded-lg hover:bg-white/95 transition">
                    {buttonText}
                    <MoveRight className="w-5 h-5" />
                </Button>
            </DialogComponent>
        </div>
    );
};

export default Register;
