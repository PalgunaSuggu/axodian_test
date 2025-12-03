import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import LeFinForm from "./LeFinForm";

const LeFinDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "" }) => {
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
                    <LeFinForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LeFinDailogForm;