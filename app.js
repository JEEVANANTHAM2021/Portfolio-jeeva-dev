function App() {
    try {
        return (
            <div className="portfolio-container mx-auto px-4" data-name="app">
                <Header />
                <CategoryList />
                <Profile />
                <div className="flex flex-col md:flex-row gap-6 md:gap-24 mt-6 md:mt-12">
                    <div className="w-full md:w-1/2" data-name="left-column">
                        <Education />
                        <Skills />
                    </div>
                    <div className="w-full md:w-1/2" data-name="right-column">
                        <Intern />
                        <SoftSkills />
                    </div>
                </div>
                <Portfolio />
                <Contact />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
