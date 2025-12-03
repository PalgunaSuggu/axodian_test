import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import AxodianForm from "./AxodianForm";

const AxodianDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "Schedule a Demo" }) => {
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
                    <AxodianForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AxodianDailogForm;