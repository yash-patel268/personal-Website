import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languages = ["Javascript", "Java", "HTML", "CSS", "Python", "C", "C++", "PHP"];
    const webTech = ["React.js", "Node.js", "Express.js", "Socket.io"]
    const cloudTools = ["Docker", "Kubernetes", "GCP", "AWS", "Kafka", "Git", "GitHub"]
    const databases = ["SQL", "NoSQL", "MongoDB", "MySQL"]
    const testing  = ["Junit", "Jest"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                        A Software Engineer with over five years of experience in designing, developing, scaling, and deploying applications both locally and in the cloud. Passionate about complex challenges and working on innovative projects.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-5 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {webTech.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Cloud & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {cloudTools.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databases.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Testing</h3>
                                <div className="flex flex-wrap gap-2">
                                    {testing.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                </div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> */}
                <div className="grid grid-cols-1 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>

                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li><strong>B.S. in Software Engineer</strong> - Ontario Tech University (2019-2024)</li>
                                <li><strong>Relevant Coursework</strong> - Web Programming, Object-Oriented Programming, Software Design and Architecture, Systems Programming, Data Structures, Design and Analysis of Algorithms, Data Management Systems, Software Quality, Operating Systems, Distributed System, Embedded System</li>
                            </ul>
                        </div>

                        {/* <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Work</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">Software Engineer (date-date)</h4>
                                    <p>Developed</p>
                                </div>
                            </div>
                        </div> */}
                </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};