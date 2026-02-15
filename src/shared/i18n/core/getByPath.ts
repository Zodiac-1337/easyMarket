export const getByPath = (obj: unknown, path: string): unknown => {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && acc !== null) {
      const record = acc as Record<string, unknown>;
      return record[key];
    }
    return undefined;
  }, obj);
};
