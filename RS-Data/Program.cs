using System;
using Gtk;
using WebKit;


namespace RSData
{
	class MainClass
	{
		// Window Properties
		private static string _WindowTitle = "RS-Market";
		private static int[] _WindowSize = { 1240, 800 };

		// UI Objects
		//	Containers
		private static ScrolledWindow scrollWindow = new ScrolledWindow ();
		private static Fixed container = new Fixed ();
		//	Search Objects
		private static Entry itemSearchField = new Entry ();
		private static Button itemSearchButton = new Button();
		private static string text_itemSearchButton = "Search";
		private static int[] 	size_itemSearchButton = {75, 25};


		//	WebBrowser
		private static WebView client = new WebView();

		public static void Main (string[] args)
		{
			Application.Init ();
			MainWindow win = new MainWindow ();
			win.Title = _WindowTitle;;
			win.Show ();

			//Set web browser initial settings
			client.SetSizeRequest ( _WindowSize[0], _WindowSize[1]-40);
			client.Open ("https://www.youtube.com/");
			scrollWindow.Add (client);

			//Searchbox properties
			itemSearchField.SetSizeRequest ( 200, 25);
			itemSearchField.Completion = new EntryCompletion ();
			itemSearchField.Completion.Model = createAutoSuggestions ();
			itemSearchField.Completion.TextColumn = 0;
			//Button Properties
			itemSearchButton.Label = text_itemSearchButton;
			itemSearchButton.SetSizeRequest (size_itemSearchButton[0], size_itemSearchButton[1]);
			itemSearchButton.Clicked += callback;

			//Position UI objects on window
			container.SetSizeRequest (_WindowSize[0], _WindowSize[1]);
			container.Put (scrollWindow, 0, 40);
			container.Put (itemSearchField, 10, 10);
			container.Put (itemSearchButton, 220, 10);

			win.Add (container);
			win.ShowAll ();

			Application.Run ();
		}

		static void callback(object e, EventArgs args)
		{
			Console.WriteLine ("Attempting to open: "+itemSearchField.Text);
			client.Open (itemSearchField.Text);
		}

		static TreeModel createAutoSuggestions()
		{

			ListStore store = new ListStore (typeof (string));

			store.AppendValues ("Saradomin godsword");
			store.AppendValues ("Bandos godsword");
			store.AppendValues ("Armadyl godsword");

			return store;
		}
	}
}
