import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CareerForm = ({ children }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>Schedule a Demo</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" required />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="space-y-2 w-full">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Enter your email" required />
                        </div>

                        <div className="space-y-2 w-full">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Please Select Product</Label>
                        <Select required>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a product" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="leremitt">LeRemitt</SelectItem>
                                <SelectItem value="ledoc">LeDoc</SelectItem>
                                <SelectItem value="lefin">LeFin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea id="message" placeholder="Any specific requirements or questions?" rows={4} />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CareerForm;
