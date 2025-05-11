import React from "react";
import { Timeline } from "../../components/ui/timeline";
import myimage1 from "../../assets/myimage1.png";
import myimage3 from "../../assets/myimage3.png";
import myimage2 from "../../assets/myimage2.png";
import myimage4 from "../../assets/myimage4.png";
import myimage7 from "../../assets/myimage7.png";
import myimage8 from "../../assets/myimage8.png";
import myimage9 from "../../assets/myimage9.png";
import myimage10 from "../../assets/myimage10.png";
import myimage11 from "../../assets/myimage11.png";
import myimage12 from "../../assets/myimage12.png";
import myimage13 from "../../assets/myimage13.png";
import myimage14 from "../../assets/myimage14.png";

export function TimelineDemo() {
    const data = [
        {
            title: "2025",
            content: (
                <div>
                    <p className="mb-1 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Smarter.codes (February 2025 – Present)
                    </p>
                    <p className="mb-8 text-base text-neutral-700 md:text-lg dark:text-neutral-300">
                        Contributing to DevOps, AI/ML, and full-stack development projects, focusing on building scalable systems, automations, and innovative product features.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-gray-900 p-1 shadow-lg">
                            <img
                                src={myimage1}
                                alt="startup template"
                                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
                            />
                        </div>
                        <div className="rounded-lg bg-gray-900 p-1 shadow-lg">
                            <img
                                src={myimage3}
                                alt="startup template"
                                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
                            />
                        </div>
                        <div className="rounded-lg bg-gray-900 p-1 shadow-lg">
                            <img
                                src={myimage2}
                                alt="startup template"
                                className="h-20 w-full rounded-lg object-cover md:h-44 lg:h-60"
                            />
                        </div>
                        <div className="rounded-lg bg-gray-900 p-1 shadow-lg flex justify-center items-center overflow-hidden">
                            <img
                                src={myimage4}
                                alt="startup template"
                                className="h-20 w-full rounded-lg object-cover md:h-48 md:w-48 lg:h-64 lg:w-64"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="mb-1 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Tech Aura (November 2023 – February 2025)
                    </p>
                    <p className="mb-8 text-base text-neutral-700 md:text-lg dark:text-neutral-300">
                        Experienced in building and managing CI/CD pipelines, deploying scalable Kubernetes clusters across AWS, Azure, and GCP, and automating monitoring, alerting, and security to achieve 99.9% uptime and faster incident response.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[myimage7, myimage8, myimage9, myimage10].map((img, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg bg-gray-900 p-1 shadow-lg flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt="startup template"
                                    className="
                                        w-full h-28 rounded-lg object-cover
                                        sm:h-36
                                        md:h-44
                                        lg:h-60
                                        xl:h-72
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Internship",
            content: (
                <div>
                    <p className="mb-1 text-xl font-bold text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Wipro (April 2022 – July 2022)
                    </p>
                    <p className="mb-8 text-base text-neutral-700 md:text-lg dark:text-neutral-300">
                        Contributed to industry-level projects, gaining expertise in tools like Maven and Java for workflow optimization. Designed automated CI/CD pipelines using Jenkins, reducing deployment time by 30%. Gained foundational experience with Azure DevOps and AWS Cloud, enhancing skills in cloud-based development and deployment.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[myimage11, myimage12, myimage13, myimage14].map((img, idx) => (
                            <div
                                key={idx}
                                className="rounded-lg bg-gray-900 p-1 shadow-lg flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src={img}
                                    alt="startup template"
                                    className="
                                        w-full h-28 rounded-lg object-cover
                                        sm:h-36
                                        md:h-44
                                        lg:h-60
                                        xl:h-72
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}