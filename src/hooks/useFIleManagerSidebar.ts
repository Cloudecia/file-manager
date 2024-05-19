import { create } from "zustand";

const useFileManagerSidebar = create((set) => ({
  isCollapsed: true,
  onOpen: () => set({ isCollapsed: false }),
  onCollapse: () => set({ isCollapsed: true }),
  onToggle: () =>
    set((state) => {
      return { isCollapsed: !state.isCollapsed };
    }),
}));

export default useFileManagerSidebar;
