import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import LeDocForm from "./LeDocForm";
import LeDocFormLp from "./LeDocFormLp";

const LeDocDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "Schedule a Demo", formType }) => {
    const [open, setOpen] = useState(false);

    const handleSuccess = () => {
        setOpen(false); // Close the dialog
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-xl" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>{formTitle}</DialogTitle>
                </DialogHeader>
                <div>
                    {formType === 'LeDocForm' && <LeDocForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />}
                    {formType === 'LeDocFormLp' && <LeDocFormLp buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LeDocDailogForm;