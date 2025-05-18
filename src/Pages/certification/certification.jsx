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
            <div className="certs-root">
                <div className="certs-bg-glow" />
                <div className="certs-main">
                    <div className="certs-header-row">
                        <h1 className="certs-title">Certification</h1>
                        <button
                            className={`certs-download-btn ${selectedCert ? "" : "disabled"}`}
                            onClick={handleDownload}
                            disabled={!selectedCert}
                        >
                            Download
                        </button>
                    </div>
                    <div className="certs-tabs">
                        {["Ongoing", "Completed"].map((t) => (
                            <button
                                key={t}
                                className={`certs-tab-btn ${tab === t ? "active" : ""}`}
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
                    <div className="certs-list">
                        {filteredCerts.map((cert) => (
                            <div
                                key={cert.id}
                                className={`certs-item ${selectedCert && selectedCert.id === cert.id ? "active" : ""}`}
                                onClick={() => {
                                    setSelectedCert(cert);
                                    setShowCreds(false);
                                }}
                                tabIndex={0}
                                onKeyDown={e => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setSelectedCert(cert);
                                        setShowCreds(false);
                                    }
                                }}
                            >
                                <div className="certs-item-left">
                                    <div className="certs-item-icon">
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
                                        <div className="certs-item-name">{cert.name}</div>
                                        <div className="certs-item-org">Certified by {cert.org}</div>
                                    </div>
                                </div>
                                <div className="certs-item-right">
                                    <div className="certs-item-date">{cert.date}</div>
                                    {tab === "Completed" && (
                                        <button
                                            className="certs-creds-btn"
                                            onClick={e => {
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
                    <div className="certs-creds-panel">
                        <button
                            className="certs-creds-close"
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
                        <div className="certs-creds-content">
                            <div className="certs-creds-title">{selectedCert.name}</div>
                            <div className="certs-creds-org">Certified by {selectedCert.org}</div>
                            <div className="certs-creds-box">
                                <div className="certs-creds-label">Credential ID:</div>
                                <div className="certs-creds-id">{selectedCert.creds.id}</div>
                                <a
                                    href={selectedCert.creds.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="certs-creds-link"
                                >
                                    Verify Credential
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Certification;