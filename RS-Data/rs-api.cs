using System;

namespace RSData
{
	public class rs_api
	{
		private static rs_items rsItems = new rs_items ();

		public rs_api ()
		{
			
		}


		public string category_information_details()
		{
			return "";
		}
		public string category_price_details(int category_id, char item_letter, int page)
		{
			return "";
		}
		public string graphing_data(int itemID)
		{
			return "";
		}
		public string item_price_information(string itemName)
		{
			//This will need to be parsed by a json decoder
			string jsonResult = "N/A";

			if (rsItems.getID (itemName) != 0) 
			{
				int itemID = rsItems.getID (itemName);
				return jsonResult = @"http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item="+itemID.ToString();
			}
			else 
				return jsonResult;
		}
	}
}

