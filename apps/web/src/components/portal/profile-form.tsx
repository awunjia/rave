"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
    User, Mail, Phone, Shield, Camera, Globe, FileArchive,
    Save, CheckCircle2, Stamp
} from "lucide-react";

interface ProfileFormProps {
    user: {
        id?: string;
        name: string;
        email: string;
        role: string;
        phone?: string;
        nationality?: string;
        passportNumber?: string;
        avatarUrl?: string;
    };
    locale: string;
}

export function ProfileForm({ user, locale }: ProfileFormProps) {
    const [activeTab, setActiveTab] = useState<"personal" | "biometrics">("personal");
    const [savedSuccess, setSavedSuccess] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState<string>(user.avatarUrl || "/images/avatar.jpg");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "+1 (555) 234-5678",
        nationality: user.nationality || "Canadian",
        passportNumber: user.passportNumber || "C89021489",
        passportExpiry: "2031-08-14",
        dateOfBirth: "1992-05-21",
        placeOfBirth: "Toronto, Canada",
        biometricStatus: "Verified & Synced with Embassy"
    });

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAvatarPreview(url);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
    };

    return (
        <div className="space-y-8">
            {/* Header Hero Banner */}
            <div className="p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                    <div className="relative group">
                        <div className="relative h-20 w-20 rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-lg shadow-amber-500/10 flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                            <Image src={avatarPreview} alt={user.name} fill sizes="40" className="object-cover" />
                        </div>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="absolute -bottom-1 -right-1 h-8 w-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-md hover:bg-amber-400 transition-transform hover:scale-105 cursor-pointer"
                            title="Upload Profile Picture"
                        >
                            <Camera size={15} />
                        </button>
                        <input type="file" ref={fileInputRef} onChange={handleAvatarChange} accept="image/*" className="hidden" />
                    </div>

                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h1 className="text-2xl font-black text-slate-900 dark:text-white">{user.name}</h1>
                            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                                <Shield size={12} /> {user.role}
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Official Visa Applicant Profile & Travel Credentials</p>
                    </div>
                </div>

                {savedSuccess && (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold animate-in fade-in zoom-in-95">
                        <CheckCircle2 size={16} /> Biometric profile updated successfully!
                    </div>
                )}
            </div>

            {/* Horizontal Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-2 overflow-x-auto">
                <button
                    type="button"
                    onClick={() => setActiveTab("personal")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${activeTab === "personal"
                        ? "bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                >
                    <User size={16} /> Personal Details
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab("biometrics")}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${activeTab === "biometrics"
                        ? "bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 shadow-sm"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                >
                    <Globe size={16} /> Biometrics & Passport
                </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === "personal" && (
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xs space-y-6 animate-in fade-in">
                        <div className="border-b border-slate-200/80 dark:border-slate-800 pb-4">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Personal Identity Information</h2>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Your legal names and contact data registered for consular processing.</p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Full Legal Name</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none"><User size={18} /></span>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Primary Email</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none"><Mail size={18} /></span>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        disabled
                                        className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/40 pl-10 pr-4 text-xs font-bold text-slate-500 cursor-not-allowed"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Phone Number</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none"><Phone size={18} /></span>
                                    <input
                                        type="text"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Date of Birth</label>
                                <input
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                    className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "biometrics" && (
                    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-2xs space-y-6 animate-in fade-in">
                        <div className="border-b border-slate-200/80 dark:border-slate-800 pb-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Biometric & Passport Credentials</h2>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Official travel documents scanned for embassy verification.</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 text-xs font-extrabold border border-emerald-500/20">
                                <Stamp size={14} /> {formData.biometricStatus}
                            </span>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Nationality / Citizenship</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none"><Globe size={18} /></span>
                                    <input
                                        type="text"
                                        value={formData.nationality}
                                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                                        className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Passport Number</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 pointer-events-none"><FileArchive size={18} /></span>
                                    <input
                                        type="text"
                                        value={formData.passportNumber}
                                        onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                                        className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 font-mono"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Passport Expiry Date</label>
                                <input
                                    type="date"
                                    value={formData.passportExpiry}
                                    onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
                                    className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Place of Birth</label>
                                <input
                                    type="text"
                                    value={formData.placeOfBirth}
                                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                                    className="h-11 w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Save Button */}
                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3.5 text-xs font-black text-slate-950 shadow-md shadow-amber-500/10 hover:bg-amber-400 transition-all cursor-pointer"
                    >
                        <Save size={16} /> Save Profile Changes
                    </button>
                </div>
            </form>
        </div>
    );
}