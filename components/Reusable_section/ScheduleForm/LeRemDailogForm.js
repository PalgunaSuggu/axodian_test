// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import Schedule from "./Schedule";

// const LeRemDailogForm = ({ children, showProductOptions }) => {

//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 {children}
//             </DialogTrigger>
//             <DialogContent className="max-w-lg">
//                 <DialogHeader>
//                     <DialogTitle>Schedule a Demo</DialogTitle>
//                 </DialogHeader>
//                 <div>
//                     <Schedule showProductOptions={showProductOptions} />
//                 </div>
//             </DialogContent>
//         </Dialog>
//     );
// };

// export default LeRemDailogForm;

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from 'react';
import LeRemForm from "./LeRemForm";

const LeRemDailogForm = ({ children, showProductOptions = true, defaultSelected, buttonText, formTitle = "Schedule a Demo" }) => {
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
                    <LeRemForm buttonText={buttonText} showProductOptions={showProductOptions} onSuccess={handleSuccess} defaultSelected={defaultSelected} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LeRemDailogForm;