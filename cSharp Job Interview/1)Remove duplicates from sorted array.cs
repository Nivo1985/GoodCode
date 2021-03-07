    class Program
    {
        static void Main(string[] args)
        {
            var solution = new Solution();

            var arrInput1 = new[] {1, 1, 2};

            var arrInput2 = new[] {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};

            Console.WriteLine(solution.RemoveDuplicates(arrInput1));
            Console.WriteLine(solution.RemoveDuplicates(arrInput2));

            Console.ReadLine();
        }
    }

    public class Solution
    {
        public int RemoveDuplicates(int[] nums)
        {
            var count = 1;
            var len = nums.Length;
            if (len <= 1) return len;
            for (var i = 1; i < len; i++)
            {
                if (nums[i - 1] == nums[i]) continue;
                nums[count++] = nums[i];
            }

            return count;
        }
    }