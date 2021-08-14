function palindrome(str) {

 const regex = /[^A-Za-z0-9]/g;
 let copy = str.slice().toLowerCase().replace(regex, '');
 const len = copy.length;
 
 for (let i = 0; i < len / 2; i++) {
   if (copy[i] !== copy[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
