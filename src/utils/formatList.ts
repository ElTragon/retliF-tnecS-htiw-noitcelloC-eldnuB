export default function formatList(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const lastValue: string = arr[arr.length - 1];
  const otherValues: string = arr.slice(0, arr.length - 1).join(", ");

  return `${otherValues}, and ${lastValue}`;
}
