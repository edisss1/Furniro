import { lazy } from "react"

export function lazyLoad(path: string) {
  return lazy(() => import(path))
}
