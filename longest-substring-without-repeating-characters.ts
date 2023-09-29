function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) {
        return 0;
    }

    let maxLength = 0;
    let left = 0;
    const uniqueChars = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        while (uniqueChars.has(s[right])) {
            uniqueChars.delete(s[left]);
            left++;
        }
        uniqueChars.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

