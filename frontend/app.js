function App() {
    try {
        return (
            <div className="portfolio-container mx-auto px-4" data-name="app">
                <Header />
                <CategoryList />
                <Profile />
                <div className="flex gap-6 mt-6">
                    <div className="w-full w-1/2" data-name="left-column">
                        <Education />
                        <Skills />
                    </div>
                    <div className="w-full w-1/2" data-name="right-column">
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
