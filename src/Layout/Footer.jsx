
function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <div className="mt-4">
               
                <p className="text-muted text-center">&copy; Copyrights school software {year}. All rights reserved. Developed by <a href="https://github.com/sulemanmukati" className="text-muted">Suleman Mukati</a></p>
            </div>
        </>
    )
}

export default Footer
