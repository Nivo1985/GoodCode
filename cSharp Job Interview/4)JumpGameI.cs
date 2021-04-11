class Program
    {
        private static void Main()
        {
            var solution = new Solution();
            var input = new[] { 2, 2, 0, 0, 4 };

            Console.WriteLine(solution.CanJump(input));

            Console.ReadKey();
        }
    }
    public class Solution
    {
        public bool CanJump(int[] nums)
        {
            var lastPos = nums.Length - 2;

            for (var i = lastPos; i > 0; i--)
            {
                if (i + nums[i] >= lastPos)
                {
                    lastPos = i;
                }
            }
            return lastPos == 0;
        }

    }