class Solution {
    public boolean isPalindrome(int x) {
        int reverse = 0;
        int num =x;
        while(num > 0){
            reverse = reverse*10 + (num%10);
            num = num/10;
        }
        return x == reverse;
    }
}