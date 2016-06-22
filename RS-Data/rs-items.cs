using System;
using System.Collections.Generic;

namespace RSData
{
	public class rs_items
	{
		private Dictionary<string, int> items = new Dictionary<string, int>();

		public rs_items ()
		{
			items.Add ("Armadyl godsword", 11694);
			items.Add ("Saradomin godsword", 11698);
			items.Add ("Bandos godsword", 11696);
		}

		public int getID(string itemName)
		{
			foreach (KeyValuePair<string, int> pair in items) 
			{
				if (pair.Key == itemName) 
				{
					Console.WriteLine ("Found it @ " + pair.Value);
					return pair.Value;
				}
			}

			return 0;
		}

	}
}

