import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { inject } from '@angular/core';

const initialState = {
  isSidebarOpen: true,
};

export const LayoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleSidebar: () => {
      // Korrigierte Zeile - verwendet patchState statt update
      patchState(store, { isSidebarOpen: !store.isSidebarOpen() });
    },
  }))
);

// Korrigierte Zeilen - verwenden Sie inject() von Angular
export const useLayoutStore = () => inject(LayoutStore);
