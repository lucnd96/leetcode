const isValid = (str) => {
    if (str[0] === ")" || str.length === 1) {
        return false
    }
    const stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            stack.push()
        } else {
            stack.pop();
        }
    }
    return stack.length === 0
}

/**
 * @param {string} s
 * @return {number}
 */
longestValidParentheses = function (s) {
    if (s.length <= 0) {
        return 0
    }
    let stack = [];
    let start = null;
    let list = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(1)
            if (start === null) {
                start = i;
            }
        } else {
            stack.pop()
            if (stack.length === 0 && start !== null) {
                list.push({start, end: i})
                start = null;
            }
        }
    }
    stack = []
    let end = null;
    for (let i = s.length; i >= 0; i--) {
        if (s[i] === ")") {
            stack.push(1)
            if (end === null) {
                end = i;
            }
        } else {
            stack.pop()
            if (stack.length === 0 && end !== null) {
                list.push({start: i, end})
                end = null;
            }
        }
    }
    if (list.length === 0) {
        return 0
    }
    const r = []
    const map = {}
    list.forEach(e => {
        const key = `${e.start}-${e.end}`
        if (!map[key]) {
            r.push(e)
            map[key] = true
        }
    })
    if (r.length === 1) {
        return r[0].end + 1 - r[0].start
    }
    r.sort((a, b) => a.start - b.start)
    let max = r[0].end + 1 - r[0].start
    let currentLeft = 0;
    let tmp = r[0].end + 1 - r[0].start;
    for (let i = 1; i < r.length; i++) {
        if (r[currentLeft].end === r[i].start - 1) {
            tmp += r[i].end + 1 - r[i].start
            
        } else {
            tmp = r[i].end + 1 - r[i].start;
        }
        if (tmp > max) {
            max = tmp;
        }
        currentLeft = i;
    }
    return max;
};