import { lazy, LazyExoticComponent } from "react"

export function lazyLoad<T extends React.ComponentType<any>>(
  path: string
): LazyExoticComponent<T> {
  return lazy(
    () =>
      import(/* webpackChunkName: "[request]" */ `${path}`) as Promise<{
        default: T
      }>
  )
}
