//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.SetParameter("name", "Apple MacBook Pro 16");
	subTest1_Demo_Post.SetParameter("year", 2019);
	subTest1_Demo_Post.SetParameter("price", 1849);
	subTest1_Demo_Post.SetParameter("CPU model", "Intel Core i9");
	subTest1_Demo_Post.SetParameter("Hard disk size", "1 TB");
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Post=SeS('subTest1_Demo_Post');
	subTest1_Demo_Post.SetParameter("name", "Apple MacBook Pro 16");
	subTest1_Demo_Post.SetParameter("year", 2019);
	subTest1_Demo_Post.SetParameter("price", 1849);
	subTest1_Demo_Post.SetParameter("CPU model", "Intel Core i9");
	subTest1_Demo_Post.SetParameter("Hard disk size", "1 TB");
	subTest1_Demo_Post.DoExecute();

	var subTest1_Demo_Get_By_Id=SeS('subTest1_Demo_Get_By_Id');
	subTest1_Demo_Get_By_Id.DoExecute();

}

