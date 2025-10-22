// 1. Reverse a String
function reverse(str) {
    return str.split('').reverse().join('');
}


//again
// 2. Check Palindrome
function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    return clean === clean.split('').reverse().join('');
}

// 3. Find Maximum in Array
function findMax(arr) {

    if (arr.length === 0) {
        return false
    }
    let max = arr[0];

    arr.forEach(element => {
        if (element > max) {
            max = element
        }
    });

    return max
}

// 4. FizzBuzz
function fizBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(i)
        }
    }

    return result
}

// 5. Sum Two Numbers
function sumTwo(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return false
    }

    return a + b
}


//again
// 6. Count Vowels
function countVowels(str) {
    let count = 0;

    str.split(('')).forEach(e => {
        if ('aeiou'.includes(e.toLowerCase())) {
            count++
        }
    });

    return count
}

//again
// 7. Check Anagrams
function areAnagrams(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;

    const clean1 = str1.toLocaleLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    const clean2 = str2.toLocaleLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    return clean1 === clean2
}

//again
// 8. Check Prime Number
function isPrime(num) {
    if (typeof num !== 'number' || num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

//again
// 9. Remove Duplicates from Array
function removeDuplicates(arr) {
    if (!Array.isArray(arr)) return false

    return [... new Set(arr)]
}

//again
// 10. Find First Non-Repeated Character
function firstNonRepeatedChar(str) {
    if (typeof str !== 'string' || str.length === 0) return '';

    let charCount = {}

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) return char
    }

    return ''
}

// 11. Sum of Array
function sumOfArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return 0

    return arr.reduce((sum, num) => typeof num === 'number' ? sum + num : sum, 0)
}

//again
// 12. Check if Array is Sorted
function isSorted(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return true

    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] !== 'number' || typeof arr[i + 1] !== 'number' || arr[i] > arr[i + 1]) return false;
    }
    return true;


}


//again
// 13. Capitalize First Letter
function capitalizeFirst(str) {
    if (typeof str !== 'string' || str.length === 0) return false

    return str[0].toUpperCase() + str.slice(1);
}

//again
// 14. Find Missing Number
function findMissingNumber(arr) {

    if (!Array.isArray(arr) || arr.length === 0) return null;
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}











