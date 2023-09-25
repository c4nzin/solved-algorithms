export const likes = (a: string[]): string => {
  const n: number = (a && a.length) || 0;
  const template: string = resolveTemplate(n);
  const limit = resolveLimit(n);
  const ctx: { [k: string]: any } = {
    names: Strings.joinWords(a.slice(0, limit), ", ", n > limit ? void 0 : " and "),
    num_others: a.slice(limit).length,
  };
  return Strings.merge(template, ctx);
};

const resolveTemplate = (n: number): string =>
  n > 3 ? "{names} and {num_others} others like this" : n > 1 ? "{names} like this" : n > 0 ? "{names} likes this" : "no one likes this";

const resolveLimit = (n: number): number => (n < 4 ? 3 : 2);

export class Strings {
  public static joinWords = (words: string[], sep: string, lastSep?: string): string =>
    words.length < 2 ? words.join(sep) : [words.slice(0, -1).join(sep), words.slice(-1)[0]].join(lastSep || sep);

  public static merge = (template: string, context: { [k: string]: any }): string =>
    template.replace(/(\{(\w+)\})/g, (match: string, _: string, key: string): string => context[key] || match);
}
