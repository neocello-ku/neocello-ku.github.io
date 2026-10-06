import { QuartzPageTypePlugin } from "../types"
import { match } from "./matchers"
import { NotFound } from "../../components"
import { defaultProcessedContent } from "../vfile"
import { i18n } from "../../i18n"
import { FullSlug } from "../../util/path"

export const NotFoundPageType: QuartzPageTypePlugin = () => ({
  name: "404",
  priority: -1,
  match: match.none(),
  generate({ cfg }) {
    const notFound = i18n(cfg.locale).pages.error.title
    const slug = "404" as FullSlug
    const [, vfile] = defaultProcessedContent({
      slug,
      text: notFound,
      description: notFound,
      frontmatter: { title: notFound, tags: [] },
    })
    // 최근 글 등 목록 컴포넌트에 404가 글처럼 섞이지 않게 (neocello 패치)
    ;(vfile.data as { unlisted?: boolean }).unlisted = true

    return [
      {
        slug,
        title: notFound,
        data: vfile.data,
      },
    ]
  },
  layout: "404",
  frame: "minimal",
  body: NotFound,
})
