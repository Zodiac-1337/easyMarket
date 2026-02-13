export const cookie = {
  get(name: string): string | undefined {
    const rec = Object.fromEntries(
      document.cookie
        .split("; ")
        .filter(Boolean)
        .map((c) => {
          const [k, ...rest] = c.split("=");
          return [k, decodeURIComponent(rest.join("="))];
        }),
    );
    return rec[name];
  },
  set(name: string, value: string) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; samesite=lax`;
  },
};
