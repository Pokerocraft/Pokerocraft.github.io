document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const isLocalIntelliJ = window.location.hostname === "localhost" || window.location.port === "63342";
    const pathPrefix = isLocalIntelliJ ? "" : "";
    const menuItems = [
        {text: "Home Page",filename: "index", url: `${pathPrefix}/index.html`},
        {text: "Open Source Projects", filename: "projects", url: `${pathPrefix}/projects.html`},
        {text: "Documents and Notes", filename: "docs-and-notes", url: `${pathPrefix}/docs-and-notes.html`},
        {text: "Software", filename: "software", url: `${pathPrefix}/software.html`},
        //{text: "Installation Guides", filename:"installation-guides", url:`${pathPrefix}/installation-guides.html`}
    ];
    const navContainer = document.getElementById("global-nav");
    if (!navContainer) return;
    menuItems.forEach(item => {
        const isRootHome = item.filename === "index" && (currentPath === `${pathPrefix}/` || currentPath === pathPrefix);

        const isCurrentPage = currentPath.includes(item.filename) || isRootHome;

        const isBlogPost = item.text === "Documents and Notes" && currentPath.includes("/blog/");
        const isDesignDoc = item.text === "Documents and Notes" && currentPath.includes("/design-document/")
        const isReview = item.text === "Software" && currentPath.includes("/reviews/")
        const isInstallGuide = item.text === "Software" && currentPath.includes("/installation-guides/")

        if (isCurrentPage && (!isBlogPost && !isDesignDoc && !isReview && !isInstallGuide)) {
            const disabledLink = document.createElement("a");
            disabledLink.className = "button-link-disabled";
            disabledLink.textContent = item.text;
            navContainer.appendChild(disabledLink);
        } else if (isBlogPost || isDesignDoc || isReview || isInstallGuide) {
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
