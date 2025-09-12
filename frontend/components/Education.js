function Education() {
    try {
        return (
            <div className="mt-12" data-name="education-section">
                <h2 className="section-title education">EDUCATION</h2>
                <div className="space-y-8">
                    <div data-name="education-item">
                        <div className="text-green-600">2022-2025</div>
                        <div className="font-bold text-white/40">Bachelor of Computer Science and Engineering</div>
                        <div className="text-white/60">Info Institute Of Engineering</div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-green-600">2018-2021</div>
                        <div className="font-bold text-white/40">Diploma in Instrumentation and Control Engineering</div>
                        <div className="text-white/60">CIT sandwich Polytechnic College</div>
                    </div>
                    <div data-name="education-item">
                        <div className="text-green-600">2017-2018</div>
                        <div className="font-bold text-white/40">SSLC</div>
                        <div className="text-white/60">Arasur Government Higher Secondary School</div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
