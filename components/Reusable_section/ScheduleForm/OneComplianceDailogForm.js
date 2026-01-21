import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import OneComplianceForm from "./OneComplianceForm";

const OneComplianceDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "Schedule a Demo" }) => {
    const [open, setOpen] = useState(false);

    const handleSuccess = () => {
        setOpen(false); // Close the dialog
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-white/5  [&>button]:text-white" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle className="text-white">{formTitle}</DialogTitle>
                </DialogHeader>
                <div>
                   <OneComplianceForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OneComplianceDailogForm;