import { action, makeObservable, observable } from 'mobx'

import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export class DrawerStoreImplementation {
  isDrawerOpen = false

  constructor() {
    makeObservable(this, {
      isDrawerOpen: observable,
      openDrawer: action,
      closeDrawer: action,
    })
  }

  openDrawer = () => {
    this.isDrawerOpen = true
  }

  closeDrawer = () => {
    this.isDrawerOpen = false
  }
}

export const DrawerStore = new DrawerStoreImplementation()