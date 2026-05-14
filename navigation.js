document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const isLocalIntelliJ = window.location.hostname === "localhost" || window.location.port === "63342";
    const pathPrefix = isLocalIntelliJ ? "/Pokerocraft.github.io" : "";
    const menuItems = [
        {text: "Home Page",filename: "index", url: `${pathPrefix}/index.html`},
        {text: "Projects", filename: "projects", url: `${pathPrefix}/projects.html`},
        {text: "Blog", filename: "blog", url: `${pathPrefix}/blog.html`},
        {text: "Software", filename: "software", url: `${pathPrefix}/software.html`}
    ];
    const navContainer = document.getElementById("global-nav");
    if (!navContainer) return;
    menuItems.forEach(item => {
        const isRootHome = item.filename === "index" && (currentPath === `${pathPrefix}/` || currentPath === pathPrefix);

        const isCurrentPage = currentPath.includes(item.filename) || isRootHome;

        const isBlogPost = item.text === "Blog" && currentPath.includes("/blog/");
        const isReview = item.text === "Software" && currentPath.includes("/reviews/")

        if (isCurrentPage && (!isBlogPost && !isReview)) {
            const disabledLink = document.createElement("a");
            disabledLink.className = "button-link-disabled";
            disabledLink.textContent = item.text;
            navContainer.appendChild(disabledLink);
        } else if (isBlogPost || isReview) {
            const activeLink = document.createElement("a");
            activeLink.href = item.url;
            activeLink.className = "button-link-active";
            activeLink.textContent = item.text;
            navContainer.appendChild(activeLink)
        } else {
            const normalLink = document.createElement("a");
            normalLink.href = item.url;
            normalLink.className = "button-link";
            normalLink.textContent = item.text;
            navContainer.appendChild(normalLink);
        }
    });
});
