export const getByPath = (obj: unknown, path: string): unknown => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as any))
      return (acc as any)[key];
    return undefined;
  }, obj);
};
