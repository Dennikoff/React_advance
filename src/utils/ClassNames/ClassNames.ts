export function ClassNames(
  originalClass: string,
  classDict: Record<string, boolean>,
  additionalClasses: string[],
): string {
  const filtredClassNames = [
    originalClass,
    ...additionalClasses,
    ...Object.entries(classDict)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ];

  return filtredClassNames.join(" ");
}
