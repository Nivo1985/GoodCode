   class Program
    {
        private static void Main()
        {
            var solution = new Solution();
            var input = new[] { 1, 2, 3, 1 };
            
            Console.WriteLine(solution.Rob(input));

            Console.ReadKey();
        }
    }
    public class Solution
    {
        public int Rob(int[] nums)
        {
            var table = new int[nums.Length];
            for (int i = 0; i < table.Length; i++) table[i] = -1;
            return Rob(nums, 0, table);
        }
        private static int Rob(int[] nums, int i, int[] table) =>
            table[i] = Math.Max(nums[i] + (nums.Length <= i + 2 ? 0 : table[i+2] >=0 ? table[i+2]: Rob(nums, i + 2, table)),
                nums.Length <= (i + 1) ? 0 : table[i + 1] >= 0 ? table[i + 1] : Rob(nums, i + 1, table));
    }