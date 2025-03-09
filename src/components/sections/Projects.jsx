import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className=" max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* project 1 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Test Mate</h3>
                            <p className="text-gray-400 mb-5">A prompt-based application leveraging generative AI to create a chat application using data from GitHub repositories</p>
                            <div className="flex flex-wrap gap-2">
                                {["React.js", "OpenAI", "Flask", "MongoDB", "Langchain", "Git"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        {/* project 2 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Chat-Application</h3>
                            <p className="text-gray-400 mb-5">A web-based application to allow users to communicate through chat rooms and switch between rooms as they please.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Moment.js", "Socket.io", "Express.js", "Path.js", "Http.js"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        {/* project 3 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Segmenting and Clustering Neighborhoods in Toronto	</h3>
                            <p className="text-gray-400 mb-5">Finding correlations between population information and crime rate within the neighborhoods in the city of Toronto.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Jupyter Notebook", "Numpy", "Pandas", "Folium", "Sklearn", "Matplotlib"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        {/* project 4 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Multi-Docker</h3>
                            <p className="text-gray-400 mb-5">A web-based application to calculate the Fibonacci sequence at specific indexes. Temporarily deployed to Amazon Web Services.</p>
                            <div className="flex flex-wrap gap-2">
                                {["React.js", "HTML", "CSS", "Docker", "Travis CI", "AWS", "Nginx", "Redis"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        {/* project 5 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Token Farm Defi App</h3>
                            <p className="text-gray-400 mb-5">A decentralized application that can stake tokens, unstake tokens, and issue tokens. </p>
                            <div className="flex flex-wrap gap-2">
                                {["Solidty", "React.js", "CSS", "HTML", "Chai", "Truffle", "Ganache", "MetaMask"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>

                        {/* project 6 */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Clinic Registration</h3>
                            <p className="text-gray-400 mb-5">A web-based application that supports patient, doctor, and admin users. User information is held within a database, which is used throughout the application. </p>
                            <div className="flex flex-wrap gap-2">
                                {["HTML", "CSS", "PHP", "JS", "SQL", "XML"].map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                            </div>
                        </div>
                    </div>                
                </div>
            </RevealOnScroll>
        </section>
    );
}