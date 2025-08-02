function SoftSkills(){
    try{
        const SoftSkills = [{
            title : "Communication",
            show : "Intermediate"

        },
        {
            title : "Team Collaboration",
            show : "Adaptability"
        },
        {
            title : "Time Management",
            show : "Good at Time"
        }
    ];

    return(
        <div className="mt-12" data-name="softskills-section">
                <h2 className="section-title softskills">SoftSkills</h2>
                <div className="relative">
                    <div className="timeline-line"></div>
                    <div className="space-y-12 pl-8">
                     {SoftSkills.map((softskills, index) => (
                            <div key={index} className="relative" data-name="softskills-item">
                                <div className="timeline-dot relative -left-8"></div>
                                <div className="text-purple-700">{softskills.title}</div><br></br>
                                 <div className="font-bold">{softskills.text}</div>
                                <div className="text-white/60">{softskills.show}</div>
                            </div>
                        ))}
                     </div>   
                </div>
            </div>
        );
        }catch (error) {
                reportError(error);
                return null;
        }

}