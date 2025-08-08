function Header() {
    try {
        return (
            <div className="header-container bg-none md:bg-[url('/img/banner.png')] bg-contain bg-no-repeat bg-right -z-15 " data-name="header">
                <div className="flex gap-2 absolute top-4 left-4" data-name="window-dots">
                    <div className="decoration-dot bg-red-400"></div>
                    <div className="decoration-dot bg-yellow-400"></div>
                    <div className="decoration-dot bg-green-400"></div>
                </div>
                <div className="decoration-star top-0 right-0" data-name="star-decoration">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* First cross - rotated 45 degrees */}
                        <g transform="rotate(45, 20, 20)">
                            <rect x="18" y="8" width="4" height="24" rx="2" fill="#DDD6FE"/>
                            <rect x="8" y="18" width="24" height="4" rx="2" fill="#DDD6FE"/>
                        </g>
                        {/* Second cross */}
                        <rect x="18" y="8" width="4" height="24" rx="2" fill="#C4B5FD"/>
                        <rect x="8" y="18" width="24" height="4" rx="2" fill="#C4B5FD"/>
                    </svg>
                </div>
                <h1 className="text-4xl font-bold mb-4 md:text-6xl" data-name="title">PORTFOLIO</h1>
                <div className="flex gap-4 items-center" data-name="subtitle-container">
                    <span className="px-2 py-2 md:px-6 md:py-4 bg-pink-200 rounded-full text-sm md:text-1.5xl" data-name="name">
                        Jeevanantham
                    </span>
                    <span className="px-2 py-2 md:px-6 md:py-4 bg-lime-200 rounded-full text-sm md:text-1.5xl"data-name="role">
                        Web Developer | React Developer
                    </span>
                    <span className="text-3xl md:text-2xl font-bold" data-name="year">2025</span>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
