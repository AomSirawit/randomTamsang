function Footer(){
    return(
        <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded border-t border-primary/10">
          <aside>
            <p className="font-medium text-sm text-base-content/70">
              Copyright © {new_string_year} - ITFeature. All rights reserved.
            </p>
          </aside>
        </footer>
    )
}

const new_string_year = new Date().getFullYear();
export default Footer;