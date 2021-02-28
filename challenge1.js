function solution(str) {
    let map = {},
        coeff = 1,
        stack = [],
        elem = '',
        count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        if (!isNaN(str[i])) {
            count += Number(str[i])
        } else if (str[i] == ')') {
            if (count == 0) {
                count = 1
            }
            stack.push(count)
            coeff *= count
            count = 0
        } else if (str[i] == '(') {
            let last = stack.pop()
            coeff = Math.floor(coeff / last)
            count = 0
        } else if (str[i] == str[i].toUpperCase()) {
            elem += str[i]
            elem = elem.split('').reverse().join('')
            map[elem] = map[elem] || 0
            map[elem] += (count || 1) * coeff
            elem = ''
            count = 0
        } else {
            elem += str[i]
        }
    }

    str = ''
    Object.keys(map).sort().forEach(function (c) {
        str += map[c] > 1 ? c + String(map[c]) : c
    })
    return str;
}

const getEquation = solution('K4(ON(SO3)2)2')
console.log(getEquation)

// Explanation:
// 1. Loop over string from the end
// 2. If a number is encountered...store in a value called count
// 3. Once a closing bracket ')' is encountered. If count is 0, then, make count = 1.
//    Then, push count into stack and make count = 0
//    so that when it encounters another number in the string, it can get the value.
// 4. If an opening bracket is encountered, pop out the last value of count in stack.
// 5. If a lowercase is encountered, push it into element which is an empty string.
// 6. If uppercase is encountered, add to whatever is in the element(lowercase or nothing) 
//    and add to map object. Clear element after each uppercase is encountered.
// 7. If element is in map, then add the value of the (coeff * count/1) to the value.
// 8. If element is not in map, then add element and add value of (coeff * count/1)
// 9. Go through each property in object and sort according to alphabetical order and return as string

