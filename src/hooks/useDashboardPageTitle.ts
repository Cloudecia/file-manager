import { create } from "zustand";
const store = (set) => ({
    title: "CLOUDECIA DASHBOARD",
    setTitle: (arg) => {
        return set(store => ({ title: typeof arg == 'string' ? arg : store.title }))
    }
});

export default create(store)