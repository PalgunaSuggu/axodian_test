'use client';

import { Globe } from '@/components/magicui/globe';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Info, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { app_url } from '../../../config/config';
import getUtmParams from '../../getUtmParams';

const Rates = () => {
    const [amount, setAmount] = useState('100');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const toCurrency = 'INR';
    const [calCharges, setCalCharges] = useState({ charges: null, error: null, isLoading: false });
    const [popularRates, setPopularRates] = useState({
        USD: { rate: null, isLoading: false, error: null },
        GBP: { rate: null, isLoading: false, error: null },
        EUR: { rate: null, isLoading: false, error: null },
        CAD: { rate: null, isLoading: false, error: null },
    });

    // Function to handle redirection to registration screen
    const handleScrollToBetaAccess = () => {
        let utm_params = getUtmParams();
        window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
    };

    const flagImages = [
        { code: 'USD', name: 'United States Dollar', flag: '/images/usd.webp' },
        { code: 'EUR', name: 'Euro', flag: '/images/eur.webp' },
        { code: 'CAD', name: 'Canadian Dollar', flag: '/images/cad.webp' },
        { code: 'GBP', name: 'British Pound', flag: '/images/gbp.webp' },
        { code: 'INR', name: 'Indian Rupee', flag: '/images/Inr.webp' },
    ];

    const getFlagImage = (code) => {
        return flagImages.find((c) => c.code === code)?.flag || '';
    };

    // Fetch exchange rate for a single currency
    const fetchExchangeRate = async (currency) => {
        if (!amount || parseFloat(amount) <= 0 || !currency) {
            return { rate: null, error: null, isLoading: false };
        }

        try {
            const response = await fetch('/api/lecheck-charges', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    from_country_code: currency,
                    to_country_code: toCurrency,
                    amount: parseFloat(amount),
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch exchange rate');

            const data = await response.json();
            // Ensure exchange_rate is a number and last_updated is a string
            return {
                rate: parseFloat(data.exchange_rate) || null,
                error: null,
                isLoading: false,
                last_updated: data.last_updated ? String(data.last_updated) : new Date().toISOString(),
            };
        } catch (err) {
            return { rate: null, error: err.message || 'Something went wrong', isLoading: false };
        }
    };

    // Fetch rates for selected currency and all popular conversions
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (!amount || parseFloat(amount) <= 0) {
                setCalCharges({ charges: null, error: null, isLoading: false });
                setPopularRates({
                    USD: { rate: null, isLoading: false, error: null },
                    GBP: { rate: null, isLoading: false, error: null },
                    EUR: { rate: null, isLoading: false, error: null },
                    CAD: { rate: null, isLoading: false, error: null },
                });
                return;
            }

            // Fetch for selected currency
            setCalCharges((prev) => ({ ...prev, isLoading: true, error: null }));
            const selectedResult = await fetchExchangeRate(fromCurrency);
            setCalCharges({
                charges: selectedResult.rate ? { exchange_rate: selectedResult.rate, last_updated: selectedResult.last_updated } : null,
                error: selectedResult.error,
                isLoading: false,
            });

            // Fetch for popular conversions
            const popularConversions = ['USD', 'GBP', 'EUR', 'CAD'];
            const newPopularRates = { ...popularRates };
            for (const cur of popularConversions) {
                newPopularRates[cur] = { ...newPopularRates[cur], isLoading: true };
            }
            setPopularRates(newPopularRates);

            for (const cur of popularConversions) {
                const result = await fetchExchangeRate(cur);
                setPopularRates((prev) => ({
                    ...prev,
                    [cur]: {
                        rate: result.rate,
                        isLoading: false,
                        error: result.error,
                    },
                }));
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [amount, fromCurrency]);

    const convertedAmount = calCharges.charges?.exchange_rate
        ? (parseFloat(amount || '0') * calCharges.charges.exchange_rate).toFixed(2)
        : '0.00';

    // Popular conversions data
    const popularConversions = ['USD', 'GBP', 'EUR', 'CAD'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white flex items-center justify-center pt-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Section */}
                    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 space-y-4 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Exchange Rates</h3>
                            <p className="text-gray-600">
                                Get the latest exchange rates for your international transactions. Our rates are updated in real-time to ensure you get the best value for your money.
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <div className="flex items-center gap-2 text-blue-700 mb-2">
                                <Info className="h-4 w-4" />
                                <span className="font-medium">No Hidden Fees</span>
                            </div>
                            <p className="text-sm text-gray-600">
                                {" The amount shown is what you'll receive. We don't charge any hidden fees on your transfers."}
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h4 className="font-medium text-gray-700">Why choose LeRemitt?</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Competitive exchange rates with no hidden fees</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Fast and secure transfers to India</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Customer support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative flex size-full max-w-lg mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                                LeRemitt
                            </span>
                            <Globe className="top-20" />
                        </div>
                    </div>

                    {/* Right - Info Section */}
                    <Card className="bg-white border border-gray-200 shadow-md rounded-lg flex-grow flex flex-col h-full">
                        <CardContent className="p-6 space-y-6 flex flex-col flex-grow">
                            {/* Title */}
                            <div className="flex items-center justify-center gap-2">
                                <TrendingUp className="h-7 w-7 text-blue-600" />
                                <h2 className="text-xl font-bold text-gray-800">Currency Converter</h2>
                            </div>

                            {/* Amount Input */}
                            <div className="space-y-1">
                                <Label className="text-gray-700">Enter Amount</Label>
                                <Input
                                    type="number"
                                    value={amount}
                                    // onChange={(e) => setAmount(e.target.value)}
                                    onChange={(e) => {
                                        const input = e.target.value;
                                        if (/^\d{0,13}$/.test(input)) {
                                            setAmount(input);
                                        }
                                    }}
                                    placeholder="Amount"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* From Currency */}
                                <div className="space-y-1">
                                    <Label className="text-gray-700">From Currency</Label>
                                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                                        <SelectTrigger className="bg-gray-50 text-gray-900 border border-gray-300">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white text-gray-900 border border-gray-200">
                                            {flagImages
                                                .filter((cur) => cur.code !== 'INR')
                                                .map((cur) => (
                                                    <SelectItem key={cur.code} value={cur.code} className="flex items-center gap-2">
                                                        <Image src={cur.flag} alt={cur.code} width={24} height={24} className="rounded-sm mr-2 w-6 h-6 inline" />
                                                        {cur.code} - {cur.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* To Currency */}
                                <div>
                                    <Label className="text-gray-700 mb-1 block">To Currency</Label>
                                    <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg">
                                        <Image src={getFlagImage("INR")} alt='Inr' width={24} height={24} className="w-6 h-6 mr-2" />
                                        INR -
                                        <span className="ml-auto font-medium">
                                            {calCharges.isLoading ? (
                                                <Skeleton className="w-20 h-4" />
                                            ) : (
                                                `${parseFloat(convertedAmount).toLocaleString()} ${toCurrency}`
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>


                            {/* Result */}
                            <div className="mt-auto space-y-4">
                                {calCharges.isLoading && (
                                    <div className="flex items-center justify-center gap-2 text-gray-500">
                                        <div className="h-5 w-5 border-2 border-b-transparent border-blue-500 rounded-full animate-spin"></div>
                                        Converting...
                                    </div>
                                )}

                                {calCharges.error && (
                                    <div className="text-red-600 text-sm bg-red-100 border border-red-200 p-3 rounded-lg text-center">
                                        {calCharges.error}
                                    </div>
                                )}

                                {!calCharges.isLoading && !calCharges.error && calCharges.charges?.exchange_rate && (
                                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 text-center space-y-2">
                                        <div className="text-lg text-gray-600">
                                            {parseFloat(amount || '0').toLocaleString()} {fromCurrency}
                                        </div>
                                        <div className="text-3xl font-bold text-blue-700">
                                            {parseFloat(convertedAmount).toLocaleString()} {toCurrency}
                                        </div>
                                        <div className="text-sm text-gray-500 pt-2 border-t border-gray-200">
                                            1 {fromCurrency} = {parseFloat(calCharges.charges.exchange_rate).toFixed(2)} {toCurrency}
                                        </div>
                                    </div>
                                )}

                                {/* Last Updated */}
                                {calCharges.charges?.last_updated && (
                                    <div className="text-xs text-gray-500 text-right">
                                        Last updated: {new Date(calCharges.charges.last_updated).toLocaleString()}
                                    </div>
                                )}

                                {/* Popular Conversions */}
                                <div>
                                    <Label className="text-gray-700 mb-2 block">Popular Conversions</Label>
                                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                        {popularConversions.map((cur) => {
                                            const convAmount = popularRates[cur].rate
                                                ? (parseFloat(amount || '0') * popularRates[cur].rate).toFixed(2)
                                                : '0.00';
                                            return (
                                                <div key={cur} className="bg-gray-50 p-2 rounded border flex flex-col">
                                                    <span className="font-medium">{cur} → INR</span>
                                                    <span className="font-medium text-blue-700">
                                                        {popularRates[cur].isLoading ? (
                                                            <Skeleton className="w-16 h-4 mt-1" />
                                                        ) : (
                                                            `${parseFloat(convAmount).toLocaleString()} INR`
                                                        )}
                                                    </span>
                                                    <span className="text-xs text-gray-500 mt-1">
                                                        {popularRates[cur].isLoading ? (
                                                            <Skeleton className="w-20 h-3" />
                                                        ) : popularRates[cur].rate ? (
                                                            `1 ${cur} = ${parseFloat(popularRates[cur].rate).toFixed(2)} INR`
                                                        ) : (
                                                            'Rate unavailable'
                                                        )}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Button onClick={handleScrollToBetaAccess} className="w-full">Get Started</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Rates;