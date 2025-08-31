export const About = () => {
    
    const languages = [
        "Python",
        "C++ programming",
        "Java",
        "JavaScript"
    ];
    const databases= [
        "SQL(MySQL)",
        "NoSQL(MongoDB)"
    ];
    const webDevelopment= [
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "TailwindCSS",
        "Bootstrap",
        "Jquery"
    ];
    const toolsPlatforms= [
        "Git & GitHub",
        "VS code",
        "Tableau",
        "PowerBi",
        "MySQL",
        "Jupyter Notebook"
    ];
    const coreFundamental=[
        "Data Structures & Algorithms (DSA)", 
        "Object-Oriented Programming (OOP)"
    ]
    return(
        <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About ME
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Hi, I’m Shivam Anand, a Computer Science Engineering student passionate about 
                    building impactful web applications and exploring the potential of machine learning. 
                    From developing full-stack solutions with React, Node.js, and MongoDB to creating 
                    AI-driven projects with Python, OpenCV, and TensorFlow, I enjoy solving real-world 
                    problems with code.
                </p>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {languages.map((tech,key) => (
                                <span key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Web Development
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {webDevelopment.map((tech,key) => (
                                <span key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Tools&Platforms 
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {toolsPlatforms.map((tech,key) => (
                                <span key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Databases 
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {databases.map((tech,key) => (
                                <span key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">
                            Core Fundamental 
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {coreFundamental.map((tech,key) => (
                                <span key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                    </div>
                </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                    <h4 className="font-bold py-2">
                        Web Development Intern at HIIT (May–July 2024)
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    Developed and deployed 10+ responsive websites using HTML, CSS, jQuery, Bootstrap, and MySQL in a team of 4 interns.
                    </li>
                    <li>
                    Optimized SQL queries, reducing page load time by 20% and improving application performance.

                    </li>
                    <li>
                    Assisted in understanding and integrating client requirements into the final product, ensuring all deliverables met expectations and deadlines.
                    </li>
                    </ul>
                    </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                    <strong> Bachelor of Engineering in CSE </strong> - Chandigarh University
                    (2021–2025) | CGPA: 7.31
                    </li>
                    <li>
                    <strong> Intermediate </strong> - Trident Public School
                    (2020–2021) | Percentage: 76.6
                    </li>
                    <li>
                    <strong> Matriculation </strong> - North Point Children’s School
                    (2018–2019) | Percentage: 75.2
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </section>
    )
}
