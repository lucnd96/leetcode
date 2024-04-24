/**
 * @param {string} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x.length < 0) {
    return false;
  }
  if (x.length === 1) {
    return true;
  }
  const arr = x.split('');
  const n = arr.length;
  let j = n - 1;
  for (let i = 0; i < n / 2; i++) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    if (i >= j) {
      break;
    }
    j--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 0) {
    return '';
  }
  let window = s.length;
  while (window >= 1) {
    for (let i = 0; i <= s.length - window; i++) {
      const subStr = s.substr(i, window);
      if (isPalindrome(subStr)) {
        return subStr;
      }
    }
    window--;
  }
  return '';
};

const start = Date.now();
console.log(
  longestPalindrome(
    'busislnescsicxpvvysuqgcudefrfjbwwjcchtgqyajdfwvkypfwshnihjdztgmyuuljxgvhdiwphrweyfkbnjgerkmifbirubhseuhrugwrabnjafnbdfjnufdstjbkuwtnpflffaqmjbhssjlnqftgjiglvvequhapasarlkcvbmkwnkuvwktbgfoaxteprobdwswcdyddyvrehvmxrrjiiidatidlpihkbmmruysmhhsncmfdanafdrfpdtfgkglcqpwrrtvacuicohspkounojuziittugpqjyhhkwfnflozbispehrtrnizowrlzcuollagxwtznjwzcumvedjwokueuqktvvouwnsmpxqvvpuwprezrbobrpnwaccwljchdguubjulyilzvmandjjleitweybqkjttschrjjlebnmponvlktzzcdtuybugggcqffkcffpamauvxfbonjrobgpvlyzveiwemmtdvbjciaytvesnocnjrwodtcokgcuoiicxapmrzpkfphjniuvzjrhbnqndfshoduejyktebgdabidxlkstepuwvtrtgbxaeheylicvhrxddijshcvdadxzsccmainyfpfdhqdanfccqkzlmhsfilvoybqojlvbcixjzqpbngdvesuokbxhkomsiqfyukvspqthlzxdnlwthrgaxhtpjzhrugqbfokrdcyurivmzgtynoqfjbafboselxnfupnpqlryvlcxeksirvufepfwczosrrjpudbwqxwldgjyfjhzlzcojxyqjyxxiqvfhjdwtgoqbyeocffnyxhyyiqspnvrpxmrtcnviukrjvpavervvztoxajriuvxqveqsrttjqepvvahywuzwtmgyrzduxfqspeipimyoxmkadrvrdyefekjxcmsmzmtbugyckcbjsrymszftjyllfmoeoylzeahnrxlxpnlvlvzltwnmldi',
  ),
);
console.log(Date.now() - start);
