import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Particles } from '@/components/magicui/particles'; // Assuming this is correct
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { BadgeInfo, ChevronDownIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar'; // Assuming this is correct
import getUtmParams from '../../getUtmParams';
import { app_url } from '../../../config/config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Image from 'next/image';

// Helper function to get yesterday's date
const getYesterday = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return today;
};

// Define maxDate for calendar validation
const maxDate = getYesterday();

// Flag data (assuming these are placeholders as the flag image is the same for all)
const flagFL = [
    { code: "USD", flag: '/images/usd.webp' },
    { code: "EUR", flag: '/images/eur.webp' },
    { code: "CAD", flag: '/images/cad.webp' },
    { code: "GBP", flag: '/images/gbp.webp' },
    { code: "INR", flag: '/images/inr.webp' },
];

const flagFLHCL = [
    { code: "USD", flag: '/images/usd.webp' },
    { code: "EUR", flag: '/images/eur.webp' },
    { code: "CAD", flag: '/images/cad.webp' },
    { code: "GBP", flag: '/images/gbp.webp' },
    { code: "INR", flag: '/images/inr.webp' },
];

const getMaxLimitForCurrency = (currencyCode) => {
    let fetchedRate;
    switch (currencyCode) {
        case "USD":
            fetchedRate = 28500;
            break;
        case "GBP":
            fetchedRate = 22490;
            break;
        case "EUR":
            fetchedRate = 26320;
            break;
        case "CAD":
            fetchedRate = 38250;
            break;
        default:
            fetchedRate = 0;
            break;
    }
    return fetchedRate;
};

