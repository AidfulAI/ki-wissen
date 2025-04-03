import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`footer-container ${displayClass ?? ""}`}>
        {/* Kontakt */}
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>
            ✉️ <a href="mailto:mail@drdanielbender.de">mail@drdanielbender.de</a>
          </p>
        </div>
        {/* Newsletter */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <ul>
            <li>
              <a href="https://news.aidful.net/" target="_blank" rel="noopener noreferrer">
                Aidful News (🇬🇧)
              </a>
              :{" "}
              <span style="font-weight: normal">
                Meine persönlichen Analysen und Einblicke in die generative KI
              </span>
            </li>
            <li>
              <a href="https://news.aidful.net/" target="_blank" rel="noopener noreferrer">
                Deine KI (🇩🇪)
              </a>
              :{" "}
              <span style="font-weight: normal">
                Infos zum beruflichen Einsatz generativer KI in Deutschland und der EU
              </span>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div className="footer-section">
          <h4>Social Media</h4>
          <a href="https://x.com/aidfulai" target="_blank" rel="noopener noreferrer" aria-label="𝕏">
            <img src="/assets/icons/x.ico" alt="X" />
          </a>
          <a
            href="https://linkedin.com/in/drdanielbender"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/assets/icons/linkedin.ico" alt="LinkedIn" />
          </a>
          <a
            href="https://www.youtube.com/@aidfulai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img src="/assets/icons/youtube.ico" alt="YouTube" />
          </a>
        </div>

        {/* Info */}
        <div className="footer-section">
          <h4>Info</h4>
          <ul>
            <li>
              <a href="/assets/legal/impressum" target="_blank" rel="noopener noreferrer">
                Impressum
              </a>
            </li>
            <li>
              <a href="/assets/legal/datenschutz" target="_blank" rel="noopener noreferrer">
                Datenschutz
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© {year} Dr. Daniel Bender. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
