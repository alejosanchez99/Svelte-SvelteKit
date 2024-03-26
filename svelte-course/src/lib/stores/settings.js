import { writable } from "svelte/store";

const settings = writable(
  {
    colorScheme: "dark",
    language: "en",
    fontSize: 12,
  },
  (set) => {
    cosnt timer = setTimeout(() => {
      set({
        colorScheme: "light",
        language: "en",
        fontSize: 12,
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  },
);

export default settings;
