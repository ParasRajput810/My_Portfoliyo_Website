import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import avatar from "../../assets/avatar.jpg";
// Your actual README.md content (copy-paste from your GitHub profile)
const profileReadme = `
# Hi, I'm Paras Rajput 👋

- 🔭 I’m currently working on backend and cloud projects
- 🌱 I’m learning DevOps, Cloud, and AI
- 💬 Ask me about Python, Node.js, Django, Terraform, and more!
- 📫 How to reach me: [LinkedIn](https://www.linkedin.com/in/paras-rajput-810/)
`;

const featuredProjects = [
    {
        name: "Full Stack Node.js App",
        description: "A complete MERN stack application with authentication, REST APIs, and modern UI.",
        details: "This project demonstrates a full-stack web application using Node.js, Express, MongoDB, and React. Features include user authentication, CRUD operations, and responsive design.",
        skills: ["Node.js", "Express", "MongoDB", "React", "JWT"],
        link: "https://github.com/ParasRajput810/Full_stack_nodejs_APP",
        image: "https://placehold.co/400x200?text=Full+Stack+App"
    },
    {
        name: "Twitter Backend Project",
        description: "A scalable backend for a Twitter-like social platform.",
        details: "Implements user management, tweet posting, following system, and notifications. Built with Node.js and MongoDB for scalability.",
        skills: ["Node.js", "MongoDB", "REST API", "Authentication"],
        link: "https://github.com/ParasRajput810/Twitter_Backend_Project",
        image: "https://placehold.co/400x200?text=Twitter+Backend"
    },
    {
        name: "Airline Flights Search Service",
        description: "Microservice for searching and booking airline flights.",
        details: "RESTful API for searching flights, booking, and managing reservations. Built with Python and Flask.",
        skills: ["Python", "Flask", "REST API", "Microservices"],
        link: "https://github.com/ParasRajput810/Airline-Flights-Search-Service",
        image: "https://placehold.co/400x200?text=Airline+Service"
    },
];

const repositories = [
    {
        name: "ParasRajput810",
        description: "👋 My GitHub profile repository. Contains my README, skills, and highlights.",
        tools: ["Markdown", "Profile", "GitHub"],
        updated: "May 2024",
        license: "",
        isPublic: true,
        link: "https://github.com/ParasRajput810/ParasRajput810",
        isProfile: true,
        readme: profileReadme,
    },
    {
        name: "Terraform Config Files",
        description: "Infrastructure as Code: Terraform scripts for cloud resource provisioning.",
        tools: ["Terraform", "IaC", "Cloud"],
        updated: "Apr 2024",
        license: "MIT License",
        isPublic: true,
        link: "https://github.com/ParasRajput810/Terraform_config_files",
    },
    {
        name: "Full Stack Node.js App",
        description: "A complete MERN stack application with authentication, REST APIs, and modern UI.",
        tools: ["Node.js", "Express", "MongoDB", "React"],
        updated: "Mar 2024",
        license: "MIT License",
        isPublic: true,
        link: "https://github.com/ParasRajput810/Full_stack_nodejs_APP",
    },
    {
        name: "Twitter Backend Project",
        description: "A scalable backend for a Twitter-like social platform.",
        tools: ["Node.js", "MongoDB", "REST API"],
        updated: "Feb 2024",
        license: "MIT License",
        isPublic: true,
        link: "https://github.com/ParasRajput810/Twitter_Backend_Project",
    },
    {
        name: "Airline Flights Search Service",
        description: "Microservice for searching and booking airline flights.",
        tools: ["Python", "Flask", "REST API"],
        updated: "Jan 2024",
        license: "MIT License",
        isPublic: true,
        link: "https://github.com/ParasRajput810/Airline-Flights-Search-Service",
    },
];

