import React, { useState } from "react";
import "./certification.css";
import Header from "../../components/Header/Header";

function Certification() {
    const [tab, setTab] = useState("Ongoing");
    const [selectedCert, setSelectedCert] = useState(null);
    const [showCreds, setShowCreds] = useState(false);

    // Example data
    const certifications = [
        {
            id: 1,
            name: "DevOps Engineer Expert (AZ-400)",
            org: "Microsoft",
            date: "May 2025",
            status: "Ongoing",
            creds: null,
            pdf: "#",
        },
        {
            id: 2,
            name: "Azure Fundamentals (AZ-900)",
            org: "Microsoft",
            date: "May 2022",
            status: "Completed",
            creds: {
                id: "D7C28D418E9A4D16",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/ParasRajput-6581/D7C28D418E9A4D16?sharingId=5040AE3638972970",
            },
            pdf: "#",
        },
        {
            id: 3,
            name: "Azure Data Fundamentals (DP-900)",
            org: "Microsoft",
            date: "July 2022",
            status: "Completed",
            creds: {
                id: "C71BFCE8A524A801",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/ParasRajput-6581/C71BFCE8A524A801?sharingId=5040AE3638972970",
            },
            pdf: "#",
        },
        {
            id: 4,
            name: "Azure AI Fundamentals (AI-900)",
            org: "Microsoft",
            date: "July 2022",
            status: "Completed",
            creds: {
                id: "DCE12F069F81F450",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/ParasRajput-6581/DCE12F069F81F450?sharingId=5040AE3638972970",
            },
            pdf: "/AI.pdf",
        },
        {
            id: 5,
            name: "Azure Administrator Associate (AZ-104)",
            org: "Microsoft",
            date: "September 2023",
            status: "Completed",
            creds: {
                id: "FC5C9249961C053D",
                url: "https://learn.microsoft.com/api/credentials/share/en-us/ParasRajput-6581/FC5C9249961C053D?sharingId=5040AE3638972970",
            },
            pdf: "#",
        },
    ];

    const filteredCerts = certifications.filter((c) =>
        tab === "Ongoing" ? c.status === "Ongoing" : c.status === "Completed"
    );

    const handleDownload = () => {
        if (selectedCert) {
            alert(`Downloading certificate PDF for ${selectedCert.name}`);
        }
    };

    return (
        <>
            <Header />
            {/* Add enough top margin to avoid overlap with Header */}
            <div className="min-h-screen bg-gradient-to-br from-[#181b20] to-[#23272f] text-white flex flex-col items-center py-10 px-4" style={{ marginTop: "55px" }}>
                <div className="w-full max-w-3xl">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-5xl font-bold tracking-tight">Certification</h1>
                        <button
                            className={`border border-gray-500 rounded-lg px-8 py-2 text-lg font-medium transition
                ${selectedCert ? "hover:bg-gray-700" : "opacity-50 cursor-not-allowed"}`}
                            onClick={handleDownload}
                            disabled={!selectedCert}
                        >
                            Download
                        </button>
                    </div>
                    <div className="flex space-x-12 border-b border-gray-700 mb-6">
                        {["Ongoing", "Completed"].map((t) => (
                            <button
                                key={t}
                                className={`pb-2 text-xl font-medium transition ${tab === t
                                    ? "text-blue-400 border-b-2 border-blue-400"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                                onClick={() => {
                                    setTab(t);
                                    setSelectedCert(null);
                                    setShowCreds(false);
                                }}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-6">
                        {filteredCerts.map((cert) => (
                            <div
                                key={cert.id}
                                className={`flex items-center justify-between bg-[#23272f] rounded-2xl px-8 py-6 shadow transition cursor-pointer border border-transparent hover:border-blue-500 ${selectedCert && selectedCert.id === cert.id
                                    ? "ring-2 ring-blue-400"
                                    : ""
                                    }`}
                                onClick={() => {
                                    setSelectedCert(cert);
                                    setShowCreds(false);
                                }}
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="bg-[#1a1d22] rounded-lg p-4">
                                        {/* Certificate icon */}
                                        <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                                            <rect width="24" height="24" rx="6" fill="#23272f" />
                                            <path
                                                d="M7 7h10v7H7V7zm0 7v3h10v-3"
                                                stroke="#8b8b8b"
                                                strokeWidth="1.5"
                                                strokeLinejoin="round"
                                            />
                                            <circle
                                                cx="9"
                                                cy="17"
                                                r="1"
                                                fill="#8b8b8b"
                                            />
                                            <circle
                                                cx="15"
                                                cy="17"
                                                r="1"
                                                fill="#8b8b8b"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold">
                                            {cert.name}
                                        </div>
                                        <div className="text-gray-400 text-lg">
                                            Certified by {cert.org}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-gray-400 text-lg">{cert.date}</div>
                                    {tab === "Completed" && (
                                        <button
                                            className="ml-2 bg-gray-800 hover:bg-blue-700 text-blue-300 px-4 py-1 rounded transition"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCert(cert);
                                                setShowCreds(true);
                                            }}
                                        >
                                            Show Creds
                                        </button>
                                    )}
                                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                        <path
                                            d="M9 6l6 6-6 6"
                                            stroke="#8b8b8b"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Side panel for creds */}
                {showCreds && selectedCert && selectedCert.creds && (
                    <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#181b20] shadow-2xl border-l border-gray-800 z-50 flex flex-col p-8 animate-fadeIn">
                        <button
                            className="self-end mb-4 text-gray-400 hover:text-white"
                            onClick={() => setShowCreds(false)}
                        >
                            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                                <path
                                    d="M18 6L6 18M6 6l12 12"
                                    stroke="#8b8b8b"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <div className="text-2xl font-bold mb-2">{selectedCert.name}</div>
                            <div className="text-gray-400 mb-4">Certified by {selectedCert.org}</div>
                            <div className="bg-gray-800 rounded-lg px-6 py-4 mb-4 w-full text-center">
                                <div className="text-gray-300 text-lg mb-2">Credential ID:</div>
                                <div className="text-blue-400 text-xl font-mono mb-2">{selectedCert.creds.id}</div>
                                <a
                                    href={selectedCert.creds.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline"
                                >
                                    Verify Credential
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                <style>{`
          .animate-fadeIn {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(40px);}
            to { opacity: 1; transform: translateX(0);}
          }
        `}</style>
            </div>
        </>
    );
}

export default Certification;