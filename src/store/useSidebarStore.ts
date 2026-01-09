import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarStore {
    openModuleIds: number[];
    sidebarScrollTop: number;
    setSidebarScrollTop: (scroll: number) => void;
    toggleModule: (id: number) => void;
    addModule: (id: number) => void;
    removeModule: (id: number) => void;
}

export const useSidebarStore = create<SidebarStore>()(
    persist(
        (set) => ({
            openModuleIds: [],
            sidebarScrollTop: 0,
            setSidebarScrollTop: (sidebarScrollTop) => set({ sidebarScrollTop }),
            toggleModule: (id) =>
                set((state) => ({
                    openModuleIds: state.openModuleIds.includes(id)
                        ? state.openModuleIds.filter((mid) => mid !== id)
                        : [...state.openModuleIds, id],
                })),
            addModule: (id) =>
                set((state) => ({
                    openModuleIds: state.openModuleIds.includes(id) ? state.openModuleIds : [...state.openModuleIds, id],
                })),
            removeModule: (id) =>
                set((state) => ({
                    openModuleIds: state.openModuleIds.filter((mid) => mid !== id),
                })),
        }),
        {
            name: 'sidebar-storage',
        }
    )
);
