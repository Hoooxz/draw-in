export const APP_NAME = "Draw In"
export const APP_SHORT_NAME = "Draw In"
export const APP_SLUG = "draw-in"
export const REPO_URL = "https://github.com/Hoooxz/draw-in"
export const ISSUES_URL = `${REPO_URL}/issues`
export const GHCR_IMAGE = "ghcr.io/hoooxz/draw-in"
export const MCP_PACKAGE = "@draw-in/mcp-server"
export const MCP_BIN = "draw-in-mcp"

export function getPublicSiteUrl(): string | undefined {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "")
    return siteUrl || undefined
}

export function getPublicUrl(path = ""): string | undefined {
    const siteUrl = getPublicSiteUrl()
    if (!siteUrl) return undefined
    if (!path) return siteUrl
    return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}
