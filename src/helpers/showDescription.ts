export const showDescription = (name: string, maxLength = 50) => {
  if (name?.length <= maxLength) {
    return name;
  }

  const truncatedName = `${name.slice(0, maxLength)}...`;

  return truncatedName;
};
