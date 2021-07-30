function Header() {
    const headerLinks = ['Projects', 'Skills', 'Blog', 'About']
    const linksInNav = headerLinks.map(link => {
        return (
            <li className="nav-item active" key={link}>
                <a id={`${link}-link`} className="nav-link" href={`#${link}`}>{link}</a>
            </li>
        )
    })
    
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark justify-content-end">
                <h2 className="ml-1 mr-auto" id="brand">Megan McCarty</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                    <span className="sr-only">Toggle Menu</span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {linksInNav}
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;