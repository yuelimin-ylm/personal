export function mapToOptions(data: Record<string, string>) {
  return Object.entries(data).map(([key, value]) => {
    return {
      label: value,
      value: key
    };
  });
}
