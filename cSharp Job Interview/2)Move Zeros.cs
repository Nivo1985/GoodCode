    class Program
    {
        private static void Main()
        {
            var solution = new Solution();
            var input = new[] {0, 1, 0, 3, 12};
            
            solution.MoveZeroes(input);

            Console.ReadKey();
        }
    }
    public class Solution
    {
        public void MoveZeroesBubble(int[] nums) // 0(n*n)
        {
            var length = nums.Length;

            for (var i = 0; i < length; i++) //n
            {
                for (var j = i + 1; j < length; j++) //n
                {
                    if (nums[i] != 0) continue;
                    var temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }

        public void MoveZeroes(int[] nums)
        {
            if (nums.Length < 2) return;
            for (int i = 0, zeroIndex = 0; i < nums.Length; i++) // 0(n)
            {
                if (nums[i] != 0) (nums[zeroIndex], nums[i]) = (nums[i], nums[zeroIndex++]);
            }
        }
    }