export default function ProfileWithRepoLink() {
    const [expandedRepo, setExpandedRepo] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);
    const [search, setSearch] = useState("");
    const [tab, setTab] = useState("all"); // "all" or "featured"

    // Filter repos by search
    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen w-full flex bg-[#0d1117] text-white font-sans">
            {/* Sidebar */}
            <aside className="w-80 min-w-[300px] px-8 py-10 flex flex-col items-center bg-[#161b22] border-r border-[#21262d]">
                <img
                    src={avatar}
                    alt="Profile"
                    className="rounded-full w-36 h-36 border-4 border-[#232634] shadow-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-1 text-white">Paras Rajput</h2>
                <p className="text-blue-400 mb-3">ParasRajput810</p>
                <p className="text-gray-300 text-center mb-5 text-sm leading-relaxed">
                    Backend Developer <span role="img" aria-label="star">🌟</span> <br />
                    Java, Python, JavaScript <br />
                    <span className="font-medium">Frameworks:</span> Django, Node.JS
                </p>
                <a
                    href="https://github.com/ParasRajput810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-8 px-4 py-2 bg-[#238636] hover:bg-[#2ea043] text-white rounded-full font-semibold transition"
                >
                    View GitHub Profile
                </a>
            </aside>

            {/* Main Content */}
            <main className="flex-1 px-8 py-10 flex flex-col">
                {/* Search and Tabs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                    <input
                        className="w-full sm:w-1/2 px-4 py-2 rounded bg-[#161b22] border border-[#30363d] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="Find a repository..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button
                            className={`px-4 py-2 rounded-full font-semibold transition ${tab === "all"
                                ? "bg-blue-700 text-white"
                                : "bg-[#161b22] text-blue-300 border border-blue-700"
                                }`}
                            onClick={() => setTab("all")}
                        >
                            All Repos
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full font-semibold transition ${tab === "featured"
                                ? "bg-green-700 text-white"
                                : "bg-[#161b22] text-green-300 border border-green-700"
                                }`}
                            onClick={() => setTab("featured")}
                        >
                            Featured Projects
                        </button>
                    </div>
                </div>

                {/* Parallax/Scrollable Repo List or Featured Projects */}
                <div className="flex-1 overflow-y-auto" style={{ perspective: "1px" }}>
                    {tab === "all" ? (
                        <div className="flex flex-col gap-4">
                            {filteredRepos.length === 0 && (
                                <div className="text-gray-400 text-center py-10">No repositories found.</div>
                            )}
                            {filteredRepos.map((repo, idx) => (
                                <div
                                    key={repo.name}
                                    className={`transition-all duration-300 bg-[#161b22] hover:bg-[#21262d] rounded-xl shadow cursor-pointer px-6 py-4 border border-[#30363d] ${repo.isProfile ? "border-2 border-blue-700" : ""}`}
                                    onClick={() => setExpandedRepo(idx)}
                                    style={{
                                        transform: repo.isProfile ? "translateZ(-0.5px) scale(1.01)" : "none",
                                        boxShadow: repo.isProfile ? "0 4px 24px 0 #23863644" : undefined,
                                    }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className={`text-lg font-semibold ${repo.isProfile ? "text-blue-400" : "text-blue-300"}`}>{repo.name}</span>
                                            {repo.isPublic && (
                                                <span className="ml-2 px-2 py-0.5 bg-blue-900 text-blue-300 rounded-full text-xs font-medium">
                                                    Public
                                                </span>
                                            )}
                                            {repo.isProfile && (
                                                <span className="ml-2 px-2 py-0.5 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                                                    Profile Repo
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-xs text-gray-400">{repo.updated}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm mt-1 truncate">
                                        {repo.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {featuredProjects.map((project, idx) => (
                                <div
                                    key={project.name}
                                    className="bg-[#21262d] hover:bg-[#30363d] rounded-xl p-4 cursor-pointer border border-[#30363d] transition"
                                    onClick={() => setExpandedProject(idx)}
                                    style={{
                                        transform: "translateZ(-0.5px) scale(1.01)",
                                        boxShadow: "0 4px 24px 0 #23863644",
                                    }}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={project.image} alt={project.name} className="w-14 h-14 rounded-lg object-cover" />
                                        <div>
                                            <div className="font-semibold text-green-300">{project.name}</div>
                                            <div className="text-xs text-gray-400">{project.description}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Repo Modal */}
            {expandedRepo !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-[#161b22] rounded-3xl shadow-2xl p-8 w-full max-w-lg relative border border-blue-900">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl font-bold"
                            onClick={() => setExpandedRepo(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h4 className="text-2xl font-bold text-blue-300 mb-2">
                            {filteredRepos[expandedRepo].name}
                        </h4>
                        <p className="text-gray-300 mb-4">{filteredRepos[expandedRepo].description}</p>
                        <div className="mb-2">
                            <span className="font-semibold text-gray-200">Tools:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {filteredRepos[expandedRepo].tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full text-xs"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                            {filteredRepos[expandedRepo].license && <span>{filteredRepos[expandedRepo].license}</span>}
                            <span>Last updated: {filteredRepos[expandedRepo].updated}</span>
                        </div>
                        {/* Profile README Rendered as Markdown */}
                        {filteredRepos[expandedRepo].isProfile && (
                            <div className="mt-4 bg-[#21262d] rounded-lg p-4 border border-[#30363d] overflow-auto max-h-60 prose prose-invert prose-a:text-blue-400">
                                <ReactMarkdown>
                                    {filteredRepos[expandedRepo].readme}
                                </ReactMarkdown>
                            </div>
                        )}
                        {/* Repo Link */}
                        <div className="mt-4">
                            <a
                                href={filteredRepos[expandedRepo].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold transition"
                            >
                                View Repository
                            </a>
                        </div>
                        {/* Featured Projects Button for Profile Repo */}
                        {filteredRepos[expandedRepo].isProfile && (
                            <div className="mt-4">
                                <button
                                    className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold transition"
                                    onClick={() => {
                                        setTab("featured");
                                        setExpandedRepo(null);
                                    }}
                                >
                                    View Featured Projects
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Featured Project Modal */}
            {expandedProject !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-[#161b22] rounded-3xl shadow-2xl p-8 w-full max-w-lg relative border border-green-900">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-green-400 text-2xl font-bold"
                            onClick={() => setExpandedProject(null)}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={featuredProjects[expandedProject].image}
                            alt={featuredProjects[expandedProject].name}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <h4 className="text-2xl font-bold text-green-300 mb-2">
                            {featuredProjects[expandedProject].name}
                        </h4>
                        <p className="text-gray-300 mb-2">{featuredProjects[expandedProject].description}</p>
                        <p className="text-gray-400 mb-4">{featuredProjects[expandedProject].details}</p>
                        <div className="mb-2">
                            <span className="font-semibold text-gray-200">Skills Used:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {featuredProjects[expandedProject].skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-green-900 text-green-300 px-2 py-0.5 rounded-full text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <a
                                href={featuredProjects[expandedProject].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-full font-semibold transition"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}