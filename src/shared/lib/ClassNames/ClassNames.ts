type Mods = Record<string, boolean | string>

export function classNames(
  originalClass: string,
  classDict: Mods = {},
  additionalClasses: (string | undefined)[] = [],
): string {
  const filtredClassNames = [
    originalClass,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(classDict)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ];

  return filtredClassNames.join(" ");
}
