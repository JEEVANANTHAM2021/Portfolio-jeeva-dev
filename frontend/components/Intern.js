function Intern() {
    try {
        const intern = [
            {
                period: "July-Aug/2024",
                title: "Web development",
                company: "CodersCave"
            },
        ];

        const Affiliation = [
            {
                period: "2023-2024",
                title: "GDSC Club member",
                Club: "Google Developer Students Club"
            },
            {
                period: "2024-2025",
                title: "GDG Cloud Core Team member",
                Club: "Google Developer Group.IIE"
            }
        ];

        return (
            <div className="mt-12" data-name="intern-section">
                <h2 className="section-title intern">INTERN & AFFILIATION</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-8 pl-8">
                        {intern.map((intern, index) => (
                            <div key={index} className="relative" data-name="intern-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-purple-700">{intern.period}</div>
                                <div className="font-bold">{intern.title}</div>
                                <div className="text-white/60">{intern.company}</div>
                            </div>
                        ))}
                        {Affiliation.map((Aff, index) => (
                            <div key={index} className="relative" data-name="Affiliation-item">
                                <div className="timeline-dot absolute -left-8 top-2"></div>
                                <div className="text-purple-700">{Aff.period}</div>
                                <div className="font-bold">{Aff.title}</div>
                                <div className="text-white/60">{Aff.Club}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
