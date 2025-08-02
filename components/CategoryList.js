function CategoryList() {
    try {
        const categories = [
            { label: "Developing", icon: "dev" },
            { label: "Web Developer", icon: "Web" },
            { label: "Simp UI", icon: "UI" }
        ];

        return (
            <div className="flex flex-wrap gap-4 mt-8" data-name="category-list">
                {categories.map((category, index)=> (
                    <CategoryButton 
                        key={index} 
                        label={category.label} 
                        icon={category.icon}
                    />
                ))}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
