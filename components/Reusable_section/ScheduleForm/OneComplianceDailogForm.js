import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import OneComplianceForm from "./OneComplianceForm";

const OneComplianceDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "For exporters handling 5+ shipments per month", redirectTo = '/thank-you' }) => {
    const [open, setOpen] = useState(false);

    const handleSuccess = () => {
        setOpen(false); // Close the dialog
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-white/5  [&>button]:text-white max-h-[70vh] flex flex-col gap-0" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle className="text-white pb-2">{formTitle}</DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto flex-1 p-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <OneComplianceForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} redirectTo={redirectTo}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OneComplianceDailogForm;