const LeCheckBanner = () => {
    const [fromValue, setFromValue] = useState("USD");
    const [fromValueHCL, setFromValueHCL] = useState("USD");
    const [toValue, setToValue] = useState("INR"); // Set default "To" value for LeCheck
    const [toValueHCL, setToValueHCL] = useState("INR"); // Set default "To" value for Historical Rates
    const [amount, setAmount] = useState("500"); // Set default amount for LeCheck
    const [calcharges, setCalCharges] = useState({ charges: {}, historicalDate: {}, exchange_rate: "", });
    const [visibleMaxlimit, setVisibleMaxlimit] = useState(false);
    const [historicalDate, setHistoricalDate] = useState({ amount: "", date: undefined, user_amount: "", });
    const [errorDateMessage, setErrorDateMessage] = useState('');
    const [open, setOpen] = useState(false); // Popover open state
    const [date, setDate] = useState(undefined); // Calendar selected date

    // Function to handle redirection to registration screen
    const handleScrollToBetaAccess = () => {
        let utm_params = getUtmParams();
        window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
    };

    // --- LeCheck Tab Handlers ---
    const handleFromChange = (value) => { // Use 'value' directly from Select
        setFromValue(value);
        const maxLimit = getMaxLimitForCurrency(value);
        if (parseFloat(amount) > maxLimit) {
            setVisibleMaxlimit(true);
        } else {
            setVisibleMaxlimit(false);
        }
    };

    const handleToChange = (value) => { // Use 'value' directly from Select
        setToValue(value);
    };

    const handleAmountChange = (event) => {
        let enteredAmount = event.target.value;
        const parsedAmount = parseFloat(enteredAmount);

        if (enteredAmount === "" && event.nativeEvent.inputType === "deleteContentBackward") {
            setAmount("0");
            setVisibleMaxlimit(false);
        } else {
            const maxLimit = getMaxLimitForCurrency(fromValue);
            if (parsedAmount > maxLimit) {
                setVisibleMaxlimit(true);
            } else {
                setVisibleMaxlimit(false);
                setAmount(enteredAmount.charAt(0) === '0' ? parsedAmount.toString() : enteredAmount.toString());
            }
        }
    };

    // --- API Calls ---
    const Chargesapi = async () => {
        if (!amount || parseFloat(amount) === 0) return; // Prevent API call for empty/zero amount

        let data = {
            from_country_code: fromValue,
            to_country_code: toValue,
            amount: parseFloat(amount),
        };

        const URL = `/api/lecheck-charges`;

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            setCalCharges((prev) => ({ ...prev, charges: responseData }));
        } catch (error) {
            console.error("Fetch error for LeCheck charges:", error);
            // Handle errors appropriately, e.g., set an error message in state
        }
    };

    const HistoricalChargesapi = async () => {
        if (!historicalDate.amount || !historicalDate.user_amount || !historicalDate.date) {
            // console.log("Missing historical data for API call.");
            return; // Don't call if essential data is missing
        }

        let historicalchargesdate = {
            from_country_code: fromValueHCL,
            to_country_code: toValueHCL,
            amount: parseFloat(historicalDate.amount),
            user_amount: parseFloat(historicalDate.user_amount),
            date: historicalDate.date.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        };
        const URL = `api/historical-charges`;

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(historicalchargesdate),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            if (responseData.status) {
                setCalCharges((prev) => ({ ...prev, historicalDate: responseData }));
            }
        } catch (error) {
            console.error("Fetch error for historical charges:", error);
        }
    };

    const handleExchangeRate = async () => {
        const selectedDate = date; // Use the 'date' state directly from the calendar
        const minDateLimit = new Date('2010-01-01'); // Correct Date object

        if (selectedDate && selectedDate.getTime() > minDateLimit.getTime() && selectedDate.getTime() < maxDate.getTime()) {
            let dataToSend = {
                from_country_code: fromValueHCL,
                to_country_code: toValueHCL,
                date: selectedDate.toISOString().split('T')[0], // Format date to YYYY-MM-DD
            };

            const URL = `/api/getrates`;

            try {
                const response = await fetch(URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataToSend),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const responseData = await response.json();
                setCalCharges((prev) => ({
                    ...prev,
                    exchange_rate: responseData.exchange_rate,
                }));
                setErrorDateMessage('');
            } catch (error) {
                console.error("Fetch error for exchange rate:", error);
                setErrorDateMessage('Error fetching exchange rate. Please try again.');
            }
        } else {
            setErrorDateMessage('Invalid date range. Date should be between 2010/01/01 and yesterday.');
            setCalCharges((prev) => ({ ...prev, exchange_rate: "" })); // Clear rate if date is invalid
        }
    };


    // --- Historical Rates Tab Handlers ---
    const handleFromChangeHCL = (value) => {
        setFromValueHCL(value);
        // Clear historical amounts when currency changes
        setHistoricalDate((prevState) => ({
            ...prevState,
            amount: "",
            user_amount: "",
        }));
    };

    const handleToChangeHCL = (value) => {
        setToValueHCL(value);
        // Clear historical amounts when currency changes
        setHistoricalDate((prevState) => ({
            ...prevState,
            amount: "",
            user_amount: "",
        }));
    };

    const handleHistoricalData = (e) => {
        const { id, value } = e.target;
        setHistoricalDate((val) => ({ ...val, [id]: value }));
    };

    // --- UseEffects for API Calls ---
    useEffect(() => {
        Chargesapi();
    }, [fromValue, toValue, amount]); // Dependencies for LeCheck API

    useEffect(() => {
        // Trigger HistoricalChargesapi only if all required fields for it are present
        if (historicalDate.amount && historicalDate.user_amount && historicalDate.date) {
            HistoricalChargesapi();
        }
    }, [historicalDate, fromValueHCL, toValueHCL]); // Dependencies for HistoricalChargesapi

    useEffect(() => {
        handleExchangeRate();
    }, [fromValueHCL, toValueHCL, date]); // Dependencies for exchange rate API (using 'date' state)

    return (
        <div className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Particle Background */}
            <Particles className="absolute inset-0 z-0" quantity={80} ease={80} refresh />

            {/* Main Content */}
            <div className="container z-10 flex flex-col items-center px-4">
                <Card className="w-full max-w-2xl rounded-lg">
                    <CardContent className="p-6">
                        <Tabs defaultValue="table1" className="w-full">
                            <TabsList className="bg-gray-100 rounded-md mb-4">
                                <TabsTrigger value="table1" className='text-md'>LeCheck</TabsTrigger>
                                <TabsTrigger value="table2" className='text-md'>Historical Rates</TabsTrigger>
                            </TabsList>

                            {/* --- LeCheck Tab Content --- */}
                            <TabsContent value="table1">
                                <div className="text-left text-sm space-y-4">
                                    <h3 className="text-lg font-semibold">Calculate Charges</h3>
                                    <div className="relative w-full border rounded-md">
                                        {/* Select inside input */}
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <Select value={fromValue} onValueChange={handleFromChange}>
                                                <SelectTrigger className="h-full border-none bg-transparent pl-2 pr-6 focus:ring-0 focus:outline-none text-sm w-[120px]">
                                                    {/* Find the selected currency's flag and display it */}
                                                    <SelectValue className='flex justify-center items-center'>
                                                        {fromValue && (
                                                            <Image width={24} height={24} src={flagFL.find(currency => currency.code === fromValue)?.flag} alt={fromValue} className="inline-block w-6 h-6 mr-2" />
                                                        )}
                                                        {fromValue}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {flagFL.filter(currency => currency.code !== "INR").map((currency) => (
                                                        <SelectItem key={currency.code} value={currency.code}>
                                                            <Image width={24} height={24} src={currency.flag} alt={currency.code} className="inline-block w-6 h-6 mr-2" />
                                                            {currency.code}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/* Input with left padding to avoid overlap */}
                                        <Input placeholder="Enter your amount" type="number" value={amount} onChange={handleAmountChange} className={inputStyles} />
                                    </div>

                                    {visibleMaxlimit && (
                                        <p className="text-red-500 text-xs">
                                            Amount exceeds the maximum limit for {fromValue} ({getMaxLimitForCurrency(fromValue)}).
                                        </p>
                                    )}

                                    {calcharges.charges?.charges &&
                                        Object.entries(calcharges.charges.charges).map(([key, value]) => (
                                            <div key={key} className="flex justify-between items-center">
                                                <p className="font-medium">{key.replace(/_/g, ' ')}:</p>
                                                <p>{value} {fromValue}</p>
                                            </div>
                                        ))}

                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <p>(Rate @{" "}{calcharges.charges?.exchange_rate})</p>
                                        <p>{calcharges.charges?.total_amount} {fromValue}</p>
                                    </div>
                                    <div className="relative w-full border rounded-md">
                                        {/* Select inside input */}
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <Select value={toValue} onValueChange={handleToChange}>
                                                <SelectTrigger className="h-full border-none bg-transparent pl-2 pr-6 focus:ring-0 focus:outline-none text-sm w-[120px]">
                                                    <SelectValue>
                                                        {toValue && (
                                                            <Image width={24} height={24} src={flagFL.find(currency => currency.code === toValue)?.flag} alt={toValue} className="inline-block w-6 h-6 mr-2" />
                                                        )}
                                                        {toValue}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {/* Use a new array for desirable 'To' currencies */}
                                                    {flagFL.filter(currency => currency.code === "INR" || currency.code === "PKR" || currency.code === "NPR").map((currency) => ( // Example: Filter for INR, PKR, NPR
                                                        <SelectItem key={currency.code} value={currency.code}>
                                                            <Image width={24} height={24} src={currency.flag} alt={currency.code} className="inline-block w-6 h-6 mr-2" />
                                                            {currency.code}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {/* Input with left padding to avoid overlap */}
                                        <Input placeholder="Converted Amount" type="number" readOnly value={calcharges.charges?.converted_total_amount || ""} className={inputStyles} />
                                    </div>

                                    <p className="text-xs text-gray-500">*Disclaimer : The rates are indicative. The actual rates may vary at the time of the transaction.</p>

                                    {calcharges.charges?.exchange_rate && (
                                        <p className="text-right text-base font-medium">
                                            {`1 ${fromValue} = ${calcharges.charges.exchange_rate} ${toValue}`}
                                        </p>
                                    )}

                                    <Button onClick={handleScrollToBetaAccess} className="mt-6 w-full">Get Started</Button>
                                </div>
                            </TabsContent>

                            {/* --- Historical Rates Tab Content --- */}
                            <TabsContent value="table2">
                                <div className="text-left text-sm text-gray-700 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-900">Historical Rates</h3>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" id="date" className="w-full justify-between font-normal">
                                                {date ? date.toLocaleDateString() : "Select Date"}
                                                <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={(selectedDate) => {
                                                    setDate(selectedDate);
                                                    setHistoricalDate((prev) => ({ ...prev, date: selectedDate, }));
                                                    setOpen(false); // Close popover on date selection
                                                }}
                                                captionLayout="dropdown"
                                                fromYear={2010} // Example: Start year
                                                toYear={maxDate.getFullYear()} // Example: End year (current year or yesterday's year)
                                                disabled={(day) => day > maxDate || day < new Date('2010-01-01')} // Disable future dates and before 2010
                                            />
                                        </PopoverContent>
                                    </Popover>

                                    {errorDateMessage && <p className="text-red-500 text-xs">{errorDateMessage}</p>}

                                    <div className='flex flex-col sm:flex-row gap-4 items-center'>
                                        <div className="relative w-full border rounded-md">
                                            <div className="absolute inset-y-0 left-0 flex items-center">
                                                <Select value={fromValueHCL} onValueChange={handleFromChangeHCL}>
                                                    <SelectTrigger className="h-full border-none bg-transparent pl-2 pr-6 focus:ring-0 focus:outline-none text-sm w-[120px]">
                                                        {/* Display selected flag and currency code for 'From' currency */}
                                                        <SelectValue>
                                                            {fromValueHCL && (
                                                                <Image width={24} height={24} src={flagFLHCL.find(currency => currency.code === fromValueHCL)?.flag} alt={fromValueHCL} className="inline-block w-6 h-6 mr-2" />
                                                            )}
                                                            {fromValueHCL}
                                                        </SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {/* Filter flagFLHCL for desirable 'From' currencies for Historical Rates */}
                                                        {flagFLHCL.filter(currency => currency.code === "USD" || currency.code === "EUR" || currency.code === "GBP" || currency.code === "CAD").map((currency) => ( // Example: Filter for USD, EUR, GBP, CAD
                                                            <SelectItem key={currency.code} value={currency.code}>
                                                                <Image width={24} height={24} src={currency.flag} alt={currency.code} className="inline-block w-6 h-6 mr-2" />
                                                                {currency.code}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <Input placeholder="Remitter Amount" type="number" id="amount" value={historicalDate.amount} onChange={handleHistoricalData} className={inputStyles} />
                                        </div>

                                        <div className="relative w-full border rounded-md">
                                            <div className="absolute inset-y-0 left-0 flex items-center">
                                                <Select value={toValueHCL} onValueChange={handleToChangeHCL}>
                                                    <SelectTrigger className="h-full border-none bg-transparent pl-2 pr-6 focus:ring-0 focus:outline-none text-sm w-[120px]">
                                                        {/* Display selected flag and currency code */}
                                                        <SelectValue>
                                                            {toValueHCL && (
                                                                <Image width={24} height={24} src={flagFLHCL.find(currency => currency.code === toValueHCL)?.flag} alt={toValueHCL} className="inline-block w-6 h-6 mr-2" />
                                                            )}
                                                            {toValueHCL}
                                                        </SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {/* Filter flagFLHCL for desirable 'To' currencies for Historical Rates */}
                                                        {flagFLHCL.filter(currency => currency.code === "INR" || currency.code === "PKR" || currency.code === "NPR").map((currency) => (
                                                            <SelectItem key={currency.code} value={currency.code}>
                                                                <Image width={24} height={24} src={currency.flag} alt={currency.code} className="inline-block w-6 h-6 mr-2" />
                                                                {currency.code}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <Input placeholder="Total Received Amount" type="number" id="user_amount" value={historicalDate.user_amount} onChange={handleHistoricalData} className={inputStyles} />
                                        </div>
                                    </div>

                                    {fromValueHCL === "USD" && (
                                        <div className="flex justify-between items-center text-base"> {/* Equivalent to Typography variant="body1" and display flex */}
                                            <div>
                                                If you chose LeRemitt, you would have received
                                            </div>
                                            <div>
                                                <TooltipProvider> {/* Wrap Tooltip components with TooltipProvider */}
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Button variant="ghost" className="p-0 h-auto"> {/* Use a ghost button for minimal styling */}
                                                                <BadgeInfo className="w-4 h-4 text-gray-500 hover:text-gray-700" /> {/* Adjust color/size as needed */}
                                                            </Button>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="bg-white p-4 rounded-md shadow-lg text-sm max-w-2xl text-black"> {/* Customize tooltip content styling */}
                                                            {/* Render tooltip content based on historicalDate.charges */}
                                                            {calcharges.historicalDate?.charges &&
                                                                Object.entries(calcharges.historicalDate.charges).map(([key, value]) => (
                                                                    <div key={key} className="flex justify-between items-center mb-1">
                                                                        <p className="font-normal">{key.replace(/_/g, ' ')}:</p> {/* Normalize key */}
                                                                        <p className="font-normal">{value} {fromValue}</p>
                                                                    </div>
                                                                ))}

                                                            <div className="flex justify-between items-center mb-1 font-bold">
                                                                <p>(Rate @{" "}{calcharges.historicalDate?.exchange_rate})</p>
                                                                <p>{calcharges.historicalDate?.total_amount}{" "}{fromValue}</p>
                                                            </div>
                                                            <hr className="my-1 border-gray-300" /> {/* Equivalent to the border div */}
                                                            <div className="flex justify-between items-center text-base font-bold">
                                                                <p>LeRemitt Total received amount</p>
                                                                <p>
                                                                    {calcharges.historicalDate?.converted_total_amount || ""}{" "}
                                                                    INR
                                                                </p>
                                                            </div>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <p>Conversion Rates</p>
                                        {calcharges?.exchange_rate ? (
                                            <p>Rate @ {calcharges?.exchange_rate}</p>
                                        ) : null}
                                    </div>

                                    <div className="relative w-full border rounded-md">
                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                            <Select value={toValueHCL} onValueChange={handleToChangeHCL}>
                                                <SelectTrigger className="h-full border-none bg-transparent pl-2 pr-6 focus:ring-0 focus:outline-none text-sm w-[120px]">
                                                    {/* Display selected flag and currency code */}
                                                    <SelectValue>
                                                        {toValueHCL && (
                                                            <Image width={24} height={24} src={flagFLHCL.find(currency => currency.code === toValueHCL)?.flag} alt={toValueHCL} className="inline-block w-6 h-6 mr-2" />
                                                        )}
                                                        {toValueHCL}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {/* Filter flagFLHCL for desirable 'To' currencies for Historical Rates */}
                                                    {flagFLHCL.filter(currency => currency.code === "INR" || currency.code === "PKR" || currency.code === "NPR").map((currency) => ( // Example: Filter for INR, PKR, NPR
                                                        <SelectItem key={currency.code} value={currency.code}>
                                                            <Image width={24} height={24} src={currency.flag} alt={currency.code} className="inline-block w-6 h-6 mr-2" />
                                                            {currency.code}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Input placeholder="Converted Amount" type="number" readOnly value={fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.converted_total_amount || ""} className={inputStyles} />
                                    </div>

                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <p>LeRemitt Savings</p>
                                        <p>{fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.profit ? `${calcharges.historicalDate.profit} INR` : "INR"}</p>
                                    </div>

                                    <p className="text-xs text-gray-500">*Disclaimer : Historic rates are indicative and may vary based on the specific time of transactions.</p>
                                    <Button onClick={handleScrollToBetaAccess} className="mt-6 w-full">Get Started</Button>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LeCheckBanner;

const inputStyles =
    "pl-[120px] w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]";
