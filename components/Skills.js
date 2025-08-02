function Skills() {
    try {
        const skills = [
            "html5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Node.js",
            "Git",
            "SQL"
        ];

        const software = [
            { id: "VS", name: "Visual studio code" },
            { id: "GHub", name: "GitHub" },
            { id: "MySql", name: "MySQL" },
            { id: "Git", name: "git" }
        ];

        return (
            <div className="mt-12" data-name="skills-section">
                <h2 className="section-title skills">SKILLS</h2>
                <div className="flex flex-wrap gap-4 mb-8">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 rounded-full border border-green-600 text-white/90">
                            {skill}
                        </span>   
                    ))}
                </div>
                <br></br>
                <br></br>
                <h2 className="section-title skills mb-4">SOFTWARE</h2>
                <div className="flex flex-wrap gap-5 ">
                    {software.map((sw, index) => (
                        <div key={index} className="software-icon px-2 py-2 border-green-600 text-white/90">
                            {sw.id}
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
