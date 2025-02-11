import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function ImageTitle({ displayClass }: QuartzComponentProps) {
  return (
    <div class={classNames(displayClass, "img-title")}>
      <a href={"/"}>
        <img alt="Dr. Daniel Bender" src="/static/logo.png" />
      </a>
    </div>
  )
}

ImageTitle.css = `
.img-title {
 margin: -0.65rem 0rem 0 0; /*shifts image vertically to align with the headline*/
}
`

export default (() => ImageTitle) satisfies QuartzComponentConstructor
